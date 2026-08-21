# =========================================================
# PRISMA Landing · Dockerfile multi-stage
# =========================================================
# Stage 1 (builder): compila los assets estáticos con Vite.
# Stage 2 (runtime): imagen liviana de Nginx que sirve /dist.
# La imagen final pesa < 50 MB y NO contiene Node ni fuentes.
# ---------------------------------------------------------

# ------ Stage 1: build ------
FROM node:20-alpine AS builder
WORKDIR /app

# Copiamos solo los manifiestos primero para cachear npm ci
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# Copiamos el resto del código y compilamos
COPY . .
# En producción bajo Docker servimos en la raíz "/"
ENV VITE_BASE_PATH=/
RUN npm run build

# ------ Stage 2: runtime ------
FROM nginx:1.27-alpine AS runtime

# Config custom (SPA fallback, gzip, cache y headers de seguridad)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copia solo los artefactos construidos
COPY --from=builder /app/dist /usr/share/nginx/html

# Hardening mínimo: usuario no-root de nginx
# nginx:alpine ya trae user "nginx"; se asegura permisos correctos
RUN chown -R nginx:nginx /usr/share/nginx/html \
 && chmod -R a-w /usr/share/nginx/html

# Healthcheck a nivel de contenedor
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
