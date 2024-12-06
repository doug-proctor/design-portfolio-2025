import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "530px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      accent: {
        DEFAULT: "#95FF49",
        hover: "#88ec40",
      },
      foreground: {
        DEFAULT: "#232323",
        secondary: "#7A7A7A",
        tertiary: "#D9D9D9",
      },
      background: {
        DEFAULT: "#FFFFFF",
        secondary: "#eaeaea",
        tertiary: "#dfdfdf",
      }
    },
    spacing: {
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      48: "48px",
      64: "64px",
      80: "80px",
      96: "96px",
      112: "112px",
      128: "128px",
    },
    fontSize: {
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
    },
    lineHeight: {
      24: "1.5rem",
      28: "1.75rem",
    },
    borderRadius: {
      4: "4px",
    },
    backgroundImage: {
      rainbow: "linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config
