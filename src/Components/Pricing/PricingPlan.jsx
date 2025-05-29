const PricingPlan = () => {
  const pricingPlans = [
    {
      name: "BASIC",
      tagline: "For all individuals and starters who want to start with domaning.",
      price: "₹6,999",
      billing: "Single Mood",
      features: [
        "Design Particular Sq/m2",
        "1k lookups / per month",
        "10 Monitoring Quota",
        "60 minutes Monitoring interval",
        "20% discount on backorders",
        "Domain Name Appraisal",
        "IP Monitoring",
        "Backlink Monitoring",
      ],
      includes: {
        "Domain Name Appraisal": "Include",
        "IP Monitoring": "Include",
        "Backlink Monitoring": "Include",
      },
      popular: false,
    },
    {
      name: "PROFESSIONAL",
      tagline: "For professional domain names investors with a big portfolio.",
      price: "₹69,999",
      billing: "Entire House",
      features: [
        "Design Particular Sq/m2",
        "1k lookups / per month",
        "10 Monitoring Quota",
        "30K API Credits / month",
        "80 minutes Monitoring interval",
        "20% discount on backorders",
      ],
      popular: true,
    },
    {
      name: "ADVANCED",
      tagline: "For all individuals and starters who want to start with domaning.",
      price: "₹1,19,999",
      billing: "Full Design and Virtual Monitor",
      features: [
        "Design Particular Sq/m2",
        "1k lookups / per month",
        "10 Monitoring Quota",
        "30K API Credits / month",
        "80 minutes Monitoring interval",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">
          Our <span className="text-[#ff9100]">Pricing Plans</span>
        </h2>
        <div className="flex flex-wrap justify-center items-stretch gap-8 lg:gap-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col shadow-lg transition-all duration-300
                ${plan.popular ? "bg-[#052536] text-white transform scale-105 min-h-[720px]" : "bg-white text-gray-800 border border-gray-200 min-h-[680px]"}
                w-full max-w-sm md:max-w-md lg:max-w-xs
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff9100] text-white text-sm font-semibold px-4 py-1 shadow-md">
                  Popular
                </div>
              )}
              <div className="p-6 sm:p-8 text-center flex-grow">
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    plan.popular ? "text-white" : "text-gray-600"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 text-left ${
                    plan.popular ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {plan.tagline}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <p
                    className={`text-sm font-semibold mt-2 ${
                      plan.popular ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.billing}
                  </p>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center text-sm ${
                        plan.popular ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 mr-3 ${
                          plan.popular ? "text-[#ffffff]" : "text-[#ff9100]"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                      {plan.includes && plan.includes[feature] && (
                        <span
                          className={`ml-1 text-xs font-medium px-2 py-0.5 ${
                            plan.popular ? "bg-white text-gray-800" : "bg-green-100 text-green-700"
                          }`}
                        >
                          {plan.includes[feature]}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 sm:p-8 pt-0 text-center">
                <button
                  className={`w-full py-3 px-6 font-semibold transition duration-300 ease-in-out
                    ${
                      plan.popular
                        ? "bg-[#ff9100] text-white shadow-md"
                        : "bg-gray-800 text-white hover:bg-gray-900 shadow-md"
                    }`}
                >
                  Click To Proceed
                </button>
                <p
                  className={`mt-4 text-sm ${
                    plan.popular ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  No credit card required
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
