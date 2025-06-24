import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-black py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap gap-8 justify-between">
        <div>
          <h1 className="font-bold text-lg mb-4 text-white">Figma</h1>
          <h2 className="font-semibold mb-2 text-white">Product</h2>
          <div className="flex flex-col gap-1 text-gray-300">
            <span>Figma Design</span>
            <span>Dev Mode</span>
            <span>FigJam</span>
            <span>Figma Slides</span>
            <span>Figma Draw New</span>
            <span>Figma Buzz Beta</span>
            <span>Figma Sites Beta</span>
            <span>Figma Make Beta</span>
            <span>AI</span>
            <span>Downloads</span>
            <span>Release notes</span>
            <span>Plans</span>
            <span>Pricing</span>
            <span>Enterprise</span>
            <span>Organization</span>
            <span>Professional</span>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-white">Use cases</h2>
          <div className="flex flex-col gap-1 text-gray-300">
            <span>UI design</span>
            <span>UX design</span>
            <span>Wireframing</span>
            <span>Diagramming</span>
            <span>Prototyping</span>
            <span>Brainstorming</span>
            <span>Presentation Maker</span>
            <span>Online whiteboard</span>
            <span>Agile</span>
            <span>Strategic planning</span>
            <span>Mind mapping</span>
            <span>Online sticky notes</span>
            <span>Concept map</span>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-white">Resources</h2>
          <div className="flex flex-col gap-1 text-gray-300">
            <span>Help center</span>
            <span>Community</span>
            <span>Blog</span>
            <span>Figma for education</span>
            <span>Figma for startups</span>
            <span>Figma for agencies</span>
            <span>Figma for enterprise</span>
            <span>Figma for developers</span>
            <span>Figma for content creators</span>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-white">Compare</h2>
          <div className="flex flex-col gap-1 text-gray-300">
            <span>Compare all features</span>
            <span>Compare plans</span>
            <span>Compare seats</span>
            <span>Compare Figma and FigJam</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer