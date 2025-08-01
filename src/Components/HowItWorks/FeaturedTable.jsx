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
    <div className="p-4 md:p-8 max-w-7xl mx-auto bg-white shadow-lg rounded-lg mb-10 font-sans">
      <div className="text-4xl md:text-5xl font-bold mb-12 text-center">
        What We <span className="text-[#ff9100]">Provide</span>
      </div>

      {/* This container will handle horizontal scrolling on small screens */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px] border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-gray-50">
            <div className="font-semibold p-4 text-left text-gray-800 border-r border-gray-200">
              &nbsp;
            </div>
            {Object.entries(plans).map(([planName, _]) => (
              <div
                key={planName}
                className="p-4 text-center font-bold relative text-gray-800 border-r last:border-r-0 border-gray-200"
              >
                {planName}
                {planName === "Professional" && (
                  <span className="absolute top-1 right-1 text-xs bg-[#ff9100] text-white px-2 py-0.5 rounded-full shadow-md">
                    Popular
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          {features.map((feature, rowIdx) => (
            <div
              key={feature}
              className="grid grid-cols-4 border-t border-gray-200"
            >
              <div className="p-4 font-medium text-gray-700 bg-white border-r border-gray-200">
                {feature}
              </div>
              {Object.values(plans).map((planFeatures, colIdx) => (
                <div
                  key={`${rowIdx}-${colIdx}`}
                  className="p-4 text-center bg-white border-r last:border-r-0 border-gray-200"
                >
                  {planFeatures[rowIdx] ? (
                    <CheckIcon />
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTable;