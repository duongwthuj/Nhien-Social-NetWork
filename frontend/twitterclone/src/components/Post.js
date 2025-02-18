import React from "react";
import Avatar from "react-avatar";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuRepeat } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
function Post() {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex">
          <Avatar
            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
            size="54"
            round={true}
          />
          <div className="ml-2">
            <div className="flex items-center">
              <h1 className="font-semibold text-gray-600 ">Dương Thụ </h1>
              <p className="text-gray-500 ml-1"> @duongwthuj 5m</p>
            </div>
            <div>
              <p>hello</p>
            </div>
            <div className="flex justify-between my-3 ">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-poiner">
                  <FaRegHeart size="15px" />
                </div>

                <p className="ml-1">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-poiner">
                  <FaRegComment size="15px" />
                </div>

                <p className="ml-1">0</p>
              </div>
              <div className="flex  items-center">
              <div className="p-2 hover:bg-green-200 rounded-full cursor-poiner">
                  <LuRepeat size="15px" />
                </div>
              </div>
              <div className="flex   items-center">
              <div className="p-2 hover:bg-green-200 rounded-full cursor-poiner">
                  <FaRegBookmark size="15px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
