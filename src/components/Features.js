import React from 'react';
import { featuresData } from '../data';

const Features = () => {
  const {title, subtitle} = featuresData;
  return (
    <section className='my-[70px] xl:my-[150px]'>
      <div className=' container mx-auto'>
        <div className='text-center'>
          <h2 className='text-4xl mb-6 xl:mb-12'>{title}</h2>
          <p className='max-w-[585px] mx-auto mb-16 xl:mb-24'>{subtitle}</p>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default Features

