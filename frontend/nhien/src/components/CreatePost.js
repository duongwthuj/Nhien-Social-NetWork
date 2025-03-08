import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { PiGifFill } from "react-icons/pi";

function CreatePost() {
  return (
    <div className="bg-white rounded-lg shadow-md b">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100">
          Dành cho bạn
        </div>
        <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 bg-gray-100">
          Đang theo dõi
        </div>
      </div>

      {/* Post Input */}
      <div className="py-3 border-b border-gray-200 flex space-x-4">
        <div className="">
          <Avatar
            src="https://images-workbench.99static.com/BwVnVkeaKVEFCm0j5dbUSG7rAJU=/99designs-contests-attachments/97/97041/attachment_97041107"
            size="54"
            round={true}
          />
        </div >
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Ngày hôm nay của bạn như thế nào?"
            className="w-full outline-none border border-gray-200 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>
      </div >

      {/* Actions */}
      <div div className="flex justify-between items-center px-4 py-3" >
        <div className="flex items-center space-x-4">
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <CiImageOn size="20px" />
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <PiGifFill size="20px" />
          </button>
        </div>

        <button className="px-4 py-2 bg-[#00a991] text-white font-semibold rounded-full hover:bg-opacity-80">
          Đăng bài
        </button>
      </div >
    </div >
  );
}

export default CreatePost;
