import React from "react";
import SignIN from "../components/Registr/SignIN";
import SignUP from "../components/Registr/SignUP";

const Start: React.FC = () => {
  return (
    <div className=" bg-gray-200 p-2 xl:rounded-xl  ">
      <div className=" bg-white p-2 rounded-xl flex flex-col items-center  justify-center h-40 mb-2">
        <div className=" text-4xl font-bold my-2">Have a nice day,</div>
        <div className=" text-gray-400 text-center">
          fuel your days with the boundless enthusiasm of lifelong
        </div>
      </div>
      <div className=" xl:grid xl:grid-cols-2 xl:gap-2">
        <SignUP />
        <SignIN />
      </div>
    </div>
  );
};

export default Start;
