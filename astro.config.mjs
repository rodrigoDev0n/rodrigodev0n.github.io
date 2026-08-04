import { defineConfig } from 'astro/config';
import rehypeTechBadges from './src/lib/rehype-tech-badges.mjs';

export default defineConfig({
  site: 'https://rodrigodev0n.github.io',
  base: '/blog-rodrigo',
  markdown: {
    rehypePlugins: [rehypeTechBadges],
  },
});
