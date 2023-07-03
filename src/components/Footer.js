import React from 'react';
import { footerData } from '../data';

const Footer = () => {
  const {logo, address, email, phone, list1, list2, sociallist} = footerData;
  return (
    <footer>
      <div className='container mx-auto'>
        <div>
          <div>
            <a href='index'>
              <img className='w-16 mb-12' src={logo} alt='Footerlogo'/>
            </a>
            <div>
              {address}
            </div>
            <div>
              {email}
            </div>
            <div>
              {phone}
            </div>
          </div>
          <div>
            <div>
              <div className='font-bold text-fuchsia-700 mb-8'>About</div>
              <ul>
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
              <ul>
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
              <ul>
                {sociallist.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.href}>
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
    </footer>
  )
}

export default Footer