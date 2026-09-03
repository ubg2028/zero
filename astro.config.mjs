import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ubg2028.github.io',
  base: '/zero/',
  integrations: [tailwind()],
});
