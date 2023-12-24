import React from "react";
import { FcPlanner } from "react-icons/fc";
import NavBar from "./NavBar";
import Account from "./Account";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <div className=" flex flex-wrap justify-between mb-2">
      <div className=" xl:mb-0 mb-2 xl:w-min w-full text-xl font-bold bg-white flex items-center justify-center xl:px-7 py-3  rounded-full">
        <FcPlanner className=" text-4xl mr-3 flex items-center justify-center" />
        fitplan
      </div>
      <NavBar />
      <Navigation />
      <Account />
    </div>
  );
};

export default Header;
