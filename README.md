# Le's Lab - A Modern Blog Website

A beautiful, modern blog website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js
- 📱 Mobile-friendly interface
- 🎯 SEO optimized
- 📝 Sample blog posts included
- 🔍 Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the blog.

## Project Structure

```
Le-s-Lab/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── posts/          # Blog post pages
│   └── about/          # About page
├── components/         # React components
│   ├── Navbar.tsx     # Navigation bar
│   └── Footer.tsx     # Footer component
├── lib/               # Utility functions
│   └── posts.ts       # Blog posts data
└── public/            # Static assets
```

## Adding New Blog Posts

To add a new blog post, edit `lib/posts.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  id: 'your-post-id',
  title: 'Your Post Title',
  excerpt: 'A brief description...',
  content: 'Full post content...',
  date: '2024-01-20',
  author: 'Your Name',
  category: 'Category',
  readTime: '5 min read',
}
```

## Building for Production

```bash
npm run build
npm start
```

## Deploying to GitHub Pages

This blog is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy when you push to the `main` branch

3. **Configure Base Path (if needed)**
   - If your repository is **NOT** at the root (e.g., `username.github.io/repo-name`):
     - Open `next.config.js`
     - Uncomment the `basePath` line and set it to your repository name:
       ```javascript
       basePath: '/YOUR_REPO_NAME',
       ```
   - If your repository **IS** at the root (e.g., `username.github.io`):
     - Leave `basePath` commented out in `next.config.js`

4. **Automatic Deployment**
   - Every time you push to the `main` branch, GitHub Actions will:
     - Build your Next.js site
     - Deploy it to GitHub Pages
   - Your site will be available at:
     - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME` (if using basePath)
     - `https://YOUR_USERNAME.github.io` (if repository is at root)

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
# The static files will be in the 'out' directory
# You can then push the 'out' directory to the gh-pages branch
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library
- **GitHub Actions** - CI/CD for deployment

## License

This project is open source and available for personal use.
