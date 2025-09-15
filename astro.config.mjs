// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import astroExpressiveCode from "astro-expressive-code";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


export default defineConfig({
  vite: {
    plugins: [tailwindcss()],

  },

  integrations: [
    astroExpressiveCode({
      themes: ['github-dark', 'slack-ochin'],
    }),
  ],
  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid"]
    },

    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['anchor-link', 'no-underline'] } }],
    ],
  },
});