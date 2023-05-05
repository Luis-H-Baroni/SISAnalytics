import React from 'react';
import Sidebar from '../../components/Sidebar';


function Dashboard () {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default Dashboard;