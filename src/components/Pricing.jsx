import React from 'react'

const Pricing = () => {
  return (
    <div className="w-full min-h-screen bg-pink-100 flex justify-center items-center">
      <div className="flex w-3/4 bg-white rounded-xl shadow p-8">
        <div className="flex flex-col items-start w-1/3 pr-8">
          <h1 className="font-bold text-2xl mb-2">Pricing FAQs</h1>
          <div className="text-black cursor-pointer">See more FAQs</div>
        </div>
        <div className="flex flex-col items-end w-2/3">
          <h1 className="mb-2">What is a seat?</h1>
          <h1 className="mb-2">Where can I see a breakdown of seats and associated costs?</h1>
          <h1 className="mb-2">Can I buy Figma Design on its own?</h1>
          <h1 className="mb-2">How does team-based pricing work?</h1>
          <h1 className="mb-2">How can I adjust who has admin privileges?</h1>
          <h1 className="mb-2">Can you send me an invoice?</h1>
          <h1 className="mb-2">What if more seats are added to my annual Professional plan?</h1>
          <h1 className="mb-2">How do I cancel my paid plan?</h1>
          <h1 className="mb-2">Do you have a discount for schools or classrooms?</h1>
        </div>
      </div>
    </div>
  )
}

export default Pricing