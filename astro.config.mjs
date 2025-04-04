// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://damitzi.com',
    vite: {
        plugins: [tailwindcss()],

        resolve: {
            // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
            // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
            alias: import.meta.env.PROD && {
                'react-dom/server': 'react-dom/server.edge'
            }
        }
    },
    integrations: [react(), mdx()]
});
