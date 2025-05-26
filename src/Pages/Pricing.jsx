import React from 'react';

// Inline SVG for a checkmark icon, matching the style in the image
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-green-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

// Inline SVG for a dash/minus icon, matching the style in the image
const DashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 13H5v-2h14v2z" />
  </svg>
);

/**
 * PricingTable Component
 * Renders a responsive pricing comparison table based on provided data.
 * It features a header row, and multiple feature rows with checkmark or dash icons.
 */
const PricingTable = () => {
  // Define the features and their inclusion status for each plan
  const featuresData = [
    {
      name: 'Access to All Features',
      basic: true,
      professional: true,
      advanced: true,
    },
    {
      name: '1k lookups / per month',
      basic: true,
      professional: true,
      advanced: true,
    },
    {
      name: '60 minutes Monitoring interval',
      basic: false,
      professional: true,
      advanced: true,
    },
    {
      name: '20% discount on backorders',
      basic: false,
      professional: false,
      advanced: true,
    },
    {
      name: 'Access to Ip Monitoring',
      basic: false,
      professional: false,
      advanced: true,
    },
    // Add more features as needed based on the full pricing structure
  ];

  return (
    // Removed min-h-screen and flex items-center justify-center from outer div
    // to allow the table to start from the top/left as implied by "red border".
    // Padding is still applied for overall spacing.
    <div className="bg-gray-50 p-4 sm:p-6 font-sans">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"> {/* Added mx-auto for horizontal centering */}
        {/* Table Container */}
        <div className="overflow-x-auto"> {/* Allows horizontal scrolling on small screens */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* What We Provide Header */}
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-lg font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap border-r border-gray-200"
                >
                  WHAT WE PROVIDE
                </th>
                {/* Plan Headers */}
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-lg font-bold text-gray-800 uppercase tracking-wider relative whitespace-nowrap border-r border-gray-200"
                >
                  BASIC
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-lg font-bold text-gray-800 uppercase tracking-wider relative whitespace-nowrap border-r border-gray-200"
                >
                  PROFESSIONAL
                  <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-md transform rotate-6">
                    Popular
                  </span>
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-lg font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap"
                >
                  ADVANCED
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {featuresData.map((feature, index) => (
                <tr key={index}>
                  {/* Feature Name */}
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 border-r border-gray-200">
                    {feature.name}
                  </td>
                  {/* Basic Plan Status - Centered Icon */}
                  <td className="px-6 py-4 whitespace-nowrap"> {/* Removed text-center here as flex handles it */}
                    <div className="flex items-center justify-center h-full border-r border-gray-200"> {/* Flex container for centering, added border-r */}
                      {feature.basic ? <CheckIcon /> : <DashIcon />}
                    </div>
                  </td>
                  {/* Professional Plan Status - Centered Icon */}
                  <td className="px-6 py-4 whitespace-nowrap"> {/* Removed text-center here as flex handles it */}
                    <div className="flex items-center justify-center h-full border-r border-gray-200"> {/* Flex container for centering, added border-r */}
                      {feature.professional ? <CheckIcon /> : <DashIcon />}
                    </div>
                  </td>
                  {/* Advanced Plan Status - Centered Icon */}
                  <td className="px-6 py-4 whitespace-nowrap"> {/* Removed text-center here as flex handles it */}
                    <div className="flex items-center justify-center h-full"> {/* Flex container for centering */}
                      {feature.advanced ? <CheckIcon /> : <DashIcon />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
