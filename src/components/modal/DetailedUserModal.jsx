import React from "react";
import image from "../../assets/user.png";
import { IoCloseCircleOutline } from "react-icons/io5";

const DetailedUserModal = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="modal-box  relative">
        <IoCloseCircleOutline
          className="absolute cursor-pointer text-black right-0 top-0 m-4"
          size={30}
          onClick={onClose}
        />
        <div className="grid grid-cols-2 gap-5 m-3">
          {/* Left Column with Image and Basic Info */}
          <div className="flex flex-col">
            <img
              className="bg-white rounded-md cursor-pointer"
              src={image}
              alt="User"
            />

            <div className="mt-5 bg-white px-3 py-4 rounded-md cursor-pointer">
              <p className="font-bold">Name</p>
              <p className="py-2">{user.name}</p>
            </div>

            <div className="mt-2 bg-white px-3 py-4 rounded-md cursor-pointer">
              <p className="font-bold">Username</p>
              <p className="py-2">{user.username}</p>
            </div>

            <div className="mt-2 bg-white px-3 py-4 rounded-md cursor-pointer">
              <p className="font-bold">Email</p>
              <p className="py-2">{user.email}</p>
            </div>

            <div className="mt-2 bg-white px-3 py-4 rounded-md cursor-pointer">
              <p className="font-bold">Phone</p>
              <p className="py-2">{user.phone}</p>
            </div>

            <div className="mt-2 bg-white px-3 py-4 rounded-md cursor-pointer">
              <p className="font-bold">Website</p>
              <p className="py-2 text-blue-500">{user.website}</p>
            </div>
          </div>

          {/* Right Column with Address and Company Info */}
          <div className="flex flex-col gap-5">
            <div className="bg-white px-3 py-4 rounded-md cursor-pointer">
              <p className="font-bold">Address</p>
              <p className="py-2">{user.address.street}, {user.address.suite}</p>
              <p className="py-2">{user.address.city}, {user.address.zipcode}</p>
            </div>

            <div className="bg-white px-3 py-4 rounded-md cursor-pointer">
              <p className="font-bold">Geo Location</p>
              <p className="py-2">Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
            </div>

            <div className="bg-white px-3 py-4 rounded-md cursor-pointer">
              <p className="font-bold">Company</p>
              <p className="py-2">{user.company.name}</p>
              <p className="py-2">{user.company.catchPhrase}</p>
              <p className="py-2">{user.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedUserModal;
