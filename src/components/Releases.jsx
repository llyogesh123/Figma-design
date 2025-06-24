import React from 'react'

const dummyData = [
  { id: 1, title: 'Figma Sites. Design and publish websites. Included on Full seat. No charges for custom domains, bandwidth, or storage until 2026—Enterprise and Organization plans get unlimited custom domains, Professional plans get 10. Limits subject to change after 2025.', desc: 'Learn about Figma Sites', img: 'https://cdn.sanity.io/images/599r6htc/regionalized/baa236e2b03e6107bd6e79788d514383de32b474-1200x801.png?rect=0,1,1200,800&w=606&h=404&q=75&fit=max&auto=format&dpr=2' },
  { id: 2, title: 'Figma Buzz. Create, edit, and ship on-brand assets, quickly. Free and included in all seats while in beta.', desc: 'Learn about Figma Sites', img: 'https://cdn.sanity.io/images/599r6htc/regionalized/590de7f0ab03c3f614967aa9c961934052cb748b-1200x800.png?w=606&h=404&q=75&fit=max&auto=format&dpr=2' },
  { id: 3, title: 'Figma Make. Start with a prompt and build a code-backed web app, with AI. Included on Full seat. Usage limits apply and may change. Higher limits can be purchased after beta.', desc: 'Learn about Figma Sites', img: 'https://cdn.sanity.io/images/599r6htc/regionalized/e37977581c9fe3060db513a95143156523e623c9-1200x800.png?w=606&h=404&q=75&fit=max&auto=format&dpr=2' },
  { id: 4, title: 'Figma Draw. Illustrate with improved vector editing, new brushes, fills, and more. Included on Figma Design.', desc: 'Learn about Figma Sites', img: 'https://cdn.sanity.io/images/599r6htc/regionalized/baa236e2b03e6107bd6e79788d514383de32b474-1200x801.png?rect=0,1,1200,800&w=606&h=404&q=75&fit=max&auto=format&dpr=2https://cdn.sanity.io/images/599r6htc/regionalized/4783022775329bb5b15b02a50b2d1a7776d948ed-1200x800.png?w=606&h=404&q=75&fit=max&auto=format&dpr=2' },
  { id: 5, title: 'Governance+ add-on. Get advanced security features, more data governance, and more control over your Figma environment with Governance+ add-on. Add it to your Enterprise plan to protect your Figma designs and data today.', desc: 'Learn about Figma Sites', img: 'https://cdn.sanity.io/images/599r6htc/regionalized/b09e61fd6b5c29ba8914f61b243925d1accb857c-1200x800.png?w=606&h=404&q=75&fit=max&auto=format&dpr=2' },
]

const Releases = () => {
  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">New Releases</h1>
      <div className="flex items-center gap-2 mb-4">
        {/* Left Arrow SVG */}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 128 128"
          className="w-5 h-5 cursor-pointer"
          style={{ enableBackground: 'new 0 0 128 128' }}
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                fill="#0a0a0a"
                d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z"
              />
            </g>
          </g>
        </svg>
        1/5
        {/* Right Arrow SVG */}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 128 128"
          className="w-5 h-5 cursor-pointer"
          style={{ enableBackground: 'new 0 0 128 128' }}
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                fill="#0a0a0a"
                d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="min-w-[200px] max-w-xs bg-white border border-gray-200 rounded-lg shadow p-4 flex-shrink-0"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Releases