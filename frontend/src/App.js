import React, { useState } from 'react';
import control from './assets/control.png';
import './App.css';

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen bg-dark-purple relative`}>
        <img 
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt='control'
        />
      </div>
      <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
