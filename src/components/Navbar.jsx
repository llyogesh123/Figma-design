import React, { useState } from 'react'
import Header from './Header';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-3 bg-white border-b border-gray-200 relative">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="https://www.figma.com/community/resource/e892b10a-dc9e-498b-9830-8fc0485ac820/thumbnail" alt="Logo" className="h-8" />
          <span className="font-bold text-lg text-gray-800">Figma</span>
        </div>
       
        <ul className="hidden md:flex gap-4 sm:gap-6 items-center mt-3 md:mt-0">
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Products</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Solutions</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Community</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Resources</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Pricing</a></li>
        </ul>
       
        <div className="hidden md:flex gap-2 ml-6">
          <button className="px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100">Log in</button>
          <button className="px-4 py-2 rounded-md font-medium bg-white text-black border border-black hover:bg-white">Contact sales</button>
          <button className="px-4 py-2 rounded-md font-medium bg-black text-white hover:bg-black">Get started for free</button>
        </div>
        
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md z-10 flex flex-col items-stretch p-4 md:hidden">
            <ul className="flex flex-col gap-2 mb-4">
              <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Products</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Solutions</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Community</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Resources</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Pricing</a></li>
            </ul>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100 w-full">Log in</button>
              <button className="px-4 py-2 rounded-md font-medium bg-white text-black border border-black hover:bg-white w-full">Contact sales</button>
              <button className="px-4 py-2 rounded-md font-medium bg-black text-white hover:bg-black w-full">Get started for free</button>
            </div>
          </div>
        )}
      </nav>
      <Header />
    </>
  )
}

export default Navbar;