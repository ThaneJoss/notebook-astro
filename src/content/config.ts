// src/content/config.ts
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    authorName: z.string(),
    avatarUrl: z.string(),
    date: z.coerce.date(),
    comments: z.number(),
    tag: z.enum(["dive", "note"]),
  }),
});

export const collections = {
  posts: postsCollection,
};