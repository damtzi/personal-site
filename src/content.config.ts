import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/bread' }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        content: z.string()
    })
});

export const collections = { recipes };
