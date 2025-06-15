import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://8e1f8d4e.wongapl-rekrutacja-web-254455-amy.pages.dev',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap()],
});
