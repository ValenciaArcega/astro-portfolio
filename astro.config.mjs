import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://valenciaarcega.github.io',
  // server: {
  //   host: '0.0.0.0',
  //   open: false,
  //   port: 4321,
  // },
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});
