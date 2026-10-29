import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tiziclash.world',
  output: 'static',
  integrations: [sitemap()],
});
