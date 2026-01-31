import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostById, getAllPosts } from '@/lib/posts'
import { BlogPost } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = getPostById(id)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link 
        href="/"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      {/* Post Header */}
      <header className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <span className="mx-3">•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="mx-3">•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600">
          <span className="font-medium">By {post.author}</span>
        </div>
      </header>

      {/* Post Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">{paragraph.substring(2)}</h1>
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-gray-900">{paragraph.substring(3)}</h2>
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-gray-900">{paragraph.substring(4)}</h3>
            }
            if (paragraph.startsWith('```')) {
              return null // Skip code block markers for now
            }
            if (paragraph.trim() === '') {
              return <br key={index} />
            }
            if (paragraph.includes('`')) {
              // Simple inline code handling
              const parts = paragraph.split('`')
              return (
                <p key={index} className="mb-4">
                  {parts.map((part, i) => 
                    i % 2 === 0 ? (
                      <span key={i}>{part}</span>
                    ) : (
                      <code key={i} className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-primary-700">
                        {part}
                      </code>
                    )
                  )}
                </p>
              )
            }
            return <p key={index} className="mb-4">{paragraph}</p>
          })}
        </div>
      </div>

      {/* Post Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link 
          href="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </footer>
    </article>
  )
}
