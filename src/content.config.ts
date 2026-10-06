import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    meta_description: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().default('Kaizen'),
    tag: z.string().optional(),
    keywords: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
