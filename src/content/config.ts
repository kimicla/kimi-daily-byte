import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// Export the collections
export const collections = {
  'posts': postsCollection,
};
