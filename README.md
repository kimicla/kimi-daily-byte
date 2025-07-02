# Kimi Daily Byte

A simple, fast blog for daily tech articles and ideas built with Astro and deployed to Cloudflare Pages.

## 📝 Content Management

This blog uses Astro's content collections to manage blog posts. All posts are written in Markdown format and stored in the `src/content/posts` directory.

### Creating a New Post

1. Create a new Markdown file in the `src/content/posts` directory with a descriptive filename (e.g., `my-new-post.md`)
2. Add the required frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
publishDate: "YYYY-MM-DD"
description: "A brief description of your post"
tags: ["tag1", "tag2", "tag3"]
---

# Your Post Content Here

Write your post content using Markdown syntax.
```

3. Write your post content using Markdown syntax
4. Save the file and the post will automatically appear on the site

### Markdown Features

- **Headers**: Use `#`, `##`, `###`, etc., for headings
- **Formatting**: `**bold**`, `*italic*`, `~~strikethrough~~`
- **Lists**: Use `-` or `*` for bullet points, or `1.`, `2.`, etc., for numbered lists
- **Links**: `[link text](https://example.com)`
- **Images**: `![alt text](image-url.jpg)`
- **Code blocks**:
  ```
  ```javascript
  // Your code here
  ```
  ```
- **Blockquotes**: Start lines with `>`

## 🚀 Development

### Project Structure

```
/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections
│   │   └── posts/       # Blog post markdown files
│   ├── layouts/         # Page layouts
│   │   ├── Layout.astro # Main site layout
│   │   └── BlogPost.astro # Blog post layout
│   └── pages/           # Page components and routes
│       ├── index.astro  # Home page (post list)
│       └── posts/[...slug].astro # Dynamic post routes
└── package.json         # Project dependencies
```

### Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

## 🌐 Deployment to Cloudflare Pages

### Setup Instructions

1. Push your repository to GitHub
2. Log in to the Cloudflare dashboard
3. Navigate to Pages > Create a project > Connect to Git
4. Select your repository
5. Configure your build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

### Automatic Deployments

Once set up, Cloudflare Pages will automatically deploy your site when you push changes to your repository.

## 🔧 Customization

- **Site Title/Metadata**: Edit the `Layout.astro` file
- **Styling**: Modify the CSS in component files or add global styles
- **Adding Features**: Extend functionality by installing Astro integrations

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Markdown Guide](https://www.markdownguide.org/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
