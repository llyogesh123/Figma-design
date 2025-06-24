import React from 'react'

const Plan = () => {
  return (
    <div className="flex justify-center gap-6 flex-nowrap overflow-x-auto py-8">
     
      <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-start gap-4">
        <h1 className="text-2xl font-bold mb-1">Starter</h1>
        <h2 className="text-lg font-semibold text-black mb-2">Free</h2>
        <button className="w-full px-4 py-2 rounded-md font-medium bg-white text-black border border-black hover:bg-gray-100 transition-colors mb-2">
          Select plan
        </button>
        <div className="w-full">
          <h6 className="font-semibold mt-2 mb-1">Choose Starter if you:</h6>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
            <li>Are working on personal projects</li>
            <li>Need basic design, presentation, and brainstorming tools</li>
            <li>Want to try Figma products</li>
          </ul>
          <h6 className="font-semibold mt-2 mb-1">Key features:</h6>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Unlimited drafts</li>
            <li>UI kits and templates</li>
            <li>Basic design file inspection</li>
          </ul>
        </div>
      </div>

     
      <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-start gap-4">
        <h1 className="text-2xl font-bold mb-1">Professional</h1>
        <div className="flex flex-col gap-1 mb-2 w-full">
          <span className="text-base font-medium text-black">Collab seat <span className="float-right font-semibold">$3/mo</span></span>
          <span className="text-base font-medium text-black">Dev seat <span className="float-right font-semibold">$12/mo</span></span>
          <span className="text-base font-medium text-black">Full seat <span className="float-right font-semibold">$16/mo</span></span>
        </div>
        <button className="w-full px-4 py-2 rounded-md font-medium bg-white text-black border border-black hover:bg-gray-100 transition-colors mb-2">
          Select plan
        </button>
        <div className="w-full">
          <h6 className="font-semibold mt-2 mb-1">Choose Professional if you:</h6>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
            <li>Are a professional or part of a small team</li>
            <li>Need unlimited files and projects for a single team</li>
            <li>Want advanced prototyping tools and easier dev handoff</li>
          </ul>
          <h6 className="font-semibold mt-2 mb-1">Key features:</h6>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Unlimited files and projects</li>
            <li>Team-wide design libraries</li>
            <li>Advanced Dev Mode inspection</li>
          </ul>
        </div>
      </div>

     
      <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-start gap-4">
        <h1 className="text-2xl font-bold mb-1">Organization</h1>
        <h4 className="text-xs text-gray-500 mb-1">Billed annually</h4>
        <div className="flex flex-col gap-1 mb-2 w-full">
          <span className="text-base font-medium text-black">Collab seat <span className="float-right font-semibold">$5/mo</span></span>
          <span className="text-base font-medium text-black">Dev seat <span className="float-right font-semibold">$25/mo</span></span>
          <span className="text-base font-medium text-black">Full seat <span className="float-right font-semibold">$55/mo</span></span>
        </div>
        <button className="w-full px-4 py-2 rounded-md font-medium bg-white text-black border border-black hover:bg-gray-100 transition-colors mb-2">
          Select plan
        </button>
        <h6 className="underline cursor-pointer mb-2">Contact sales</h6>
        <div className="w-full">
          <h6 className="font-semibold mt-2 mb-1">Choose Organization if you:</h6>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
            <li>Are a business that designs products across your organization</li>
            <li>Need unlimited teams and basic security</li>
            <li>Want to centralize assets, libraries, and workflows across department</li>
          </ul>
          <h6 className="font-semibold mt-2 mb-1">Key features:</h6>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Unlimited teams</li>
            <li>Shared libraries and fonts</li>
            <li>Centralized admin tools</li>
          </ul>
        </div>
      </div>

     
      <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-start gap-4">
        <h1 className="text-2xl font-bold mb-1">Enterprise</h1>
        <h4 className="text-xs text-gray-500 mb-1">Billed annually</h4>
        <div className="flex flex-col gap-1 mb-2 w-full">
          <span className="text-base font-medium text-black">Collab seat <span className="float-right font-semibold">$5/mo</span></span>
          <span className="text-base font-medium text-black">Dev seat <span className="float-right font-semibold">$25/mo</span></span>
          <span className="text-base font-medium text-black">Full seat <span className="float-right font-semibold">$55/mo</span></span>
        </div>
        <button className="w-full px-4 py-2 rounded-md font-medium bg-white text-black border border-black hover:bg-gray-100 transition-colors mb-2">
          Select plan
        </button>
        <h6 className="underline cursor-pointer mb-2">Learn more</h6>
        <div className="w-full">
          <h6 className="font-semibold mt-2 mb-1">Choose Enterprise if you:</h6>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
            <li>Are a business designing for multiple products or brands</li>
            <li>Need enterprise-level security</li>
            <li>Want scalable design systems and simpler admin management</li>
          </ul>
          <h6 className="font-semibold mt-2 mb-1">Key features:</h6>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Custom team workspaces</li>
            <li>Design system theming and APIs</li>
            <li>SCIM seat management</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Plan