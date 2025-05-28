const FAQ = () => {
  return (
    <section className="py-12 bg-gray-50 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What is included in the Basic plan?</h3>
            <p className="text-gray-600">
              The Basic plan includes design particular Sq/m2, 1k lookups per month, 10 monitoring quota, 60 minutes monitoring interval, 20% discount on backorders, Domain Name Appraisal, IP Monitoring, and Backlink Monitoring.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I upgrade my plan later?</h3>
            <p className="text-gray-600">
              Yes, you can upgrade your plan at any time. Your billing will be adjusted accordingly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Is there a free trial?</h3>
            <p className="text-gray-600">
              Currently, we do not offer a free trial, but we have a "No credit card required" policy for initial sign-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


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
    <>
     <section className="py-12 bg-white font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-24">
          Our <span className="text-[#ff9100]">Pricing Plans</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl shadow-lg transition-all duration-300
                ${plan.popular ? "bg-[#052536] text-white transform scale-105" : "bg-white text-gray-800 border border-gray-200"}
                w-full max-w-sm md:max-w-md lg:max-w-xs`} // Adjust max-width for better responsiveness
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff9100] text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                  Popular
                </div>
              )}
              <div className="p-8 text-center flex-grow">
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    plan.popular ? "text-white" : "text-gray-600"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
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
                    className={`text-sm ${
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
                      {/* Conditionally render the "Include" span if the feature is in the includes object */}
                      {plan.includes && plan.includes[feature] && (
                        <span
                          className={`ml-1 text-xs font-medium px-2 py-0.5 rounded-full ${
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
              <div className="p-8 pt-0 text-center">
                <button
                  className={`w-full py-3 px-6 rounded-md font-semibold transition duration-300 ease-in-out
                    ${
                      plan.popular
                        ? "bg-[#ff9100] text-white hover:bg-orange-600 shadow-md"
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
    </>

  );
};

export default PricingPlan;
