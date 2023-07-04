import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { featuresData } from '../data';

const Features = () => {
  const {title, subtitle ,list} = featuresData;
  return (
    <section className='my-[70px] xl:my-[150px]'>
      <div className=' container mx-auto px-10'>
        <div className='text-center'>
          <h2 className='text-4xl mb-6 xl:mb-12' data-aos='fade-down' data-aos-delay='100'>{title}</h2>
          <p className='max-w-[585px] mx-auto mb-16 xl:mb-24' data-aos='fade-down' data-aos-delay='200'>{subtitle}</p>
        </div>
        <div className='grid grid-cols-1 gap-16 xl:grid-cols-2'>
          {list.map((feature, index) => {
            const { image, bgimage, title, description, linktext, delay } = feature;
            return (
              <div className='w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto' key={index} data-aos='zoom-in' data-offset='100' data-aos-delay={delay}>
                <div className=' xl:flex -skew-x-12 absolute top-0 right-0 -z-10'>
                  { <img className='w-[530px] xl:w-[450px] h-[360px] rounded-3xl' src={bgimage} alt='bgImage'/> }
                </div>
                <div className='max-w-[120px] px-5 xl:mr-7 xl:max-w-[230px]' data-aos='zoom-in-right' data-aos-delay={delay}>
                  <img src={image} alt='icon'/>
                </div>
                <div>
                  <h3 className=' text-3xl mb-4'>{title}</h3>
                  <p className=' italic gap-x-2 group'>{description}</p>
                  <div className='flex items-center gap-x-2 group mt-2'>
                    <a className=' text-sky-600 font-bold' href='index'>{linktext}</a>
                    <BsArrowRight className='text-xl text-purple-900 group-hover:ml-5 transition-all'/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features

