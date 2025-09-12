# notebook-astro

这是一个使用 Astro 构建的简单笔记应用程序。

## ✨ 特性

-   **由 Astro 驱动**: 快速、现代、服务端优先。
-   **支持 Markdown**: 使用 Markdown 编写你的笔记。
-   **响应式设计**: 适用于所有设备。

## 🚀 项目结构

在你的 Astro 项目中，你会看到以下文件夹和文件：

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
└── package.json
```

Astro 会在 `src/pages/` 目录中寻找 `.astro` 或 `.md` 文件。每个页面都会根据其文件名被暴露为一个路由。

`src/components/` 目录没有什么特别之处，但我们建议将任何 Astro/React/Vue/Svelte/Preact 组件放在这里。

任何静态资源，如图片，都可以放在 `public/` 目录中。

## 🧞 命令

所有命令都从项目的根目录下的终端运行：

| 命令              | 操作                                         |
| :---------------- | :------------------------------------------- |
| `npm install`     | 安装依赖                                     |
| `npm run dev`     | 在 `localhost:4321` 启动本地开发服务器       |
| `npm run build`   | 将你的生产站点构建到 `./dist/` 目录          |
| `npm run preview` | 在部署前本地预览你的构建                     |

## 👀 想了解更多？

随时查看 [Astro 文档](https://docs.astro.build) 或加入 [Astro Discord 服务器](https://astro.build/chat)。

## 贡献

欢迎贡献！如果你有任何想要添加或修复的内容，请提出 issue 或提交 pull request。
