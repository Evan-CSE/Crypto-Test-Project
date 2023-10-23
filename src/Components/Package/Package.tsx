// Packages.tsx
import React from 'react';
import {PackageCard} from '../PackageCard/PackageCard';

export const Package = () : JSX.Element => {
  const packagesData = [
    { billingAmount: '$10', expiryDate: '30 days' },
    { billingAmount: '$20', expiryDate: '60 days' },
    { billingAmount: '$30', expiryDate: '90 days' },
  ];

  return (
    <div>
      <div className = "text-center">
        <h1 className = "text-4xl text-white">
            Packages
        </h1>
        <div className = "flex justify-center">
          {packagesData.map((packageData, index) => (
            <PackageCard key = {index} {...packageData} />
          ))}
        </div>
      </div>
    </div>
  );
};

