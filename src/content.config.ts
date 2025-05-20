import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array
  const lowercaseItems = array.map((str) => str.toLowerCase())
  const distinctItems = new Set(lowercaseItems)
  return Array.from(distinctItems)
}

// Blog Collection schema
const blogCollection = defineCollection({
  // Load Markdown and MDX files in the blog directory.
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    // required fields
    title: z.string().max(60),
    description: z.string(),
    publishedDate: z.date(),
    // optional fields
    coverImage: z.string().optional(),
    isDraft: z.boolean().default(false),
    isFeatured: z.boolean().optional(),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase).optional(),
  })
});

export const collections = {
  blog: blogCollection,
}