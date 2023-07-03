import React from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialData } from '../data';
import '../slider.css';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
  return (
    <Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={20} pagination={{clickable:true,}} modules={[Pagination]} className=' mySwiper'>
      {testimonialData.map((slide, index) => {
        const{ image, message, name, web} = slide;
        return (
          <SwiperSlide key={index} className='bg-white rounded-[20px] border border-orange-700 xl:max-w-[645px] max-h-[330px] pt-[60px] px-35px flex item-center overflow-hidden'>
            <img src={image} alt='Slide'/>
            <div>
              <div className='text-2xl bold'>{name}</div>
              <div className='text-red-300'>{web}</div>
              <div className='mt-[20px]'>{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

export default TestimonialSlider