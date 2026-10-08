import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!**/placeholder.md'],
    base: './src/content/stories',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const art = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!**/placeholder.md'],
    base: './src/content/art',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    medium: z.string().optional(),
    year: z.number().int().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!**/placeholder.md'],
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    repository: z.string().url().optional(),
    technologies: z.array(z.string()).default([]),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { stories, art, projects };
