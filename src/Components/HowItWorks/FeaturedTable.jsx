import React from 'react';
import Tick from "../../assets/Tick.png"
const FeaturedTable = () => {
  const plans = [
    {
      name: "BASIC",
      features: [true, true, false, false, false],
    },
    {
      name: "PROFESSIONAL",
      popular: true,
      features: [true, true, true, false, false],
    },
    {
      name: "ADVANCED",
      features: [true, true, true, true, true],
    },
  ];

  const features = [
    "Access to All Features",
    "1k lookups / per month",
    "60 minutes Monitoring interval",
    "20% discount on backorders",
    "Access to Ip Monitoring",
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="overflow-x-auto">
        <table className="w-fit mx-auto table-auto border-collapse text-left min-w-full md:min-w-0">
          <thead>
            <tr>
              <th className="p-6 text-xl font-bold text-gray-900 md:text-2xl lg:p-8"> {/* Increased padding for header cells */}
                WHAT WE <span className="text-orange-500">PROVIDE</span>
              </th>
              {plans.map((plan, idx) => (
                <th
                  key={idx}
                  className="relative bg-gray-100 p-6 text-center text-lg font-semibold text-gray-900 md:text-xl lg:p-8" // Increased padding for plan headers
                >
                  {plan.name}
                  {plan.popular && (
                    <span className="absolute top-1 right-1 rounded bg-orange-400 px-2 py-0.5 text-xs text-white">
                      Popular
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-6 text-sm text-gray-800 md:text-base lg:p-8"> {/* Increased padding for feature cells */}
                  {feature}
                </td>
                {plans.map((plan, pIdx) => (
                  <td key={pIdx} className="p-6 text-center lg:p-8"> {/* Increased padding for checkmark/dash cells */}
                    {plan.features[idx] ? (
                      <span className="text-green-600">
                        <img src={Tick} alt="" width={30} />
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturedTable;
