import React from 'react';
import { footerData } from '../data';
import Copyright from './Copyright';

const Footer = () => {
  const {logo, address, email, phone, list1, list2, sociallist} = footerData;
  return (
    <footer data-aos='fade-up'>
      <div className='container mx-auto px-10'>
        <div className='flex flex-col xl:flex-row text-center xl:text-left gap-y-12'>
          <div className='w-[45%] mx-auto flex flex-col items-center xl:items-start'>
            <a href='index'>
              <img className='w-16 mb-12' src={logo} alt='Footerlogo'/>
            </a>
            <div className=' mx-w-[260px] mb-5 text-violet-800 font-bold'>
              {address}
            </div>
            <div className=' font-light text-slate-400 italic'>
              {email}
            </div>
            <div className=' font-light text-slate-400 italic'>
              {phone}
            </div>
          </div>
          <div className='flex flex-1 flex-col xl:flex-row gap-y-14 justify-between'>
            <div>
              <div className='font-bold text-fuchsia-700 mb-8'>About</div>
              <ul className='flex flex-col gap-y-4'>
                {list1.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className='text-lime-700' href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className='font-bold text-fuchsia-700 mb-8'>Help</div>
              <ul className='flex flex-col gap-y-4'>
                {list2.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className='text-lime-700' href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className='font-bold text-fuchsia-700 mb-8'>Social Media</div>
              <ul className='flex justify-center gap-4'>
                {sociallist.map((item, index) => {
                  return (
                    <li className='w-12 h-12 bg-violet-700/30 rounded-full flex items-center justify-center hover:bg-pink-500 cursor-pointer transition-all' key={index}>
                      <a className='text-white text-xl hover:text-white' href={item.href}>
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer