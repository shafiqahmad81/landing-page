import React from 'react';
import { NavicationData } from '../data';

const MobileNav = () => {
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4'>
      {NavicationData.map((item, index) => {
        return (
          <li key={index}>
            <a className='text-white' href= {item.href}>
              {item.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default MobileNav