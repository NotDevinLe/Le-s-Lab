export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with Next.js 14, featuring the new App Router and React Server Components.',
    content: `# Getting Started with Next.js 14

Next.js 14 brings exciting new features that make building web applications faster and more efficient. In this post, we'll explore the key improvements and how to get started.

## What's New in Next.js 14

### App Router
The App Router is now stable and provides a more intuitive way to structure your applications. It uses React Server Components by default, which means better performance and smaller bundle sizes.

### Server Actions
Server Actions allow you to run server-side code directly from your React components, eliminating the need for API routes in many cases.

### Improved Performance
Next.js 14 includes optimizations that make your applications faster out of the box, including better image optimization and automatic code splitting.

## Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

Follow the prompts to configure your project. Next.js will set up everything you need to start building.

## Key Concepts

1. **Pages and Routing**: Use the \`app\` directory for file-based routing
2. **Server Components**: Default in the App Router for better performance
3. **Client Components**: Use \`'use client'\` when you need interactivity
4. **Layouts**: Share UI between multiple pages
5. **Metadata**: SEO-friendly metadata API

## Conclusion

Next.js 14 is a powerful framework that makes building modern web applications easier than ever. Start exploring and building amazing things!`,
    date: '2024-01-15',
    author: 'Le',
    category: 'Technology',
    readTime: '5 min read',
  },
  {
    id: 'mastering-typescript',
    title: 'Mastering TypeScript: Advanced Patterns',
    excerpt: 'Dive deep into advanced TypeScript patterns and techniques that will make you a more effective developer.',
    content: `# Mastering TypeScript: Advanced Patterns

TypeScript has become the de facto standard for building large-scale JavaScript applications. Let's explore some advanced patterns that can help you write more robust and maintainable code.

## Generic Constraints

Generics are powerful, but constraints make them even more useful:

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
\`\`\`

## Utility Types

TypeScript provides several utility types that can save you time:

- \`Partial<T>\`: Makes all properties optional
- \`Required<T>\`: Makes all properties required
- \`Pick<T, K>\`: Select specific properties
- \`Omit<T, K>\`: Exclude specific properties

## Conditional Types

Conditional types allow you to create types that depend on other types:

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

## Best Practices

1. Use strict mode for better type safety
2. Leverage type inference when possible
3. Create reusable type utilities
4. Document complex types with JSDoc comments

TypeScript's type system is incredibly powerful. Mastering these patterns will help you write better code.`,
    date: '2024-01-10',
    author: 'Le',
    category: 'Development',
    readTime: '8 min read',
  },
  {
    id: 'modern-css-techniques',
    title: 'Modern CSS Techniques for 2024',
    excerpt: 'Explore the latest CSS features and techniques that can help you build more beautiful and performant websites.',
    content: `# Modern CSS Techniques for 2024

CSS continues to evolve, bringing new features that make styling easier and more powerful. Let's look at some modern techniques you should be using.

## Container Queries

Container queries allow you to style elements based on their container's size, not just the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
\`\`\`

## CSS Grid Advanced Patterns

CSS Grid has become essential for modern layouts:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## Custom Properties

CSS custom properties (variables) enable dynamic theming:

\`\`\`css
:root {
  --primary-color: #0ea5e9;
  --spacing: 1rem;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}
\`\`\`

## Modern Selectors

New selectors like \`:has()\` and \`:is()\` provide more flexibility:

\`\`\`css
.card:has(.button) {
  border: 2px solid blue;
}
\`\`\`

## Performance Tips

1. Use \`content-visibility\` for better rendering performance
2. Leverage \`will-change\` sparingly for animations
3. Minimize layout shifts with proper sizing

Modern CSS gives us powerful tools to create beautiful, performant interfaces.`,
    date: '2024-01-05',
    author: 'Le',
    category: 'Design',
    readTime: '6 min read',
  },
  {
    id: 'ai-in-development',
    title: 'The Future of AI in Software Development',
    excerpt: 'How artificial intelligence is transforming the way we write code and build software applications.',
    content: `# The Future of AI in Software Development

Artificial Intelligence is revolutionizing software development, from code generation to debugging and testing. Let's explore what the future holds.

## AI-Powered Code Generation

Tools like GitHub Copilot and ChatGPT are changing how developers write code. They can:

- Generate boilerplate code instantly
- Suggest implementations based on comments
- Help with refactoring and optimization

## Automated Testing

AI can generate test cases, identify edge cases, and even write test code automatically. This reduces the time spent on testing while improving coverage.

## Code Review Assistance

AI tools can review code for:

- Security vulnerabilities
- Performance issues
- Best practices
- Style consistency

## The Developer's Role

While AI is powerful, developers remain essential for:

- Understanding business requirements
- Making architectural decisions
- Ensuring code quality and maintainability
- Debugging complex issues

## Looking Ahead

The future of development will likely involve:

- More AI-assisted workflows
- Better integration of AI tools
- Focus on higher-level problem solving
- Continuous learning and adaptation

AI is a tool that amplifies developer capabilities. Embrace it, but remember that human judgment and creativity remain irreplaceable.`,
    date: '2024-01-01',
    author: 'Le',
    category: 'Technology',
    readTime: '7 min read',
  },
]

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
