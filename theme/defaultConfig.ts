import { keyframes } from "framer-motion";

export const defaultConfig = {
  extend: {
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    colors: {
      border: 'hsl(var(--border))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'scroll-down': 'scrollDown 20s linear infinite',
    },
    keyframes: {
      scrollDown: {
        to: {
          transform: "translateY(-50%)"
        }
      },
      scrollRight: {
        to: {
          transform: "translateX(50%)"
        }
      }
    },
    maskImage: {
      'gradient-to-b': 'linear-gradient(transparent, white)',
    },
  },
}
