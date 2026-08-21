<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import McuSection from './components/McuSection.vue'
import ArchitectureSection from './components/ArchitectureSection.vue'
import PipelineSection from './components/PipelineSection.vue'
import TeamSection from './components/TeamSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <FeaturesSection />
    <McuSection />
    <ArchitectureSection />
    <PipelineSection />
    <TeamSection />
  </main>
  <FooterSection />
</template>
