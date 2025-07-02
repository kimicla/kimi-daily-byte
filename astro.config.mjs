// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  // Enable content collections for blog posts
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  adapter: cloudflare()
});