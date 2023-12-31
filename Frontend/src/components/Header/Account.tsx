import React from "react";
import Search from "./Search";
const Account: React.FC = () => {
  return (
    <div className=" justify-between xl:w-1/3 w-full bg-white rounded-xl xl:rounded-full p-2 flex flex-wrap">
      <Search />
    </div>
  );
};

export default Account;
