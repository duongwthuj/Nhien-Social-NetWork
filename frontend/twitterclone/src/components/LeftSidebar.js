import React from "react";
import { CiHome } from "react-icons/ci";
import { CiChat2 } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

function LeftSidebar() {
    return (
        <div className="w-[20%] ">
            <div>
                <div>
                    <img
                        className="ml-3"
                        width={"90px"}
                        src="https://images-platform.99static.com//MzO1SotayLU5iqeWo6jbz24c6bE=/991x3126:1773x3908/fit-in/590x590/99designs-contests-attachments/156/156081/attachment_156081204"
                        alt="icon"

                    />
                </div>
                <div className="my-3">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <Link to="/">
                        <div>
                            <CiHome size="30px" />

                        </div>
                        </Link>
                        <h1 className="font-semibold text-lg ml-2" >Trang chủ</h1>
                    </div>
                </div>

                <div className="my-3">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiSearch size="30px" />

                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Tìm kiếm</h1>
                    </div>
                </div>

                <div className="my-3">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiBellOn size="30px" />

                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Thông báo</h1>
                    </div>
                </div>


                <div className="my-3">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiBookmark size="30px" />

                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Lưu</h1>
                    </div>
                </div>

                <div className="my-3">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiChat2 size="30px" />

                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Nhắn tin</h1>
                    </div>
                </div>



                <div className="my-3">
                    <Link to="/profile" className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiUser size="30px" />

                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Cá nhân</h1>
                    </Link>
                </div>

                <div className="my-3">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <Link to="/login">
                        <div>
                            <CiLogout size="30px" />

                        </div>
                        </Link>
                        <h1 className="font-semibold text-lg ml-2" >Đăng xuất</h1>
                    </div>
                </div>


                <button className="px-6 py-2 text-md bg-[#00a991] w-full rounded-full text-white font-bold hover:bg-opacity-80">Đăng bài</button>


                <div className="w-[100%]border-gray-200 mt-4">
                    <div >
                        <button className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                            <Avatar
                                src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                size="30"
                                round={true}
                            />
                            <div className='ml-2 px-2'>
                                <h1 className='font-semibold text-gray-600'>Dương Thụ</h1>
                                <p className='text-gray-500 '>@duongwthuj</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSidebar;
