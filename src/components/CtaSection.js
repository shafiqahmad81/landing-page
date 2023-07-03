import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { ctaData } from '../data';

const CtaSection = () => {
  const { title, subtitle, btntext1, btntext2} = ctaData;
  return (
    <section className='my-[75px] xl:my-[150px] border-t-2' data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center'>
          <div className='py-12 text-center xl:text-left'>
            <h2 className='text-5xl mb-5' data-aos='fade-up' data-aos-delay='300'>{title}</h2>
            <p  data-aos='fade-up'>{subtitle}</p>
          </div>
          <div className='flex flex-col xl:flex-row gap-y-4 gap-x-[30px]'>
            <button className='btn btn-primary' data-aos='fade-up' data-aos-delay='300'>{btntext1}</button>
            <button className='btn btn-quentary flex items-center gap-x-[20px] group'>
              {btntext2}
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection