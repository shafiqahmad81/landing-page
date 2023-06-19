import React from 'react';
import { NavicationData } from '../data';

const Nav = () => {
  return (
    <ul className='flex gap-x-8'>
      {NavicationData.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.href}>
              {item.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav