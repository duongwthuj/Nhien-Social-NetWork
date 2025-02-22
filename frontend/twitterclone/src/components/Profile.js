import React from "react";
import Avatar from "react-avatar";

const Profile = () => {
  return (
    <div className="w-[50%] border-l border-r borlder-gray-300">
      {/* Profile Header */}
      <div className="flex items-start gap-6 p-4 border-b space-x-6">
        {/* Avatar */}
        <Avatar
          src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/472989512_1651118499176427_2891168160856902537_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4hrTpVYLa5JBc4hD3hg_j69Arnnv--bHr0Cuee_75sVooeinYV3KsPr-Ib0gdA43fjEos2hjhlZ4hMEMDgWFD&_nc_ohc=QbkfyF3Y2k0Q7kNvgGqhIr5&_nc_oc=AdjHjrAXyaZWII_dbViKJHYibRb-XipRNSOzBXNLk_qwWuLwXhIUPl8wc7Rtx-dnqEU&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AQjMS2fMaS3Cp8dygb9ZuXn&oh=00_AYC9ulZoFfzaINasK83IGR1EUrP-X_5L6YrFydx2lbiuOw&oe=67BA3273"
          size="200"
          round={true}
        />

        <div className="px-4 space-y-4 py-6">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">duongwthuj</h2>
              <button className="px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-200 ml-4">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="flex gap-6 text-gray-600 text-sm">
            <span>0 Posts</span>
            <span>66 Following</span>
            <span>40 Followers</span>
          </div>

          <div className="text-lg font-semibold leading-loose">Dương Thụ</div>

          <div className= "text-sm ">Too good at goodbye</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
