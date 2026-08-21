<script setup>
import { ref } from 'vue'

const open = ref(false)
const links = [
  { href: '#features', label: 'Características' },
  { href: '#mcu', label: 'Marco 5.0' },
  { href: '#arquitectura', label: 'Arquitectura' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#equipo', label: 'Equipo' }
]
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-prisma-border/60 bg-prisma-bg/70 backdrop-blur-md"
  >
    <div class="container-app flex h-16 items-center justify-between">
      <a
        href="#top"
        class="flex items-center gap-2 font-bold tracking-tight text-white"
      >
        <span
          class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-prisma-primary to-prisma-accent text-prisma-bg"
          aria-hidden="true"
        >P</span>
        <span>PRISMA</span>
        <span class="ml-1 rounded-md border border-prisma-border px-1.5 py-0.5 text-[10px] font-semibold text-prisma-muted">
          MVP
        </span>
      </a>

      <nav
        class="hidden items-center gap-6 md:flex"
        aria-label="Principal"
      >
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-sm font-medium text-prisma-muted transition hover:text-white"
        >
          {{ l.label }}
        </a>
        <a
          href="https://github.com"
          class="btn-primary"
          rel="noopener"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-4 w-4"
          ><path
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clip-rule="evenodd"
          /></svg>
          Ver repositorio
        </a>
      </nav>

      <button
        class="md:hidden"
        aria-label="Abrir menú"
        @click="open = !open"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="h-6 w-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="open"
      class="md:hidden"
    >
      <nav
        class="container-app flex flex-col gap-3 pb-4"
        aria-label="Móvil"
      >
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="rounded-md px-3 py-2 text-sm font-medium text-prisma-muted hover:bg-prisma-panel hover:text-white"
          @click="open = false"
        >
          {{ l.label }}
        </a>
      </nav>
    </div>
  </header>
  <div id="top" />
</template>
