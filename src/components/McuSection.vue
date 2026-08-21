<script setup>
const funciones = [
  {
    code: 'GV',
    name: 'Gobernar',
    color: 'from-blue-500 to-cyan-500',
    desc: 'Establecer y monitorear la estrategia, expectativas y política de ciberseguridad.'
  },
  {
    code: 'ID',
    name: 'Identificar',
    color: 'from-cyan-500 to-teal-500',
    desc: 'Comprender activos, riesgos y capacidades para priorizar esfuerzos.'
  },
  {
    code: 'PR',
    name: 'Proteger',
    color: 'from-teal-500 to-emerald-500',
    desc: 'Implementar controles para gestionar el riesgo y proteger los servicios críticos.'
  },
  {
    code: 'DE',
    name: 'Detectar',
    color: 'from-emerald-500 to-lime-500',
    desc: 'Identificar de manera oportuna los eventos e incidentes de ciberseguridad.'
  },
  {
    code: 'RS',
    name: 'Responder',
    color: 'from-amber-500 to-orange-500',
    desc: 'Tomar acciones ante un incidente detectado para contener su impacto.'
  },
  {
    code: 'RC',
    name: 'Recuperar',
    color: 'from-orange-500 to-red-500',
    desc: 'Restablecer capacidades y servicios afectados por un incidente.'
  }
]

const perfiles = [
  {
    name: 'Básico',
    nivel: 'Nivel 1-2',
    target: 'Organizaciones que inician su recorrido en ciberseguridad.',
    color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
  },
  {
    name: 'Estándar',
    nivel: 'Nivel 2-3',
    target: 'Cumplimiento normativo consolidado y gestión sistemática de riesgos.',
    color: 'bg-blue-500/15 text-blue-300 border-blue-500/40'
  },
  {
    name: 'Avanzado',
    nivel: 'Nivel 3-4',
    target: 'Entes públicos y sectores críticos con procesos maduros y medibles.',
    color: 'bg-purple-500/15 text-purple-300 border-purple-500/40'
  }
]
</script>

<template>
  <section
    id="mcu"
    class="border-t border-prisma-border/50 bg-prisma-panel/30 py-24 sm:py-28"
  >
    <div class="container-app">
      <div class="text-center">
        <span class="chip">Marco de Ciberseguridad 5.0 · AGESIC</span>
        <h2 class="section-title mt-4">
          6 funciones · 5 niveles · 3 perfiles
        </h2>
        <p class="section-lead">
          El MCU 5.0 es obligatorio para entes públicos y sectores críticos (Decreto 66/025).
          PRISMA lo aplica de forma estandarizada y comparable entre evaluaciones.
        </p>
      </div>

      <!-- Funciones -->
      <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="f in funciones"
          :key="f.code"
          class="card card-hover"
        >
          <div class="flex items-center gap-3">
            <span
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold text-prisma-bg"
              :class="f.color"
            >{{ f.code }}</span>
            <h3 class="text-lg font-semibold text-white">
              {{ f.name }}
            </h3>
          </div>
          <p class="mt-3 text-sm text-prisma-muted">
            {{ f.desc }}
          </p>
        </article>
      </div>

      <!-- Perfiles -->
      <div class="mt-16">
        <h3 class="text-center text-xl font-bold text-white sm:text-2xl">
          Perfiles comunitarios soportados
        </h3>
        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          <div
            v-for="p in perfiles"
            :key="p.name"
            class="card text-center"
          >
            <span
              class="inline-block rounded-md border px-2.5 py-1 text-xs font-semibold uppercase"
              :class="p.color"
            >{{ p.nivel }}</span>
            <h4 class="mt-3 text-lg font-semibold text-white">
              Perfil {{ p.name }}
            </h4>
            <p class="mt-2 text-sm text-prisma-muted">
              {{ p.target }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
