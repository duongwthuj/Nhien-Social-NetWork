import React from "react";
import { FaPhone, FaVideo, FaInfoCircle } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

const ChatApp = () => {
    return (
        <div className="flex ">
            
            <div className="w-[300px] fixed left-[300px] h-full bg-white border-r p-4 h-screen bg-gray-100">
                <h2 className="text-lg font-semibold mb-4">duongwthuj</h2>
                
                <div className="mt-4">
                    <div className="flex items-center p-2 bg-gray-200 rounded-lg cursor-pointer">
                        <img
                            src="https://randomuser.me/api/portraits/women/50.jpg"
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="ml-3">
                            <p className="font-semibold">Dương Thụ</p>
                            <p className="text-sm text-gray-500">1 tin nhắn - 1d</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div >
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-white border-b ml-[600px] w-[880px]">
                    <div className="flex items-center">
                        <img
                            src="https://randomuser.me/api/portraits/women/50.jpg"
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <p className="ml-3 font-semibold">Dương Thư</p>
                    </div>
                    <div className="flex space-x-4">
                        <FaPhone className="text-gray-500 cursor-pointer" />
                        <FaVideo className="text-gray-500 cursor-pointer" />
                        <FaInfoCircle className="text-gray-500 cursor-pointer" />
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto ml-[600px] w-[880px]">
                    <div className="mb-4">
                        <p className="text-center text-gray-500 text-sm">Hôm qua</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/50.jpg"
                            alt="Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="ml-3 bg-gray-200 p-3 rounded-lg">
                            <p>Chào bạn!</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-green-500 text-white p-3 rounded-lg">Oke</div>
                    </div>
                </div>

                {/* Chat Input */}
                <div className="fixed bottom-0 left-[600px] w-[880px] bg-white p-4 border-t flex items-center">
                    <input
                        type="text"
                        placeholder="Nhắn tin..."
                        className="w-full p-2 border rounded-lg"
                    />
                    <icon className="text-gray-500 cursor-pointer ml-4">
                        <VscSend />
                    </icon>
                </div>
            </div>
        </div>
    );
};

export default ChatApp;
