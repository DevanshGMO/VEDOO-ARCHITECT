import React from 'react';

const Pricing = ({ planName, price, description, features, buttonText }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{planName}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="text-3xl font-bold text-indigo-600 mb-4">₹{price}</div>
    <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="mb-1">{feature}</li>
      ))}
    </ul>
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">{buttonText}</button>
  </div>
);

const PricingSection = () => {
  const pricingData = [
    {
      planName: 'Basic',
      price: '6,999',
      description: 'For all individuals and starters who want to start with domaining.',
      features: [
        'Design Particular Sq/m2',
        '1k lookups / per month',
        '10 Monitoring Quota',
        '60 minutes Monitoring Interval',
        '20% discount on backorders',
        'Domain Name Appraisal',
        'Ip Monitoring',
        'Backlink Monitoring',
      ],
      buttonText: 'Click To Proceed',
    },
    {
      planName: 'Professional',
      price: '69,999',
      description: 'For professional domain names investors with a big portfolio.',
      features: [
        'Design Particular Sq/m2',
        '1k lookups / per month',
        '30 Monitoring Quota',
        '30K API Credits / month',
        '60 minutes Monitoring Interval',
        '20% discount on backorders',
      ],
      buttonText: 'Click To Proceed',
    },
    {
      planName: 'Advanced',
      price: '1,19,999',
      description: 'For all individuals and starters who want to start with domaining.',
      features: [
        'Design Particular Sq/m2',
        '1k lookups / per month',
        '10 Monitoring Quota',
        '30K API Credits / month',
        '60 minutes Monitoring Interval',
        '20% discount on backorders',
        'Domain Name Appraisal',
        'Ip Monitoring',
        'Backlink Monitoring',
      ],
      buttonText: 'Click To Proceed',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our <span className="text-indigo-600">Pricing</span> Plans</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;