import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MenuItens } from './MenuItens';
import control from '../../assets/control.png';
import Sis40 from '../../assets/SISAnalytics_40.png';

function Sidebar () {
  const [open, setOpen] = useState(true);
  const [path, setPath] = useState('');
  const location = window.location.pathname;
  
  useEffect(() => {}, [path, location]);

  return (
    <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
      <img 
        src={control}
        alt='control'
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className='flex gap-x-4 items-center'>
        <img
          src={Sis40}
          alt='logo'
          className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
        />
        <h1 className={`text-white origin-left font-medium text-x1 duration-300 ${!open && 'scale-0'}`}>SisAnalytics</h1>
      </div>
      <ul className='pt-6'>
        {MenuItens.map((menu, index) => (
          <Link to={menu.path} key={index}>
            <li 
              onClick={() => setPath(menu.path)}
              key={index}
              className={`
                text-gray-300
                text-sm flex
                items-center
                gap-x-4
                cursor-pointer
                p-2
                hover:bg-light-white
                rounded-md 
                ${menu.gap ? 'mt-9' : 'mt-2'}
                ${location === menu.path && 'bg-light-white'}`
              }>
                <img src={menu.src} alt='choices' />
                <span className={`${!open && 'hidden'} origin-left duration-100`}>{menu.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;