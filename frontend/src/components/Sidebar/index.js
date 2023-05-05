import React, { useState } from 'react';
import control from '../../assets/control.png';
import Chart_fill from '../../assets/Chart_fill.png';
import Chat from '../../assets/Chat.png';
import User from '../../assets/User.png';
import Calendar from '../../assets/Calendar.png';
import Search from '../../assets/Search.png';
import Chart from '../../assets/Chart.png';
import Folder from '../../assets/Folder.png';
import Setting from '../../assets/Setting.png';
import Sis40 from '../../assets/SISAnalytics_40.png';

function Sidebar () {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];

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
        {Menus.map((menu, index) => (
          <li 
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
              ${index === 0 && 'bg-light-white'}`
            }>
            <img src={menu.src} alt='choices' />
            <span className={`${!open && 'hidden'} origin-left duration-100`}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;