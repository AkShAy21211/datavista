import React, { useState, useEffect } from "react";
import TileView from "../tile/TileView";
import image from "../../assets/user.png";
import CardSkelton from "../skelton/CardSkletop";
import { FaEye } from "react-icons/fa";

const Card = ({ user, isLoading }) => {
  const [viewTile, setViewTile] = useState(false);

  const handleClose = () => {
    setViewTile(false);
  };

  return (
    <>
      {isLoading ? (
        <CardSkelton />
      ) : (
        <div
          onClick={() => setViewTile(true)}
          className="cursor-pointer hover:shadow-lg sm:p-5 md:p-0 rounded-lg  flex flex-col justify-between"
        >
          <figure>
            <img
              className="h-62 sm:h-32 w-full rounded-md"
              src={image}
              alt="User Avatar"
            />
            <div>
              <p className="text-center  mt-3">
                {user.name}
              </p>
            </div>
          </figure>
          {/* <FaEye onClick={() => setViewTile(true)}
            className="text-center text-blue-300 mb-5 w-full" /> */}
        </div>
      )}
      {viewTile && <TileView onClose={handleClose} user={user} />}
    </>
  );
};

export default Card;
