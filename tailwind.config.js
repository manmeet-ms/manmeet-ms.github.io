const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['src/app/**/*.{js,ts,jsx,tsx,mdx,json}', 'src/components/**/*.{js,ts,jsx,tsx,mdx,json}'],
  safelist: ['sh__line'],
  theme: {
    darkMode: 'selector',
    screens: {
      xs: '390px',
      sm: '435px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      animation: {
        reveal: 'reveal 0.7s ease-in-out'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono]
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, filter: 'brightness(1) blur(15px)', scale: '1.0125' },
          '10%': { opacity: 1, filter: 'brightness(1.25) blur(10px)' },
          '100%': { opacity: 1, filter: 'brightness(1) blur(0)', scale: '1' }
        }
      },
      lineHeight: {
        slacker: '1.75'
      },
      gridTemplateRows: {
        'max-1': 'repeat(1, minmax(0, max-content))'
      },
      height: {
        'dynamic-screen': '100dvh'
      },
      minHeight: {
        'dynamic-screen': '100dvh'
      },
      maxHeight: {
        'dynamic-screen': '100dvh'
      },
      colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
    }
  },
  plugins: [require('@tailwindcss/container-queries'), require('tailwindcss-animate')],
  future: {
    hoverOnlyWhenSupported: true
  }
}
