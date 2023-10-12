import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grad': 'var(--grad)',
        'grad-r': 'var(--grad-r)',
      },
      backgroundColor: {
        'bg': 'var(--bg)',
      },
      textColor: {
        'blue': 'var(--blue)',
        'lite': 'var(--lite)',
      },
      fontFamily: {
        'para': 'var(--para)',
        'head': 'var(--head)',
        'code': 'var(--code)',
      },
    },
  },
  plugins: [],
}
export default config;
