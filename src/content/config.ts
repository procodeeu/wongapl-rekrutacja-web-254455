import { defineCollection, z } from 'astro:content';

const ourProjects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    description: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const footerLinks = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    links: z.array(z.object({
      text: z.string(),
      url: z.string(),
      external: z.boolean().optional(),
    })),
  }),
});

const footerText = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

export const collections = {
  ourProjects,
  'footer-links': footerLinks,
  'footer-text': footerText,
};