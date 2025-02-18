import React from "react";
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
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
                <div className="my-4">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiHome size= "30px"/>
                            
                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Home</h1>
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiSearch size= "30px"/>
                            
                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Explore</h1>
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <IoMdNotificationsOutline size= "30px"/>
                            
                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Notifications</h1>
                    </div>
                </div>


                <div className="my-4">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiBookmark size= "30px"/>
                            
                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Bookmarks</h1>
                    </div>
                </div>

                
                <div className="my-4">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiUser size= "30px"/>
                            
                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Profile</h1>
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex items-center my-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-200 " >
                        <div>
                            <CiLogout size= "30px"/>
                            
                        </div>
                        <h1 className="font-semibold text-lg ml-2" >Log out</h1>
                    </div>
                </div>


                <button className="px-4 py-2 text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold ">Post</button>
            </div>
        </div>
    );
}

export default LeftSidebar;
