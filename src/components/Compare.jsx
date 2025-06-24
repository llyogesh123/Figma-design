import React from 'react'

const features = [
  "Features",
  "Figma Design",
  "Dev Mode",
  "FigJam",
  "Figma Slides",
  "Figma Draw",
  "Extensibility",
  "Security",
  "Admin",
  "Platform"
];

const plans = ["Starter", "Professional", "Organization", "Enterprise"];

const Compare = () => {
  return (
    <>
      <div>
        <h1 className="font-bold drop-shadow text-5xl mb-6 flex justify-between items-center">Compare all features</h1>
        <div className="flex justify-between items-center w-full">
          <button className="px-6 py-2 rounded-md font-medium bg-gray-500 text-white hover:bg-gray-900">
            Full seat
          </button>
          <button className="px-6 py-2 rounded-md font-medium bg-gray-500 text-black border border-black hover:bg-gray-100">
            All features  Key features
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full border border-gray-300 rounded-lg bg-white shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left font-bold text-gray-700 bg-gray-100">Features</th>
              {plans.map(plan => (
                <th key={plan} className="px-4 py-2 border-b text-left font-bold text-gray-700 bg-gray-100">{plan}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.slice(1).map((feature) => (
              <tr key={feature}>
                <td className="px-4 py-2 border-b font-medium text-gray-800">{feature}</td>
                {plans.map(plan => (
                  <td key={plan} className="px-4 py-2 border-b text-center text-gray-600">—</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Compare