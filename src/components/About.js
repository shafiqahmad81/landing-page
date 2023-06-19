import React from 'react';
import { aboutData } from '../data';

const About = () => {
  const {image, title, subtitle} = aboutData;
  return (
    <section className=' my-[70px] xl:mt-[100px]'>
      <div className='container mx-auto'>
        <div className=' bg-pink-400/[15%] rounded-[50px] min-h-[560px] px-12  pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-14 xl:pb-0'>
          <div className=' flex-1'>
            <img src={image} alt='HeroImage'/>
          </div>
          <div className='flex-1 xl:pr-12'>
            <h2 className='text-5xl pb-10 mt-10 xl:mt-0'>{title}</h2>
            <p className=' mx-auto xl:mx-0'>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About