import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  )
}

export default Home
