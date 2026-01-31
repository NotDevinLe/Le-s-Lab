export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Le's Lab</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Welcome to Le's Lab — a space where I document my work and thinking across competitive programming, systems engineering, and AI research.
        </p>
        
        <p className="text-gray-700 mb-4">
          This blog is where I break down problems I care about, from optimizing algorithms and debugging low-level systems to building research-grade machine learning pipelines and full-stack projects. It's part notebook, part lab journal, and part knowledge base.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You'll Find</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Competitive programming writeups, proofs, and algorithmic techniques</li>
          <li>Deep dives into systems topics like emulation, memory, and performance</li>
          <li>Project logs for things I'm building — from emulators to ML infrastructure</li>
          <li>AI and machine learning research notes, experiments, and results</li>
          <li>Engineering lessons learned from debugging and scaling real systems</li>
        </ul>
        
        <p className="text-gray-700">
          Whether you're here for algorithms, systems, or applied AI, this blog is meant to be a transparent look into how complex software is built and understood from the ground up.
        </p>
      </div>
    </div>
  )
}
