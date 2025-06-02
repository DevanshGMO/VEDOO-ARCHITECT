import React from "react";

const features = [
  "Access to All Features",
  "1k lookups / per month",
  "60 minutes Monitoring interval",
  "20% discount on backorders",
  "Access to IP Monitoring",
];

const plans = {
  Basic: [true, true, false, false, false],
  Professional: [true, true, true, false, false],
  Advanced: [true, true, true, true, true],
};

const CheckIcon = () => (
  <svg
    className="inline text-green-600 w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const FeaturedTable = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto bg-white shadow-lg rounded-lg mb-10">
      <div className="text-4xl md:text-5xl font-bold mb-12 text-center">
        What We <span className="text-[#ff9100]">Provide</span>
      </div>

      <div className="overflow-hidden">
        <div className="grid grid-cols-4 min-w-[600px] border border-gray-100">

          <div className="bg-white font-semibold border border-gray-100 p-4">&nbsp;</div>
          {Object.entries(plans).map(([plan,_]) => (
            <div key={plan} className="bg-gray-100 p-4 text-center font-bold relative">
              {plan}
              {plan === "Professional" && (
                <span className="absolute top-1 right-1 text-xs bg-[#ff9100] text-white px-2 py-0.5 rounded">
                  Popular
                </span>
              )}
            </div>
          ))}
          {features.map((feature, rowIdx) => (
            <React.Fragment key={feature}>
              <div className="border border-gray-100 p-4 font-medium">
                {feature}
              </div>
              {Object.values(plans).map((planFeatures, colIdx) => (
                <div
                  key={`${rowIdx}-${colIdx}`}
                  className="border border-gray-100 p-4 text-center"
                >
                  {planFeatures[rowIdx] ? <CheckIcon /> : "—"}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTable;
