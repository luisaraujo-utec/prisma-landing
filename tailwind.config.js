/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        prisma: {
          // Paleta institucional inspirada en AGESIC (azul profundo + cyan) con acentos
          bg: '#0B1220',
          panel: '#101a2e',
          border: '#1e2a44',
          primary: '#3b82f6',
          primaryDark: '#1d4ed8',
          accent: '#22d3ee',
          success: '#10b981',
          warning: '#f59e0b',
          danger: '#ef4444',
          text: '#e5eaf5',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        'glow-primary': '0 0 30px -8px rgba(59,130,246,0.55)',
        'glow-accent': '0 0 30px -8px rgba(34,211,238,0.55)'
      }
    }
  },
  plugins: []
}
