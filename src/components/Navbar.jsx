import React from 'react'
import Header from './Header';

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center gap-2">
          <img src="https://www.figma.com/community/resource/e892b10a-dc9e-498b-9830-8fc0485ac820/thumbnail" alt="Logo" className="h-8" />
          <span className="font-bold text-lg text-gray-800">Figma</span>
        </div>
        <ul className="flex gap-6 items-center">
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Products</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Solutions</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Community</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Resources</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Pricing</a></li>
        </ul>
        <div className="flex gap-2 ml-6">
          <button className="px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100">Log in</button>
          <button className="px-4 py-2 rounded-md font-medium bg-white text-black border border-black hover:bg-white">Contact sales</button>
          <button className="px-4 py-2 rounded-md font-medium bg-black text-white hover:bg-black">Get started for free</button>
        </div>
      </nav>
      <Header />
    </>
  )
}

export default Navbar;