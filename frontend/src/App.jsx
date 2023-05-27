import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from './routes/Home';
import ConfigurationItems from './routes/ConfigurationItems';
import Events from './routes/Events';
import Incidents from './routes/Incidents';
import Solutions from './routes/Solutions';
import Reports from './routes/Reports';
import About from './routes/About';

function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar />
        <div  className="p-7 text-2x1 font-semibold flex-1 h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/configurationItems" element={<ConfigurationItems />} />
            <Route path="/events" element={<Events />} />
            <Route path='/incidents' element={<Incidents />} />
            <Route path='/solutions' element={<Solutions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;