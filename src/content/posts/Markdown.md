---
title: "Markdown文档特性测试"
description: "Hello World"
imageUrl: "/background.jpg"
authorName: "Joss"
avatarUrl: "/avatar.png"
date: "2025-09-12"
comments: 0
tag: "note"
---

## 1. 标题

# 一级标题 (H1)
## 二级标题 (H2)
### 三级标题 (H3)
#### 四级标题 (H4)
##### 五级标题 (H5)
###### 六级标题 (H6)

---

## 2. 文本样式

**这是粗体文本 (Bold)**

__这也是粗体文本 (Bold)__

*这是斜体文本 (Italic)*

_这也是斜体文本 (Italic)_

***这是粗斜体文本 (Bold and Italic)***

~~这是带删除线的文本 (Strikethrough)~~

这是一个简单的句子，我们在其中插入`行内代码` (inline code)。

这是上标：X^2^ (注：部分渲染器支持)

这是下标：H~2~O (注：部分渲染-器支持)

==这是高亮文本== (注：部分渲染器支持)

---

## 3. 引用块

> 这是一个单层引用块。
>
> “Stay hungry, stay foolish.” —— Steve Jobs

> 这是一个嵌套引用块：
> > 第二层引用。
> > > 第三层引用。

> 引用块内可以包含其他 Markdown 元素：
>
> #### 这是一个四级标题
>
> * 列表项 1
> * 列表项 2
>
> ```python
> print("Hello, Blockquote!")
> ```

---

## 4. 列表

### 无序列表

使用 `*`, `-`, 或 `+` 创建无序列表。

* 列表项 A
* 列表项 B
  * 嵌套列表项 B1
  * 嵌套列表项 B2
- 列表项 C
+ 列表项 D

### 有序列表 (Ordered List)

1. 列表项 1
2. 列表项 2
3. 列表项 3
   1. 嵌套列表项 3.1
   2. 嵌套列表项 3.2

即使你在源文件中写的数字是乱序的，渲染器通常也会自动修正：

1. 第一项
1. 第二项
1. 第三项

---

## 5. 代码块 (Code Blocks)

### 行内代码 (Inline Code)

使用 `backticks` 包裹代码，例如 `const a = 1;`。

### 围栏代码块 (Fenced Code Block)

使用三个反引号 ` ``` ` 来创建代码块，并可以指定语言以获得语法高亮。

**无指定语言：**

```
docker run -it --rm -p 8080:80 nginx
```

**指定语言 (JavaScript):**

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

**指定语言 (Python):**

```python
def fibonacci(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

fibonacci(100)
```

---

## 6. 分隔线 (Horizontal Rules)

使用三个或更多的 `---`, `***`, 或 `___` 来创建分隔线。

---

***

___

---

## 7. 链接 (Links)

### 标准链接

[访问 Google](https://www.google.com "Google 搜索引擎")

### 引用式链接

这是一个 [引用式链接][ref1]。你可以在文档的任何地方定义这个引用。
这是另一个 [引用][ref2]。

[ref1]: https://github.com/
[ref2]: https://www.mozilla.org "Mozilla 官网"

### 自动链接

大多数渲染器会自动将 URL 转换为链接：https://www.example.com
或者用尖括号包裹：<https://www.example.com>

---

## 8. 图片 (Images)

图片的语法与链接类似，只是在前面加一个感叹号 `!`。

`![Alt text](URL "Optional title")`

![GitHub Octocat](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png "GitHub吉祥物")

### 带链接的图片

[![可点击的图片](https://via.placeholder.com/150/0000FF/FFFFFF?text=Click+Me)](https://www.example.com)

---

## 9. 表格 (Tables)

这是 GitHub Flavored Markdown (GFM) 的扩展功能，但被广泛支持。

| 左对齐 | 居中对齐 | 右对齐 |
| :--- | :----: | ---: |
| 单元格 1 | 单元格 2 | 单元格 3 |
| 这是一个比较长的单元格 |  中等长度  | 短   |
| `code` | **bold** | *italic* |

---

## 10. 任务列表 (Task Lists)

这是 GFM 的另一个扩展功能。

- [x] 已完成的任务
- [ ] 未完成的任务
  - [ ] 嵌套的未完成任务
  - [x] 嵌套的已完成任务
- [ ] 待办事项

---

## 11. 脚注 (Footnotes)

这是一个脚注的例子[^1]。你可以在文档的末尾找到它的定义。

这是另一个脚注[^bignote]。

[^1]: 这是第一个脚注的详细内容。
[^bignote]: 这是一个内容更长、更详细的脚注。它也可以包含多段文字。

---

## 12. HTML 标签 (HTML Tags)

Markdown 支持直接嵌入 HTML 标签，这提供了极大的灵活性。

<dl>
  <dt>定义列表</dt>
  <dd>是一种用于呈现术语和其对应定义的方式。</dd>
</dl>

使用 `<kbd>` 标签来表示键盘输入：<kbd>Ctrl</kbd>+<kbd>C</kbd>

这是一个可以折叠的区域：
<details>
  <summary>点击展开详情</summary>
  <p>这里是隐藏的详细内容，只有在点击后才会显示出来。</p>
</details>

---

## 13. Emoji (表情符号)

:smile: :tada: :rocket:


### 测试结束