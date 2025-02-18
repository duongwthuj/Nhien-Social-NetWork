import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
function RightSidebar() {
  return (
    <div className='w-[23%] bg-white rounded-2xl'>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'> 
      <CiSearch size="20px" />
      <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none border-none text-lg ml-2"  
            />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1>Suggested for you</h1>  
        <div className='flex items-center my-4'>
          <div className='flex '>
          <Avatar
                src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                size="30"
                round={true}
            />
            <div className='ml-2 px-2'>
              <h1 className='font-semibold text-gray-600'>Dương Thụ</h1>
              <p className='text-gray-500 '>@duongwthuj</p>
            </div>
            <button className='px-3 py-1 text-md bg-[#1D9BF0] rounded-full text-white font-bold px-2'>Follow</button>

          </div>
        </div>

        <div className='flex items-center my-4'>
          <div className='flex '>
          <Avatar
                src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                size="30"
                round={true}
            />
            <div className='ml-2 px-2'>
              <h1 className='font-semibold text-gray-600'>Dương Thụ</h1>
              <p className='text-gray-500 '>@duongwthuj</p>
            </div>
            <button className='px-3 py-1 text-md bg-[#1D9BF0] rounded-full text-white font-bold px-2'>Follow</button>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default RightSidebar
