export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Le's Lab</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Welcome to Le's Lab, a blog dedicated to exploring the world of technology, 
          software development, design, and innovation.
        </p>
        
        <p className="text-gray-700 mb-4">
          This blog is a space where I share my thoughts, experiences, and insights 
          about the ever-evolving tech landscape. From cutting-edge frameworks to 
          design principles, from coding best practices to industry trends, you'll 
          find a variety of topics covered here.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You'll Find</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>In-depth tutorials and guides</li>
          <li>Technology reviews and comparisons</li>
          <li>Best practices and coding tips</li>
          <li>Thoughts on industry trends</li>
          <li>Project showcases and case studies</li>
        </ul>
        
        <p className="text-gray-700">
          Whether you're a seasoned developer or just starting your journey, 
          I hope you'll find something valuable here. Thanks for visiting!
        </p>
      </div>
    </div>
  )
}
