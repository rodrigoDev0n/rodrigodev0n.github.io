import { defineConfig } from 'astro/config';
import rehypeTechBadges from './src/lib/rehype-tech-badges.mjs';

export default defineConfig({
  site: 'https://rodrigodevon.github.io',
  markdown: {
    rehypePlugins: [rehypeTechBadges],
  },
});
