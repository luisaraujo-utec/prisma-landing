<script setup>
const stack = [
  {
    layer: 'Frontend',
    tech: 'Vue 3 + Vite + Tailwind',
    desc: 'SPA responsive con formularios dinámicos y dashboards interactivos.'
  },
  {
    layer: 'Backend principal',
    tech: 'Spring Boot',
    desc: 'API REST, RBAC, motor de cálculo de madurez y máquina de estados.'
  },
  {
    layer: 'Servicio IA',
    tech: 'FastAPI + Ollama (Llama 3)',
    desc: 'RAG local sobre documentación del MCU 5.0. Nada sale del entorno.'
  },
  {
    layer: 'Base de datos',
    tech: 'PostgreSQL',
    desc: 'Relacional + JSONB para catálogo dinámico y respuestas versionadas.'
  },
  {
    layer: 'Almacenamiento',
    tech: 'Local (MVP) → MinIO (S3)',
    desc: 'Evidencias con nombres UUID y URLs firmadas temporales.'
  },
  {
    layer: 'Observabilidad',
    tech: 'Grafana + LogRocket',
    desc: 'Métricas, trazas y monitoreo de logs de aplicación y sesión.'
  }
]
</script>

<template>
  <section
    id="arquitectura"
    class="py-24 sm:py-28"
  >
    <div class="container-app">
      <div class="text-center">
        <span class="chip">Arquitectura del sistema completo</span>
        <h2 class="section-title mt-4">
          Un stack pensado para escalar y auditar
        </h2>
        <p class="section-lead">
          Separación clara entre presentación, lógica de negocio, IA especializada y persistencia,
          todo dentro del perímetro de seguridad de PRISMA.
        </p>
      </div>

      <!-- Diagrama SVG -->
      <div class="mt-14 overflow-x-auto rounded-2xl border border-prisma-border bg-prisma-panel/60 p-6">
        <svg
          viewBox="0 0 900 420"
          class="mx-auto h-auto w-full max-w-4xl"
          role="img"
          aria-label="Diagrama de arquitectura PRISMA"
        >
          <defs>
            <linearGradient
              id="grad-fe"
              x1="0"
              x2="1"
            ><stop
              offset="0"
              stop-color="#3b82f6"
            /><stop
              offset="1"
              stop-color="#22d3ee"
            /></linearGradient>
            <linearGradient
              id="grad-be"
              x1="0"
              x2="1"
            ><stop
              offset="0"
              stop-color="#22d3ee"
            /><stop
              offset="1"
              stop-color="#10b981"
            /></linearGradient>
            <linearGradient
              id="grad-ai"
              x1="0"
              x2="1"
            ><stop
              offset="0"
              stop-color="#a78bfa"
            /><stop
              offset="1"
              stop-color="#22d3ee"
            /></linearGradient>
            <linearGradient
              id="grad-db"
              x1="0"
              x2="1"
            ><stop
              offset="0"
              stop-color="#f59e0b"
            /><stop
              offset="1"
              stop-color="#ef4444"
            /></linearGradient>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M 0 0 L 10 5 L 0 10 z"
                fill="#94a3b8"
              />
            </marker>
          </defs>

          <!-- Usuario -->
          <g>
            <circle
              cx="70"
              cy="210"
              r="26"
              fill="#101a2e"
              stroke="#22d3ee"
              stroke-width="2"
            />
            <text
              x="70"
              y="215"
              text-anchor="middle"
              fill="#e5eaf5"
              font-size="12"
              font-weight="600"
            >User</text>
            <text
              x="70"
              y="255"
              text-anchor="middle"
              fill="#94a3b8"
              font-size="11"
            >Auditor / Evaluador</text>
          </g>

          <!-- Frontend -->
          <g>
            <rect
              x="160"
              y="170"
              width="150"
              height="80"
              rx="10"
              fill="#0B1220"
              stroke="url(#grad-fe)"
              stroke-width="2"
            />
            <text
              x="235"
              y="200"
              text-anchor="middle"
              fill="#e5eaf5"
              font-size="13"
              font-weight="700"
            >Frontend</text>
            <text
              x="235"
              y="220"
              text-anchor="middle"
              fill="#22d3ee"
              font-size="11"
            >Vue 3 + Vite</text>
            <text
              x="235"
              y="238"
              text-anchor="middle"
              fill="#94a3b8"
              font-size="10"
            >Tailwind · Nginx</text>
          </g>

          <!-- Backend -->
          <g>
            <rect
              x="360"
              y="170"
              width="170"
              height="80"
              rx="10"
              fill="#0B1220"
              stroke="url(#grad-be)"
              stroke-width="2"
            />
            <text
              x="445"
              y="200"
              text-anchor="middle"
              fill="#e5eaf5"
              font-size="13"
              font-weight="700"
            >Backend API</text>
            <text
              x="445"
              y="220"
              text-anchor="middle"
              fill="#22d3ee"
              font-size="11"
            >Spring Boot (Java)</text>
            <text
              x="445"
              y="238"
              text-anchor="middle"
              fill="#94a3b8"
              font-size="10"
            >JWT · RBAC · Motor MCU</text>
          </g>

          <!-- Servicio IA -->
          <g>
            <rect
              x="360"
              y="40"
              width="170"
              height="80"
              rx="10"
              fill="#0B1220"
              stroke="url(#grad-ai)"
              stroke-width="2"
            />
            <text
              x="445"
              y="70"
              text-anchor="middle"
              fill="#e5eaf5"
              font-size="13"
              font-weight="700"
            >Servicio IA</text>
            <text
              x="445"
              y="90"
              text-anchor="middle"
              fill="#a78bfa"
              font-size="11"
            >FastAPI + Ollama</text>
            <text
              x="445"
              y="108"
              text-anchor="middle"
              fill="#94a3b8"
              font-size="10"
            >RAG · Llama 3</text>
          </g>

          <!-- BD -->
          <g>
            <rect
              x="590"
              y="90"
              width="160"
              height="70"
              rx="10"
              fill="#0B1220"
              stroke="url(#grad-db)"
              stroke-width="2"
            />
            <text
              x="670"
              y="118"
              text-anchor="middle"
              fill="#e5eaf5"
              font-size="13"
              font-weight="700"
            >PostgreSQL</text>
            <text
              x="670"
              y="138"
              text-anchor="middle"
              fill="#94a3b8"
              font-size="11"
            >Relacional + JSONB</text>
          </g>

          <!-- Almacenamiento -->
          <g>
            <rect
              x="590"
              y="200"
              width="160"
              height="70"
              rx="10"
              fill="#0B1220"
              stroke="#f59e0b"
              stroke-width="2"
            />
            <text
              x="670"
              y="228"
              text-anchor="middle"
              fill="#e5eaf5"
              font-size="13"
              font-weight="700"
            >Almacenamiento</text>
            <text
              x="670"
              y="248"
              text-anchor="middle"
              fill="#94a3b8"
              font-size="11"
            >MinIO (S3) · Local</text>
          </g>

          <!-- Observabilidad -->
          <g>
            <rect
              x="590"
              y="310"
              width="160"
              height="70"
              rx="10"
              fill="#0B1220"
              stroke="#10b981"
              stroke-width="2"
            />
            <text
              x="670"
              y="338"
              text-anchor="middle"
              fill="#e5eaf5"
              font-size="13"
              font-weight="700"
            >Observabilidad</text>
            <text
              x="670"
              y="358"
              text-anchor="middle"
              fill="#94a3b8"
              font-size="11"
            >Grafana · LogRocket</text>
          </g>

          <!-- Flechas -->
          <line
            x1="96"
            y1="210"
            x2="155"
            y2="210"
            stroke="#94a3b8"
            stroke-width="1.5"
            marker-end="url(#arrow)"
          />
          <line
            x1="310"
            y1="210"
            x2="355"
            y2="210"
            stroke="#94a3b8"
            stroke-width="1.5"
            marker-end="url(#arrow)"
          />
          <line
            x1="445"
            y1="170"
            x2="445"
            y2="125"
            stroke="#94a3b8"
            stroke-width="1.5"
            marker-end="url(#arrow)"
          />
          <line
            x1="530"
            y1="200"
            x2="585"
            y2="130"
            stroke="#94a3b8"
            stroke-width="1.5"
            marker-end="url(#arrow)"
          />
          <line
            x1="530"
            y1="220"
            x2="585"
            y2="235"
            stroke="#94a3b8"
            stroke-width="1.5"
            marker-end="url(#arrow)"
          />
          <line
            x1="530"
            y1="240"
            x2="585"
            y2="335"
            stroke="#94a3b8"
            stroke-width="1.5"
            marker-end="url(#arrow)"
          />
          <line
            x1="530"
            y1="80"
            x2="585"
            y2="120"
            stroke="#94a3b8"
            stroke-width="1.5"
            marker-end="url(#arrow)"
          />

          <!-- Perímetro -->
          <rect
            x="340"
            y="20"
            width="430"
            height="380"
            rx="14"
            fill="none"
            stroke="#1e2a44"
            stroke-dasharray="6 4"
          />
          <text
            x="555"
            y="15"
            text-anchor="middle"
            fill="#94a3b8"
            font-size="11"
            font-weight="600"
          >Perímetro PRISMA (Docker Compose)</text>
        </svg>
      </div>

      <!-- Tabla de stack -->
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="s in stack"
          :key="s.layer"
          class="card"
        >
          <div class="text-xs font-semibold uppercase tracking-wider text-prisma-accent">
            {{ s.layer }}
          </div>
          <div class="mt-1 text-base font-semibold text-white">
            {{ s.tech }}
          </div>
          <p class="mt-2 text-sm text-prisma-muted">
            {{ s.desc }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
