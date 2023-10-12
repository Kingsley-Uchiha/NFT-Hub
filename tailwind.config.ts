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
        
      },
      backgroundColor: {
        'bg': 'var(--bg)',
      },
      fontFamily: {
        'para': 'var(--para)',
        'head': 'var(--head)',
      },
    },
  },
  plugins: [],
}
export default config;
