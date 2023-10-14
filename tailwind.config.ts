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
        'grad-t': 'var(--grad-t)',
        'stars': 'var(--stars)',
      },
      backgroundColor: {
        'bg': 'var(--bg)',
        'bg-blur': 'var(--bg-blur)',
        'bg-blurr': 'var(--bg-blurr)',
      },
      textColor: {
        'blue': 'var(--blue)',
        'text': 'var(--text)',
        'lite': 'var(--lite)',
      },
      fontFamily: {
        'para': 'var(--para)',
        'head': 'var(--head)',
        'code': 'var(--code)',
      },
      borderColor: {
        '--grad': 'var(--grad)',
      },
    },
  },
  plugins: [],
}
export default config;
