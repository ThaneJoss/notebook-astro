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
    build: {
      rollupOptions: {
        output: {
          // 定义静态资源（如CSS、图片、字体等）的输出路径和文件名格式
          // [name] 代表文件的原始名称
          // [ext] 代表文件的扩展名
          // 我们在这里移除了默认的 [hash] 部分
          assetFileNames: 'assets/[name].[ext]', // 例如: assets/index.css

          // 如果你还想控制JS文件的命名，可以修改下面两项
          // chunkFileNames 用于控制代码分割出的、非入口的JS文件
          chunkFileNames: 'assets/js/[name].js',
          // entryFileNames 用于控制入口JS文件
          entryFileNames: 'assets/js/[name].js',
        },
      }
    },
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