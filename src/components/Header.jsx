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
    <div className="text-left">
      <h1 className="font-bold" style={{ fontSize: '100px' }}>
        Pick your plan,
      </h1>
      <h1 className="font-bold" style={{ fontSize: '100px' }}>
         choose your seats
      </h1>
    </div>
    <div className="text-left">
      <Seat />
    </div>
    <div>
        <Plan/>
    </div>
    <div>
        <Features/>
    </div>
    <div>
        <Releases/>
    </div>
    <div>
        <Details/>
    </div>
    <div>
        <Coming/>
    </div>
    <div>
        <Compare/>
    </div>
    <div>
        <Pricing/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Header