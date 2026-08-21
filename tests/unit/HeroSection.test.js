import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../../src/components/HeroSection.vue'

describe('HeroSection', () => {
  it('renderiza el título principal con la marca PRISMA', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('PRISMA')
    expect(wrapper.text()).toContain('madurez en ciberseguridad')
  })

  it('menciona el Marco 5.0 de AGESIC', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toMatch(/Marco de Ciberseguridad 5\.0/)
    expect(wrapper.text()).toContain('AGESIC')
  })

  it('renderiza los 4 KPIs clave', () => {
    const wrapper = mount(HeroSection)
    // 4 <dt> con los indicadores
    expect(wrapper.findAll('dt')).toHaveLength(4)
    expect(wrapper.text()).toContain('6')
    expect(wrapper.text()).toContain('5')
    expect(wrapper.text()).toContain('3')
  })

  it('incluye 2 CTAs (Descubrir plataforma y DevOps)', () => {
    const wrapper = mount(HeroSection)
    const anchors = wrapper.findAll('a')
    // Al menos los 2 CTAs esperados
    expect(anchors.length).toBeGreaterThanOrEqual(2)
    const hrefs = anchors.map((a) => a.attributes('href'))
    expect(hrefs).toContain('#features')
    expect(hrefs).toContain('#pipeline')
  })
})
