import React from 'react'
import Seat from './Seat'
import Plan from './Plan'
import Features from './Features'
import Releases from './Releases'
import Details from './Details'
import Coming from './Coming'
import Compare from './Compare'
import Pricing from './Pricing'
import Footer from './Footer'

const Header = () => {
  return (
    <>
      <div className="text-left px-2 sm:px-6">
        <h1 className="font-bold text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[100px] leading-tight">
          Pick your plan,
        </h1>
        <h1 className="font-bold text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[100px] leading-tight">
          choose your seats
        </h1>
      </div>
      <div className="text-left px-2 sm:px-6">
        <Seat />
      </div>
      <div className="px-2 sm:px-6">
        <Plan />
      </div>
      <div className="px-2 sm:px-6">
        <Features />
      </div>
      <div className="px-2 sm:px-6">
        <Releases />
      </div>
      <div className="px-2 sm:px-6">
        <Details />
      </div>
      <div className="px-2 sm:px-6">
        <Coming />
      </div>
      <div className="px-2 sm:px-6">
        <Compare />
      </div>
      <div className="px-2 sm:px-6">
        <Pricing />
      </div>
      <div className="px-2 sm:px-6">
        <Footer />
      </div>
    </>
  )
}

export default Header