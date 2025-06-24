import React from 'react'

const Details = () => {
  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">Not sure which seat is right for you? We’ve got you.</h1>
      <div className="flex flex-row gap-6 justify-center flex-wrap">
        
        <div className="w-80 bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-2">The Collab seat makes it easy to work together.</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            <li>Brainstorm in FigJam</li>
            <li>Present in Figma Slides</li>
          </ul>
        </div>
      
        <div className="w-80 bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-2">The Dev seat gives devs the details they need.</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            <li>Brainstorm in FigJam</li>
            <li>Present in Figma Slides</li>
            <li>Inspect in Dev Mode</li>
          </ul>
        </div>
    
        <div className="w-80 bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-2">The Full seat connects your entire workflow.</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            <li>Brainstorm in FigJam</li>
            <li>Present in Figma Slides</li>
            <li>Handoff in Dev Mode</li>
            <li>Illustrate in Figma Draw</li>
            <li>Create in Figma Design</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details