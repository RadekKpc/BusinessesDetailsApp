// import styles from './BusinessDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { BusinessDetailsEntry } from './commonTypes';
import { defaultBusinessDetailsEntry } from './commonTypes';
import { getBusinessDetails } from '../../utils/businessService';
import BusinessOpenStatus from './BusinessOpenStatus/BusinessOpenStatus';

const  BusinessDetails = () => {
  const pathParams = useParams();
  const [businessDetails, setBusinessDetails] = useState<BusinessDetailsEntry>(defaultBusinessDetailsEntry);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (pathParams?.businessId) getBusinessDetails(pathParams.businessId, setIsLoading, setBusinessDetails, () => {});
  }, []);

 
  return (
    isLoading ?  <div> loading</div> : <div>
        Business name: {businessDetails.displayedWhat}
        Business location: {businessDetails.displayedWhere}
        {
          Object.entries(businessDetails.openingHours.days).map(([dayName, hours], idx) => <div key={idx}>
              {dayName}: {
                hours.map(({ start, end }) => `${start} - ${end} `)
              }
            </div>,
          )
        }
        <BusinessOpenStatus days={businessDetails.openingHours.days} />
    </div>
  ); 
};

export default BusinessDetails;
