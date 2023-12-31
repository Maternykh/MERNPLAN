import React from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import {
  setIsAuth,
  setUserAvatar,
  setUserEmail,
  setUserPasswordHash,
} from "../../Redux/Slice/registration";
import axios from "axios";

const SignUP: React.FC = () => {
  const { userEmail, userPasswordHash, userAvatar } = useAppSelector(
    (state: RootState) => state.userAuth
  );
  const dispatch = useAppDispatch();
  const OnCLickSubmit = () => {
    const add = {
      userEmail,
      userPasswordHash,
      userAvatar,
    };
    axios
      .post(`https://fullstack-plans-app-mern.onrender.com/auth/register`, add)
      .then(() => {
        dispatch(setIsAuth(true));
      });
  };
  return (
    <div className=" bg-white rounded-xl p-4 xl:mb-0 mb-2">
      <div className=" text-gray-800 border-b-2 border-blue-600 w-24 text-2xl font-bold pb-1 mb-4">
        Sign-Up
      </div>
      <div className=" text-xl font-bold text-gray-800">Welcome</div>
      <div className=" text-gray-500 mb-3">Please Create in account below</div>
      <div className=" mb-2">
        <div className="text-gray-500 mb-1">Email address</div>
        <input
          onChange={(e) => dispatch(setUserEmail(e.target.value))}
          value={userEmail}
          type="email"
          className=" focus:border-blue-600 border-2 rounded-xl border-gray-200 px-4 py-2 outline-none w-full"
        />
      </div>
      <div className=" mb-2">
        <div className="text-gray-500 mb-1">Password</div>
        <input
          onChange={(e) => dispatch(setUserPasswordHash(e.target.value))}
          value={userPasswordHash}
          type="password"
          className=" focus:border-blue-600 border-2 rounded-xl border-gray-200 px-4 py-2 outline-none w-full"
        />
      </div>
      <div className=" mb-2">
        <div className="text-gray-500 mb-1">Add url avatar (optional)</div>
        <input
          onChange={(e) => dispatch(setUserAvatar(e.target.value))}
          value={userAvatar}
          type="text"
          className=" focus:border-blue-600 border-2 rounded-xl border-gray-200 px-4 py-2 outline-none w-full"
        />
      </div>
      <div
        onClick={() => OnCLickSubmit()}
        className=" hover:cursor-pointer flex justify-center p-2 rounded-md bg-blue-600 text-white text-xl"
      >
        Sign Up
      </div>
    </div>
  );
};

export default SignUP;
