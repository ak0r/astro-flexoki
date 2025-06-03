// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        name: "Inter",
        cssVariable: "--font-primary",
        provider: fontProviders.google(),
        // Specify weights that are actually used
        weights: [400, 500, 600, 700],
        fallbacks: ["sans-serif"],
      },
      {
        name: "Work Sans",
        cssVariable: "--font-secondary",
        provider: fontProviders.google(),
        // Specify weights that are actually used
        weights: [400, 500, 600, 700],
        fallbacks: ["sans"],
      },
      {
        name: "JetBrains Mono",
        cssVariable: "--font-code",
        provider: fontProviders.google(),
        // Specify weights that are actually used
        weights: [400, 500, 600, 700],
        fallbacks: ["monospace"],
      },
    ]
  },
  integrations: [icon(), expressiveCode(), mdx()],
});