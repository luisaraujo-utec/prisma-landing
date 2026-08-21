import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TeamSection from '../../src/components/TeamSection.vue'

describe('TeamSection', () => {
  it('renderiza a los 3 integrantes del equipo', () => {
    const wrapper = mount(TeamSection)
    expect(wrapper.text()).toContain('Federico De Armas')
    expect(wrapper.text()).toContain('Luis Araujo')
    expect(wrapper.text()).toContain('Joaquín Franco')
  })

  it('asigna un rol a cada integrante', () => {
    const wrapper = mount(TeamSection)
    expect(wrapper.text()).toContain('Arquitecto de Solución')
    expect(wrapper.text()).toContain('DevSecOps Lead')
    expect(wrapper.text()).toContain('Full-Stack Engineer')
  })

  it('tiene exactamente 3 tarjetas de integrantes', () => {
    const wrapper = mount(TeamSection)
    const articles = wrapper.findAll('article')
    expect(articles).toHaveLength(3)
  })
})
