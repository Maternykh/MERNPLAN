import React from "react";
import Search from "./Search";
import { TbBell } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
const Account: React.FC = () => {
  return (
    <div className=" justify-between xl:w-1/3 w-full bg-white rounded-xl xl:rounded-full p-2 flex flex-wrap">
      <Search />
      <div className=" ml-3 xl:ml-2 w-14 h-11 xl:h-14 text-2xl rounded-xl xl:rounded-full bg-gray-200  flex justify-center items-center">
        <TbBell />
        {/* <TbBellPlus /> */}
      </div>
      <div className=" ml-3 xl:ml-2 w-14 h-11 xl:h-14 text-2xl rounded-xl xl:rounded-full bg-gray-200  flex justify-center items-center">
        <FaRegUserCircle />
      </div>
    </div>
  );
};

export default Account;
