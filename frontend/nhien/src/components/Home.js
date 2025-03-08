import React from 'react';
import { useLocation } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import { Outlet } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const isProfilePage = location.pathname === '/home/profile';
  const isMesagePage = location.pathname === '/home/messages';

  if (isProfilePage) {
    return (
      <div className='flex'>
        <LeftSidebar />
        <div className='w-[50%] border-r border-l w-full mx-auto '>
          <Outlet />
        </div>
      </div>
    );
  }

  if (isMesagePage) {
    return (
      <div className='flex'>
        <LeftSidebar />
        <div className='w-[50%] border-r border-l w-full mx-auto '>
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      {!isProfilePage && <LeftSidebar /> }
      <Outlet />
      {!isProfilePage && <RightSidebar /> }
    </div>
  );
}

export default Home;