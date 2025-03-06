import { Link } from "react-router-dom";
import { CiHome, CiChat2, CiBellOn, CiUser, CiBookmark, CiLogout, CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

function LeftSidebar() {
    return (
        <div className="w-[291px] p-3 fixed left-0 top-0 h-full flex flex-col justify-between border-r border-gray-200 items-center">
            <div >
                {/* Logo - Bọc trong Link để chuyển hướng về home */}
                <Link to="/home">
                    <img
                        className="ml-10 w-[70px] cursor-pointer "
                        src="https://images-platform.99static.com//MzO1SotayLU5iqeWo6jbz24c6bE=/991x3126:1773x3908/fit-in/590x590/99designs-contests-attachments/156/156081/attachment_156081204"
                        alt="icon"
                    />
                </Link>

                {/* Menu Items */}
                <div className="space-y-2 mt-4">
                    <Link to="/home" className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-gray-200">
                        <CiHome size="24px" />
                        <span className="font-medium text-sm">Trang chủ</span>
                    </Link>

                    <Link to='/home/search'>
                        <div className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-gray-200">
                            <CiSearch size="24px" />
                            <span className="font-medium text-sm">Tìm kiếm</span>
                        </div>
                    </Link>

                    <Link to='/home/notifications'>
                        <div className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-gray-200">
                            <CiBellOn size="24px" />
                            <span className="font-medium text-sm">Thông báo</span>
                        </div>
                    </Link>

                    <Link to='/home/SavePage'>
                        <div className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-gray-200">
                            <CiBookmark size="24px" />
                            <span className="font-medium text-sm">Lưu</span>
                        </div>
                    </Link>


                    <Link to='/home/messages'>
                        <div className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-gray-200">
                            <CiChat2 size="24px" />
                            <span className="font-medium text-sm">Nhắn tin</span>
                        </div>
                    </Link>

                    <Link to="/home/profile" className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-gray-200">
                        <CiUser size="24px" />
                        <span className="font-medium text-sm">Cá nhân</span>
                    </Link>

                    <Link to="/" className="flex items-center space-x-3 px-3 py-2 rounded-3 hover:bg-gray-200">
                        <CiLogout size="24px" />
                        <span className="font-medium text-sm">Đăng xuất</span>
                    </Link>
                </div>

                {/* Button Đăng Bài */}
                <Link to='/home'>
                    <button className="w-48 mt-4 px-4 py-2 text-sm bg-[#00a991] rounded-full text-white font-semibold hover:bg-opacity-80">
                        Đăng bài
                    </button>
                </Link>


            </div>

            {/* User Info */}
            <Link to="/home/profile">
                <div className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-gray-200 w-full">
                    <Avatar
                        src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
                        size="32"
                        round
                    />
                    <div>
                        <h1 className="font-medium text-gray-600 text-sm">Nguyễn Dương Thụ</h1>
                        <p className="text-gray-500 text-xs">@duongwthuj</p>
                    </div>
                </div>
            </Link>
        </div >
    );
}

export default LeftSidebar;
