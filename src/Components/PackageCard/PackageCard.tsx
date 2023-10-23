import React from 'react';

type PackageCardProps = {
  billingAmount: string;
  expiryDate: string;
};

export const PackageCard = ({ billingAmount, expiryDate }) : JSX.Element => {
  return (
    <div className = "bg-white shadow-lg rounded-lg p-6 m-4 w-64">
      <h2 className = "text-2xl font-semibold">
        Package
      </h2>
      <p>
        Billing Amount: {billingAmount}
      </p>
      <p>
        Expiry Date: {expiryDate}
      </p>
      <button className = "bg-blue-500 text-white px-4 py-2 rounded-full mt-4">
        Buy Now
      </button>
    </div>
  );
};

export default PackageCard;
