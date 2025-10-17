import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://valenciaarcega.github.io',
  // base: 'astro-portfolio',
  server: {
    host: '0.0.0.0',
    open: false,
    port: 4321,
  },
  integrations: [react(), tailwind()]
});