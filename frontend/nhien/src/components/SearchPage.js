import React from "react";
import Avatar from "react-avatar";


import { LuRepeat } from "react-icons/lu";

function SearchPage() {
    return (
        <div className="fixed top-0 left-[300px] w-[845px] h-full border-r border-gray-200 overflow-y-auto">
            {/* Tabs */}
            <h1 className="text-2xl font-semibold p-4 border-b border-gray-200">
                Tìm kiếm
            </h1>
            <div className="flex border-b border-gray-200">
                <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100">
                    Dành cho bạn
                </div>
                <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100">
                    Xu hướng
                </div>
                <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100">
                    Tin tức
                </div>
                <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100">
                    Thể thao
                </div>
                <div className="cursor-pointer w-full text-center px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100">
                    Giải trí
                </div>

            </div>
            <img className="w-[880px] h-[200px]" src="https://placehold.co/770x433" />
            <h2 className="text-xl font-semibold p-2 border-b border-gray-200">Iphone 16 sắp ra mắt</h2>
            <div>
                <h2 className="text-xl font-semibold  p-2">Tin tức hôm nay</h2>
                <div className=" flex items-center justify-between">
                    <div className="flex flex-col p-2">
                        <div>
                            <div className="font-semibold text-l">Sinh nhật Nguyễn Dương Thụ</div>
                            <div className="flex space-x-1">
                                <Avatar
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                    size="20"

                                />
                                <Avatar
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                    size="20"

                                />
                                <Avatar
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                    size="20"

                                />
                            </div>
                        </div>


                    </div>



                    {/* Avatar */}
                    <div className="flex justify-end">
                        <Avatar
                            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                            size="40"
                            round={true}
                        />
                    </div>
                </div>

                <div className=" flex items-center justify-between">
                    <div className="flex flex-col p-2">
                        <div>
                            <div className="font-semibold text-l">Sinh nhật Nguyễn Dương Thụ</div>
                            <div className="flex space-x-1">
                                <Avatar
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                    size="20"

                                />
                                <Avatar
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                    size="20"

                                />
                                <Avatar
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                    size="20"

                                />
                            </div>
                        </div>


                    </div>



                    {/* Avatar */}
                    <div className="flex justify-end">
                        <Avatar
                            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                            size="40"
                            round={true}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex flex-col p-2">
                        <div>
                            <div className="font-semibold text-l">Sinh nhật Nguyễn Dương Thụ</div>
                            <div className="flex space-x-1">
                                <Avatar
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                    size="20"

                                />
                                <Avatar
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                    size="20"

                                />
                                <Avatar
                                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                                    size="20"

                                />
                            </div>
                        </div>


                    </div>



                    {/* Avatar */}
                    <div className="flex justify-end">
                        <Avatar
                            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                            size="40"
                            round={true}
                        />
                    </div>
                </div>

            </div>


        </div >
    );
}

export default SearchPage;
