import React from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Options = ({ onClose }) => {
  return (
    <div className=" h-auto flex flex-col gap-4 mb-3 bg-gray-200 py-2 px-1 rounded-md w-auto  fixed mt-4  z-50  items-end">
      <IoMdCloseCircleOutline onClick={() => onClose(null)} />
      <FaPen />
      <FaTrash />
      <FaFlag />
    </div>
  );
};

export default Options;
