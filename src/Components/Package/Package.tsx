// Packages.tsx
import React from 'react';
import {PackageCard} from '../PackageCard/PackageCard';

export const Package = () : JSX.Element => {

  const packagesData = [
    { billingAmount: '150 tk', expiryDate: '30 days' },
    { billingAmount: '200 tk', expiryDate: '60 days' },
    { billingAmount: '500 tk', expiryDate: '180 days' },
    { billingAmount: '700 tk', expiryDate: '365 days' }
  ];

  return (
    <div>
      <div className = "text-center">
        <h1 className = "text-4xl text-white">
            Packages
        </h1>
        <div className = "grid grid-cols-1 md:grid-cols-3 gap-4">
          {packagesData.map((packageData, index) => (
            <div className = 'mx-auto'>
                <PackageCard key = {index} {...packageData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

