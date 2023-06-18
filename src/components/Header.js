import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import Logo from '../assets/img/logo.png';
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'>
      <div className=' container mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-[120px]'>
          <a href='index.html'>
            <img className='w-[50px] h-[50px]' src={Logo} alt='logo'/>
          </a>
          <div className=' hidden lg:flex'>
            <Nav />
          </div>
        </div>
        <div className={`${
          mobileNav ? 'max-h-52' : 'max-h-0'} lg:hidden absolute top-20 left-0 right-0 bg-blue-300 w-full font-bold rounded transition-all overflow-hidden`}>
          <MobileNav />
        </div>
        <button className='btn btn-quentary flex items-center gap-4'>
          Red More <BsArrowRight className='text-2xl group-hover:text-orange-100'/>
        </button>
        <div onClick={() => setMobileNav(!mobileNav)} className='lg:hidden text-2xl text-purple-950 cursor-pointer'>
          <FaBars />
        </div>
      </div>
    </div>
    </header>
  )
}

export default Header