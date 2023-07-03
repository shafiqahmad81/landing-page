import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section>
      <div className='container-fluid mx-auto'>
        <div className='bg-pink-200 min-h-[600px]'>
          <div className=' flex flex-col justify-center px-2 xl:px-0 h-[800px]' data-aos='fade-up' data-aos-offset='300'>
            <h2 className='text-6xl text-white text-center mb-20'>Testimonial</h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial