import React from "react";
import Avatar from "react-avatar";
import {  CiImageOn } from "react-icons/ci";
import { PiGifFill } from "react-icons/pi";

function CreatePost() {
  return (
    <div classname="w-[100%]">
      <div className="m-3">
        <div className="flex items-center justify-evenly boder-b  boder-gray-200">
          <di className="cursor-pointer hover:bg-gray-100 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600">For you</h1>
          </di>
          <div className="cursor-pointer hover:bg-gray-100 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 ">Following</h1>
          </div>
        </div>

        <div className="m-3 ">
          <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
            <div>
              <Avatar
                src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                size="54"
                round={true}
              />
            </div>

            <input
              type="text"
              placeholder="What's happening?"
              className="w-full outline-none border-none text-lg ml-2"
            />
          </div>
          <div className="flex justify-between items-center">
            <div  className="flex items-center space-x-4 p-4 ">
                <CiImageOn size="20px" />
                <div>
                <PiGifFill size="20px" />
                </div>
            </div>
        
            <button className="px-4 py-2 text-md bg-[#1D9BF0] w-[20%] rounded-full text-white font-bold ">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
