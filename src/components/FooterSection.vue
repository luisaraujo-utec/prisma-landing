<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-prisma-border/60 bg-prisma-panel/40 py-10">
    <div class="container-app flex flex-col items-center justify-between gap-4 text-sm text-prisma-muted sm:flex-row">
      <div class="flex items-center gap-2">
        <span class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-prisma-primary to-prisma-accent text-[10px] font-bold text-prisma-bg">P</span>
        <span>PRISMA · {{ year }} · Proyecto Final Tecnicatura en TI</span>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/marco-ciberseguridad-50"
          class="hover:text-white"
          rel="noopener"
          target="_blank"
        >Marco 5.0 AGESIC</a>
        <a
          href="#top"
          class="hover:text-white"
        >Volver arriba ↑</a>
      </div>
    </div>
  </footer>
</template>
