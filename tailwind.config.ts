import type { Config } from "tailwindcss";

export default {
  // Scan these files for Tailwind class names
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
