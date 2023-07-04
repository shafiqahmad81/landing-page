import React from 'react';
import { copyrightDAta } from '../data';

const Copyright = () => {
  const {text, icon} = copyrightDAta;
  return ( 
    <section className='mt-24 pb-12' data-aos='fade-up'>
      <div className='container mx-auto px-10'>
        <div className='flex items-center justify-between text-center md:text-left flex-col lg:flex-row gap-y-8'>
          <div className='text-sm font-light italic max-w-[360px]'>
            {text}
          </div>
          <div className='-order-1 md:order-1'>
            <div className=' w-16 h-16 flex items-center justify-center bg-violet-950/20 rounded-full cursor-pointer group'>
              <div className='text-3xl text-violet-500 group-hover: scale-110 transition-all'>
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Copyright