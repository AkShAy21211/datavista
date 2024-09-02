import React, { useState } from "react";
import image from "../../assets/user.png";
import { IoCloseCircleOutline, IoMenuOutline } from "react-icons/io5";
import DetailedUserModal from "../modal/DetailedUserModal";
import Options from "../miscellaneous/Options";

const TileView = ({ user, onClose }) => {
  const [viewModal, setViewModal] = useState(false);
  const [showOptions, setShowOptions] = useState(null); // State to track which item shows options

  const handleClose = () => {
    setViewModal(false);
  };

  const handleOptionsToggle = (item) => {
    setShowOptions((prev) => (prev === item ? null : item)); // Toggle options for the clicked item
  };

  // Function to open the modal
  const openModal = () => {
    setViewModal(true);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="modal-box relative">
          <IoCloseCircleOutline
            className="fixed cursor-pointer text-black right-3 top-3"
            size={30}
            onClick={onClose}
          />
          <div className="grid grid-cols-2 gap-5 m-3">
            {/* Image Section */}
            <div className="b flex flex-col relative">
              <p className="py-4 font-bold flex items-center justify-between">
                Image
                <IoMenuOutline
                  className="cursor-pointer relative z-10"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents triggering parent click event
                    handleOptionsToggle("image");
                  }} 
                />
              </p>
              {showOptions === "image" && (
                <div className="absolute top-0 right-0">
                  <Options onClose={handleOptionsToggle} />
                </div>
              )}
              <img
                onClick={openModal}
                className="bg-white rounded-md cursor-pointer"
                src={image}
                alt="User"
              />

              {/* Name Section */}
              <div
                onClick={(e) => {
                  if (!showOptions) openModal(); // Open modal only if options are not shown
                }}
                className="mt-5 bg-white px-3 cursor-pointer rounded-md"
              >
                <p className="py-4 font-bold flex items-center justify-between relative">
                  Name
                  <IoMenuOutline
                    className="cursor-pointer relative z-10"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents triggering parent click event
                      handleOptionsToggle("name");
                    }} 
                  />
                  {showOptions === "name" && (
                    <div className="absolute top-0 right-0">
                      <Options onClose={handleOptionsToggle} />
                    </div>
                  )}
                </p>
                <p className="py-2">{user.name}</p>
              </div>
            </div>

            {/* Email, Website, Phone Sections */}
            <div className="flex flex-col gap-5">
          
              <div
                onClick={(e) => {
                  if (!showOptions) openModal(); // Open modal only if options are not shown
                }}
                className="bg-white px-3 rounded-md cursor-pointer relative"
              >
                <p className="py-4 font-bold flex items-center justify-between">
                  Email
                  <IoMenuOutline
                    className="cursor-pointer relative z-10"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents triggering parent click event
                      handleOptionsToggle("email");
                    }} 
                  />
                </p>
                {showOptions === "email" && (
                  <div className="absolute top-0 right-0">
                    <Options onClose={handleOptionsToggle} />
                  </div>
                )}
                <p className="py-2">{user.email}</p>
              </div>

              {/* Website Section */}
              <div
                onClick={(e) => {
                  if (!showOptions) openModal(); // Open modal only if options are not shown
                }}
                className="bg-white px-3 rounded-md cursor-pointer relative"
              >
                <p className="py-4 font-bold flex items-center justify-between">
                  Website
                  <IoMenuOutline
                    className="cursor-pointer relative z-10"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents triggering parent click event
                      handleOptionsToggle("website");
                    }} 
                  />
                </p>
                {showOptions === "website" && (
                  <div className="absolute top-0 right-0">
                    <Options onClose={handleOptionsToggle} />
                  </div>
                )}
                <p className="py-2 text-blue-500">{user.website}</p>
              </div>

              {/* Phone Section */}
              <div
                onClick={(e) => {
                  if (!showOptions) openModal(); // Open modal only if options are not shown
                }}
                className="bg-white px-3 rounded-md cursor-pointer relative"
              >
                <p className="py-4 font-bold flex items-center justify-between">
                  Phone
                  <IoMenuOutline
                    className="cursor-pointer relative z-10"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents triggering parent click event
                      handleOptionsToggle("phone");
                    }} 
                  />
                </p>
                {showOptions === "phone" && (
                  <div className="absolute top-0 right-0">
                    <Options onClose={handleOptionsToggle} />
                  </div>
                )}
                <p className="py-2">{user.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {viewModal && <DetailedUserModal onClose={handleClose} user={user} />}
    </>
  );
};

export default TileView;
