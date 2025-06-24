import React from 'react'

const Seat = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="px-4 py-2 text-sm bg-white text-black font-medium rounded-md border border-black shadow hover:bg-gray-100 transition-colors">
        Seats give you access to Figma products: FigJam Figma Slides Dev Mode Figma Draw Figma Design
      </button>
      <h4 className="text-xs text-gray-500 font-normal m-0">
        Prices in USD
      </h4>
    </div>
  )
}

export default Seat;