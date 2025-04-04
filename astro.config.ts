import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://damitzi.com',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react(), mdx()]
});
