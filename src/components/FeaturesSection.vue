<script setup>
const features = [
  {
    icon: 'shield',
    title: 'Multitenant seguro',
    desc: 'Aislamiento estricto por tenant_id: cada organización trabaja aislada, con RBAC en 5 roles.'
  },
  {
    icon: 'clipboard',
    title: 'Cuestionario guiado',
    desc: 'Formulario tipo stepper por función y subcategoría del MCU 5.0 con guardado automático.'
  },
  {
    icon: 'chart',
    title: 'Motor de cálculo',
    desc: 'Promedios de madurez por subcategoría, categoría, función y global. Comparación actual vs objetivo.'
  },
  {
    icon: 'target',
    title: 'Análisis de brechas',
    desc: 'Detección automática de controles pendientes y generación de plan de mejora priorizado.'
  },
  {
    icon: 'file',
    title: 'Evidencias documentales',
    desc: 'Carga segura, verificación MIME real, nombres UUID y descarga vía URL firmada.'
  },
  {
    icon: 'brain',
    title: 'RAG con IA local',
    desc: 'FastAPI + Ollama (Llama 3) evalúan documentación contra el marco sin salir del entorno.'
  },
  {
    icon: 'lock',
    title: 'Trazabilidad inmutable',
    desc: 'Bitácora de todos los eventos críticos: cambios, subidas, aprobaciones y accesos.'
  },
  {
    icon: 'report',
    title: 'Reportes ejecutivos',
    desc: 'Exportación a PDF gerencial y CSV/Excel detallado con gráficos de araña y KPIs.'
  }
]

const icons = {
  shield:
    'M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z',
  clipboard:
    'M9 4h6a2 2 0 012 2v0h1a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h1v0a2 2 0 012-2z',
  chart:
    'M4 20V10m6 10V4m6 16v-8m6 8V8',
  target:
    'M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10zm0-3a2 2 0 100-4 2 2 0 000 4z',
  file:
    'M13 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V9l-6-6zm0 0v6h6',
  brain:
    'M9 3a3 3 0 00-3 3v1a3 3 0 00-2 5.83A3 3 0 006 18a3 3 0 003 3h0V3zm6 0v18h0a3 3 0 003-3 3 3 0 002-5.17A3 3 0 0018 7V6a3 3 0 00-3-3z',
  lock:
    'M6 10V7a6 6 0 1112 0v3M5 10h14v11H5z',
  report:
    'M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
}
</script>

<template>
  <section
    id="features"
    class="py-24 sm:py-28"
  >
    <div class="container-app">
      <div class="text-center">
        <span class="chip">Módulos del sistema</span>
        <h2 class="section-title mt-4">
          Todo lo que necesita una auditoría MCU 5.0
        </h2>
        <p class="section-lead">
          De la respuesta del cuestionario a la evidencia, del cálculo a la observación del auditor,
          del gap al plan de mejora. Un único flujo, un único lugar.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="f in features"
          :key="f.title"
          class="card card-hover"
        >
          <div
            class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-prisma-primary/15 text-prisma-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="icons[f.icon]"
              />
            </svg>
          </div>
          <h3 class="text-base font-semibold text-white">
            {{ f.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-prisma-muted">
            {{ f.desc }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
