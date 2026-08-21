<script setup>
const team = [
  {
    name: 'Federico De Armas',
    role: 'Arquitecto de Solución',
    focus: 'Diseño del sistema, motor de cálculo y análisis de brechas MCU 5.0.',
    initials: 'FD'
  },
  {
    name: 'Luis Araujo',
    role: 'DevSecOps Lead',
    focus: 'Pipeline CI/CD, contenedorización, seguridad OWASP y observabilidad.',
    initials: 'LA'
  },
  {
    name: 'Joaquín Franco',
    role: 'Full-Stack Engineer',
    focus: 'Frontend Vue 3, integración con Spring Boot y experiencia de auditor.',
    initials: 'JF'
  }
]
</script>

<template>
  <section
    id="equipo"
    class="py-24 sm:py-28"
  >
    <div class="container-app">
      <div class="text-center">
        <span class="chip">Equipo del proyecto</span>
        <h2 class="section-title mt-4">
          Tres perfiles, un producto
        </h2>
        <p class="section-lead">
          Proyecto Final · Licenciatura en Tecnologías de la Información.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-3">
        <article
          v-for="p in team"
          :key="p.name"
          class="card text-center"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-prisma-primary to-prisma-accent text-lg font-bold text-prisma-bg"
          >
            {{ p.initials }}
          </div>
          <h3 class="mt-4 text-lg font-semibold text-white">
            {{ p.name }}
          </h3>
          <p class="text-sm font-medium text-prisma-accent">
            {{ p.role }}
          </p>
          <p class="mt-2 text-sm text-prisma-muted">
            {{ p.focus }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
