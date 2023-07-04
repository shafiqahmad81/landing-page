import React from 'react';
import Header from '../components/Header';
import { heroData } from '../data';

const Hero = () => {
  const {title, subtitle, btnText, image} = heroData;
  return (
    <section className=' xl:h-[900px] py-12 min-w-[320px] w-full'>
      <Header />
      <div className=' container mx-auto h-full relative px-10'>
        <div className=' flex flex-col xl:flex-row items-center h-full md:py-24'>
          <div className=' text-center xl:text-left xl:absolute'>
            <h1 className='xl:max-w-[700px] mb-6 lg:mb-12' data-aos='fade-down'data-aos-delay='400' >{title}</h1>
            <p className=' text-lg xl:max-w-[380px] mb-6 lg:mb-12'data-aos='fade-down'data-aos-delay='500' >{subtitle}</p>
            <button className='btn btn-primary  mb-8 xl:mb-0'data-aos='fade-down'data-aos-delay='700' >{btnText}</button>
          </div>
          <div className='max-w-full w-[500px] xl:absolute xl:right-0 xl:bottom-16'data-aos='fade-up'data-aos-delay='700' >
            <img className='' src= {image} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
