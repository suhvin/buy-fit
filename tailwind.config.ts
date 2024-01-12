import type { Config } from "tailwindcss";
const colors = {
  neutral100: "#2C2932",
  neutral80: "hsla(257, 4%, 34%, 1)",
  neutral60: "rgba(44, 41, 50, 0.60);",
  neutral30: "rgba(44, 41, 50, 0.30);",
  neutral20: "rgba(44, 41, 50, 0.20);",
  neutral10: "rgba(44, 41, 50, 0.10);",
  gray100: "#455268",
  gray80: "#718096",
  gray60: "#91A3BD",
  gray30: "#C9D8E9",
  gray20: "#DAE6F3",
  gray10: "#F4F9FF",
  primary100: "#8732F4",
  primary80: "#8A5BEF",
  primary60: "#AC8CF1",
  primary30: "#C0B7F5",
  primary20: "#DADAFF",
  primary10: "#E9E9FF",
  negative100: "#FF6C58",
  negative50: "#718096",
  negative10: "#FFF0EE",
  positive100: "#3366FF",
  positive50: "#99B2FF",
  positive10: "#EBF0FF",
  gradientleft: "hsla(338, 99%, 64%, 1)",
  gradientright: "hsla(266, 90%, 58%, 1)",
  white: "#FFFFFF",
  black: "hsla(0, 0%, 0%, 1)",
};
const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "60px",
        full: "999px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
