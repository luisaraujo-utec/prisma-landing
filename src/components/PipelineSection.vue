<script setup>
const stages = [
  {
    n: '1',
    title: 'Commit / PR',
    tool: 'Git · GitHub',
    tasks: ['git push', 'Apertura de PR', 'Trigger de workflow']
  },
  {
    n: '2',
    title: 'CI - Calidad',
    tool: 'GitHub Actions',
    tasks: ['ESLint / Prettier', 'npm ci', 'Auditoría de deps (npm audit)']
  },
  {
    n: '3',
    title: 'Tests',
    tool: 'Vitest + Vue Test Utils',
    tasks: ['Unitarios de componentes', 'Reporte de cobertura', 'Fail-fast en rojo']
  },
  {
    n: '4',
    title: 'Build',
    tool: 'Vite + Docker',
    tasks: ['vite build → dist/', 'Docker multi-stage (Nginx)', 'Etiquetado por SHA']
  },
  {
    n: '5',
    title: 'Deploy',
    tool: 'GitHub Pages',
    tasks: ['Publicación en gh-pages', 'URL pública inmediata', 'Rollback por commit']
  }
]
</script>

<template>
  <section
    id="pipeline"
    class="border-t border-prisma-border/50 bg-prisma-panel/30 py-24 sm:py-28"
  >
    <div class="container-app">
      <div class="text-center">
        <span class="chip">DevSecOps aplicado</span>
        <h2 class="section-title mt-4">
          Pipeline CI/CD end-to-end
        </h2>
        <p class="section-lead">
          Cada commit dispara un flujo automatizado que valida calidad, ejecuta pruebas, construye
          la imagen y publica en producción. Cero pasos manuales.
        </p>
      </div>

      <!-- Timeline -->
      <ol class="relative mt-14 grid gap-6 md:grid-cols-5">
        <li
          v-for="s in stages"
          :key="s.n"
          class="card card-hover relative"
        >
          <span
            class="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-prisma-primary text-xs font-bold text-white"
          >{{ s.n }}</span>
          <h3 class="mt-2 text-base font-semibold text-white">
            {{ s.title }}
          </h3>
          <p class="mt-1 text-xs font-semibold uppercase tracking-wider text-prisma-accent">
            {{ s.tool }}
          </p>
          <ul class="mt-3 space-y-1.5 text-sm text-prisma-muted">
            <li
              v-for="t in s.tasks"
              :key="t"
              class="flex items-start gap-2"
            >
              <span class="mt-1.5 inline-block h-1 w-1 rounded-full bg-prisma-accent" />
              <span>{{ t }}</span>
            </li>
          </ul>
        </li>
      </ol>

      <!-- Snippet -->
      <div class="mt-14 grid gap-6 lg:grid-cols-2">
        <div class="card">
          <h3 class="text-lg font-semibold text-white">
            docker-compose.yml (extracto)
          </h3>
          <pre class="mt-3 overflow-x-auto rounded-lg bg-prisma-bg/80 p-4 text-xs leading-relaxed text-prisma-muted"><code>services:
  web:
    build: .
    image: prisma-landing:${TAG:-latest}
    ports: ["8080:80"]
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost/"]
      interval: 30s
      timeout: 5s
      retries: 3</code></pre>
        </div>
        <div class="card">
          <h3 class="text-lg font-semibold text-white">
            .github/workflows/ci.yml (extracto)
          </h3>
          <pre class="mt-3 overflow-x-auto rounded-lg bg-prisma-bg/80 p-4 text-xs leading-relaxed text-prisma-muted"><code>jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run lint
      - run: npm run test:unit
      - run: npm run build</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>
