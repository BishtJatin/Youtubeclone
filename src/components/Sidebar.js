import React from 'react'
import MenuItems from './MenuItems';

const Sidebar = () => {
  return (
    <div className='w-1/5 shadow h-screen overflow-x-scroll'>
        <MenuItems/>
    </div>
  );
}

export default Sidebar;