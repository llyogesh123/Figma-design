import React from 'react'

const Coming = () => {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <div className="bg-gray-100 rounded-xl shadow p-8 flex flex-col items-center max-w-xl w-full">
        <span className="text-sm font-semibold text-black mb-2">COMING SOON</span>
        <h1 className="text-2xl font-bold mb-4">Content seat</h1>
        <div className="text-center text-gray-700 mb-4">
          The Content seat gives you access to Figma Buzz, Figma Sites CMS, Figma Slides, and FigJam.
          Available on all paid plans for $8/$10 on Professional, $18 on Organization, and $25 on Enterprise per seat/month.
        </div>
        <div className="underline text-black cursor-pointer">Learn more</div>
      </div>
    </div>
  )
}

export default Coming