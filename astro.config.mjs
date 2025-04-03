// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cyborgnetical.github.io',
	base:"/AP-World-Unit-9_PROJECT",
	integrations: [mdx(), sitemap()],
});
