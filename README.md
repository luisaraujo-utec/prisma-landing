# PRISMA · Landing pública

> **Plataforma de Revisión Integral de Seguridad y Marcos de Auditorías**
> Proyecto Final · Licenciatura en Tecnologías de la Información
> Federico De Armas · Luis Araujo · Joaquín Franco

Landing estática que presenta **PRISMA**, la plataforma web para automatizar la evaluación del **Marco de Ciberseguridad 5.0 de AGESIC (MCU 5.0)**.

Este repositorio es la **versión simplificada** del proyecto, pensada para demostrar el **flujo DevOps end-to-end**: cada commit dispara linter + tests + build + despliegue automatizado en GitHub Pages, sin intervención manual.

---

## 🎯 Objetivo del entregable

Demostrar un pipeline DevOps aplicable (no teórico) sobre un proyecto real, con:

- Repositorio Git como única fuente de verdad
- Integración continua (CI): calidad + testing + build
- Entrega continua (CD): despliegue automático a producción
- Contenedorización con Docker
- Configuración multiambiente (dev / test / prod)

---

## 🧱 Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework UI | **Vue 3** (Composition API) + Vite 5 |
| Estilos | **Tailwind CSS 3** |
| Testing | **Vitest** + Vue Test Utils + jsdom |
| Lint / Format | ESLint 8 + Prettier 3 |
| Contenedor | **Docker** multi-stage (Node builder → **Nginx 1.27 alpine**) |
| Orquestación local | Docker Compose |
| CI/CD | **GitHub Actions** |
| Hosting | **GitHub Pages** |

---

## 📁 Estructura del proyecto

```
prisma-landing/
├── .github/
│   └── workflows/
│       ├── ci.yml            # CI: lint, test, build, docker build
│       └── deploy.yml        # CD: deploy a GitHub Pages
├── docker/
│   └── nginx.conf            # Config de Nginx con SPA fallback + seguridad
├── docs/
│   ├── ANALISIS_DEVOPS.pdf   # Documento entregable (5-10 páginas)
│   └── GUION_VIDEO.md        # Guión de la exposición grupal
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/main.css       # Tailwind + estilos base
│   ├── components/           # NavBar, Hero, Features, MCU, Arquitectura, Pipeline, Team, Footer
│   ├── App.vue
│   └── main.js
├── tests/
│   └── unit/                 # Tests con Vitest
├── .dockerignore
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc.json
├── docker-compose.yml
├── Dockerfile                # Multi-stage: builder + runtime nginx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Puesta en marcha local

### Opción A · Con Node (desarrollo)

Requisitos: **Node 20 LTS** o superior.

```bash
# 1. Instalar dependencias
npm ci

# 2. Servidor de desarrollo con HMR
npm run dev
#   → http://localhost:5173

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

### Opción B · Con Docker (idéntico a producción)

Requisitos: **Docker** y **Docker Compose** v2.

```bash
# Construir y levantar
docker compose up -d --build

# Ver logs
docker compose logs -f web

# Bajar
docker compose down
```

La landing quedará expuesta en **http://localhost:8080**.

---

## 🧪 Testing

```bash
# Tests unitarios una vez
npm run test:unit

# Modo watch (durante desarrollo)
npm run test:watch

# Lint
npm run lint

# Auto-formato
npm run format
```

Los tests cubren los componentes clave (HeroSection, McuSection, TeamSection) verificando que el contenido semántico correcto se renderice (funciones del MCU, perfiles, integrantes del equipo). En el proyecto completo esta cobertura se extenderá al motor de cálculo de madurez con umbral del 100 %.

---

## 🐳 Contenedorización

El `Dockerfile` es **multi-stage**:

1. **Builder** (`node:20-alpine`): instala dependencias con `npm ci`, ejecuta `vite build`. Todo el ruido queda aquí.
2. **Runtime** (`nginx:1.27-alpine`): solo recibe `/dist`. Imagen final < 50 MB, sin Node ni código fuente.

Endurecimientos aplicados:

- Usuario `nginx` (no root)
- Sistema de archivos **read-only** en runtime
- Sin nuevos privilegios (`no-new-privileges:true`)
- Healthcheck integrado
- Headers HTTP de seguridad: `X-Content-Type-Options`, `X-Frame-Options`, CSP, `Referrer-Policy`, `Permissions-Policy`
- `server_tokens off`

---

## ⚙️ Pipeline CI/CD

### `ci.yml` — se dispara en cada push y PR

1. Checkout
2. Setup Node 20 con caché de `~/.npm`
3. `npm ci` (instalación reproducible)
4. `npm audit --audit-level=high` (visibilidad de vulnerabilidades)
5. `npm run lint`
6. `npm run test:unit`
7. `npm run build`
8. Upload del artefacto `dist/`
9. En `main`: build de imagen Docker con caché de GitHub Actions

**Concurrency**: corridas previas del mismo branch se cancelan → ahorro de minutos.
**Permisos**: `contents: read` (least privilege).

### `deploy.yml` — se dispara en merge a `main`

1. Build con `VITE_BASE_PATH=/<repo>/` para GitHub Pages
2. Copia `dist/index.html` → `dist/404.html` (SPA fallback en Pages)
3. `actions/configure-pages` + `actions/upload-pages-artifact`
4. `actions/deploy-pages` publica automáticamente

Tiempo típico end-to-end: **~90 segundos**.

---

## 🌐 Configuración multiambiente

| Entorno | Rama | Base URL | Cómo se despliega |
|---|---|---|---|
| **dev** | cualquier feature branch | `http://localhost:5173` | `npm run dev` |
| **test** | `develop` | contenedor local o servidor pruebas | `docker compose up -d --build` |
| **staging** *(futuro)* | `staging` | subdominio dedicado | Actions → Portainer / Watchtower |
| **prod** | `main` | `https://<owner>.github.io/<repo>/` | `deploy.yml` automático |

Todas las variables sensibles/específicas viven en **GitHub Secrets** o `.env.*` (nunca en el repo). Ver `.env.example`.

---

## 🔐 Seguridad — controles ya aplicados en esta versión

- Dependencias con lockfile (`package-lock.json`) e instalación reproducible con `npm ci`.
- `npm audit` en cada CI.
- Contenedor sin privilegios, read-only, sin Node en runtime.
- CSP + headers de seguridad HTTP a nivel Nginx.
- Permisos mínimos del workflow (`permissions: contents: read`).
- Sin credenciales embebidas: todo por `env` o `secrets`.

---

## 📄 Entregables asociados

- **`docs/ANALISIS_DEVOPS.pdf`** — Documento de la consigna (contexto, análisis del flujo actual, oportunidades de automatización, contenedorización, beneficios y riesgos).
- **`docs/GUION_VIDEO.md`** — Guión de la exposición grupal con distribución equitativa entre los 3 integrantes.

---

## 📚 Referencias

- [Marco de Ciberseguridad 5.0 · AGESIC](https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/marco-ciberseguridad-50)
- [Decreto 66/025](https://www.impo.com.uy/) — obligatoriedad para entes públicos y sectores críticos

---

© 2026 · Proyecto PRISMA · Licenciatura en Tecnologías de la Información
