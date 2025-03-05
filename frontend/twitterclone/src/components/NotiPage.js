import React from "react";
import Avatar from "react-avatar";


import { LuRepeat } from "react-icons/lu";

function NotiPage() {
  return (
    <div className="fixed top-0 left-[300px] w-[845px] h-full border-r border-gray-200 overflow-y-auto">
      {/* Tabs */}
      <h1 className="text-2xl font-semibold p-4 border-b border-gray-200">
        Thông báo
      </h1>
      <div className="flex border-b border-gray-200">
        <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100">
          Tất cả
        </div>
        <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 bg-gray-100">
          Đã đọc
        </div>
        <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 bg-gray-100">
          Gợi ý
        </div>
      </div>

      <div className="py-3 border-b border-gray-200 flex space-x-4">
        <div className="flex">
          {/* Avatar */}
          <Avatar
            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
            size="54"
            round={true}
          />

          <div className="ml- 3w-full">


            {/* Nội dung */}
            <p className="mt-1 text-gray-700 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

          </div>
        </div>
      </div>

      <div className="py-3 border-b border-gray-200 flex space-x-4">
        <div className="flex">
          {/* Avatar */}
          <Avatar
            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
            size="54"
            round={true}
          />

          <div className="ml- 3w-full">


            {/* Nội dung */}
            <p className="mt-1 text-gray-700 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

          </div>
        </div>
      </div>

      <div className="py-3 border-b border-gray-200 flex space-x-4">
        <div className="flex">
          {/* Avatar */}
          <Avatar
            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
            size="54"
            round={true}
          />

          <div className="ml- 3w-full">


            {/* Nội dung */}
            <p className="mt-1 text-gray-700 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

          </div>
        </div>
      </div>


      <div className="py-3 border-b border-gray-200 flex space-x-4">
        <div className="flex">
          {/* Avatar */}
          <Avatar
            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
            size="54"
            round={true}
          />

          <div className="ml- 3w-full">


            {/* Nội dung */}
            <p className="mt-1 text-gray-700 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

          </div>
        </div>
      </div>
    </div >
  );
}

export default NotiPage;
