<script setup>
const kpis = [
  { value: '6', label: 'Funciones MCU' },
  { value: '5', label: 'Niveles de madurez (0-4)' },
  { value: '3', label: 'Perfiles: Básico, Estándar, Avanzado' },
  { value: '100%', label: 'Trazabilidad y auditoría' }
]
</script>

<template>
  <section class="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32">
    <div class="container-app">
      <div class="mx-auto max-w-4xl text-center">
        <span class="chip">
          <span class="h-1.5 w-1.5 rounded-full bg-prisma-success" />
          Proyecto de grado · Tecnicatura en TI
        </span>
        <h1
          class="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Audita y mide tu
          <span
            class="bg-gradient-to-r from-prisma-primary to-prisma-accent bg-clip-text text-transparent"
          >madurez en ciberseguridad</span>
          con evidencia y trazabilidad.
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-prisma-muted">
          <strong class="text-white">PRISMA</strong> es una plataforma web que automatiza la
          aplicación del <strong class="text-white">Marco de Ciberseguridad 5.0 de AGESIC</strong>,
          reemplazando planillas dispersas por un entorno seguro, multitenant y auditable.
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#features"
            class="btn-primary"
          >
            Descubrir la plataforma
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="h-4 w-4"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            /></svg>
          </a>
          <a
            href="#pipeline"
            class="btn-ghost"
          >
            Ver estrategia DevOps
          </a>
        </div>
      </div>

      <dl
        class="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        <div
          v-for="k in kpis"
          :key="k.label"
          class="card text-center"
        >
          <dt class="text-2xl font-bold text-white sm:text-3xl">
            {{ k.value }}
          </dt>
          <dd class="mt-1 text-xs uppercase tracking-wide text-prisma-muted">
            {{ k.label }}
          </dd>
        </div>
      </dl>
    </div>

    <!-- Glow decorativo -->
    <div class="pointer-events-none absolute inset-x-0 top-1/3 -z-10 flex justify-center">
      <div class="h-72 w-3/4 rounded-full bg-prisma-primary/10 blur-3xl" />
    </div>
  </section>
</template>
