"use client";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter Price",
      price: "FREE",
      period: "hour",
      features: [
        { name: "Web Development", included: true },
        { name: "Logo design", included: false },
        { name: "SEO optimization", included: false },
        { name: "Wordpress integration", included: true }
      ],
      bestValue: false
    },
    {
      name: "Hourly Payment",
      price: "29",
      period: "hour",
      features: [
        { name: "Web Development", included: true },
        { name: "Logo design", included: true },
        { name: "SEO optimization", included: false },
        { name: "Wordpress integration", included: true }
      ],
      bestValue: true
    },
    {
      name: "Full Time",
      price: "2999",
      period: "hour",
      features: [
        { name: "Web Development", included: true },
        { name: "Logo design", included: true },
        { name: "SEO optimization", included: true },
        { name: "Wordpress integration", included: true }
      ],
      bestValue: false
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-white text-3xl font-bold mb-8">Price Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-[#2d2d3a] rounded-lg overflow-hidden relative">
            {plan.bestValue && (
              <div className="absolute top-0 right-0 bg-[#ffc107] text-black text-xs font-bold px-4 py-2 transform rotate-45 translate-x-8 translate-y-4">
                BEST VALUE
              </div>
            )}
            <div className="p-8 text-center border-b border-gray-700">
              <h3 className="text-white text-lg font-semibold mb-6">{plan.name}</h3>
              <div className="flex items-start justify-center mb-2">
                <span className="text-[#ffc107] text-xl mt-2">$</span>
                <span className="text-[#ffc107] text-6xl font-bold mx-1">{plan.price}</span>
                <span className="text-gray-400 text-sm mt-auto mb-2">/{plan.period}</span>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    {feature.included ? (
                      <svg className="w-5 h-5 text-[#ffc107] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className="text-gray-300">{feature.name}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full text-[#ffc107] font-semibold text-sm hover:text-[#ffb300] inline-flex items-center justify-center">
                ORDER NOW 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {index === 0 && (
                <p className="text-gray-500 text-xs text-center mt-3">* Free only when ordering paid package.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
