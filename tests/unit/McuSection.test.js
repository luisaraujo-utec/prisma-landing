import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import McuSection from '../../src/components/McuSection.vue'

describe('McuSection', () => {
  it('lista las 6 funciones del MCU 5.0', () => {
    const wrapper = mount(McuSection)
    const funciones = ['Gobernar', 'Identificar', 'Proteger', 'Detectar', 'Responder', 'Recuperar']
    funciones.forEach((fn) => {
      expect(wrapper.text()).toContain(fn)
    })
  })

  it('incluye los 3 perfiles comunitarios: Básico, Estándar y Avanzado', () => {
    const wrapper = mount(McuSection)
    expect(wrapper.text()).toContain('Básico')
    expect(wrapper.text()).toContain('Estándar')
    expect(wrapper.text()).toContain('Avanzado')
  })

  it('menciona el Decreto 66/025 y su carácter obligatorio', () => {
    const wrapper = mount(McuSection)
    expect(wrapper.text()).toMatch(/Decreto 66\/025/)
  })
})
