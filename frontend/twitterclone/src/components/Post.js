import React from "react";
import Avatar from "react-avatar";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { LuRepeat } from "react-icons/lu";

function Post() {
  return (
    <div className="py-3 border-b border-gray-200 flex space-x-4">
      <div className="flex">
        {/* Avatar */}
        <Avatar 
          src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
          size="54"
          round={true}
        />

        <div className="ml- 3w-full">
          {/* Username + Handle + Time */}
          <div className="flex items-center text-gray-600 px-4">
            <h1 className="font-semibold text-gray-800">Dương Thụ</h1>
            <p className="text-sm ml-1 text-gray-500">@duongwthuj · 5m</p>
          </div>

          {/* Nội dung */}
          <p className="mt-1 text-gray-700 px-4">hello</p>

          {/* Các nút tương tác */}
          <div className="flex justify-between mt-3 text-gray-500 text-sm px-4">
            <button className="flex items-center space-x-1 hover:text-red-500">
              <FaRegHeart size="14px" />
              <span>0</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <FaRegComment size="14px" />
              <span>0</span>
            </button>
            <button className="flex items-center hover:text-green-500">
              <LuRepeat size="14px" />
            </button>
            <button className="flex items-center hover:text-yellow-500">
              <FaRegBookmark size="14px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
