import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { PiGifFill } from "react-icons/pi";

function CreatePost() {
  return (
    <div classname="w-[100%]">
      <div className="m-3">
        <div className="flex items-center justify-evenly boder-b boder-gray-200">
          <di className="cursor-pointer hover:bg-gray-100 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600">Dành cho bạn</h1>
          </di>
          <div className="cursor-pointer hover:bg-gray-100 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 ">Đang theo dõi</h1>
          </div>
        </div>

        <div className="m-3 ">
          <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
            <div>
              <Avatar
                src="https://images-workbench.99static.com/BwVnVkeaKVEFCm0j5dbUSG7rAJU=/99designs-contests-attachments/97/97041/attachment_97041107"
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
            <div className="flex items-center space-x-4 p-4 ">
              <CiImageOn size="20px" />
              <div>
                <PiGifFill size="20px" />
              </div>
            </div>

            <button className="px-4 py-2 text-base bg-[#00a991] hover:bg-opacity-80 w-[20%] rounded-full text-white font-bold hover:bg-opacity-80">
              Đăng bài
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
