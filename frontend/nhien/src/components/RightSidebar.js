import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';

function RightSidebar() {
  return (
    <div className='w-[390px] fixed right-0 top-0 h-full p-3 flex flex-col'>
      
      {/* Phần đề xuất */}
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Đề xuất</h1>

        {[1, 2].map((_, index) => (
          <div key={index} className='flex items-center justify-between my-4'>
            <div className='flex items-center'>
              <Avatar
                src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                size="30"
                round
              />
              <Link to='/home/profile'>
                <div className='ml-2'>
                  <h1 className='font-semibold text-gray-600'>Dương Thụ</h1>
                  <p className='text-gray-500 text-sm'>@duongwthuj</p>
                </div>
              </Link>
            </div>
            <button className='px-4 py-1 text-xs bg-[#00a991] hover:bg-opacity-80 rounded-full text-white font-bold'>
              Theo dõi
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightSidebar
