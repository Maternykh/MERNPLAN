import React from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import {
  setIsAuth,
  setUserEmail,
  setUserPasswordHash,
} from "../../Redux/Slice/registration";
import axios from "axios";

const SignIN: React.FC = () => {
  const { userEmail, userPasswordHash } = useAppSelector(
    (state: RootState) => state.userAuth
  );
  const dispatch = useAppDispatch();
  const OnCLickSubmit = () => {
    const add = {
      userEmail,
      userPasswordHash,
    };
    axios
      .post(`https://fullstack-plans-app-mern.onrender.com/auth/login`, add)
      .then(() => {
        dispatch(setIsAuth(true));
      });
  };
  return (
    <div className=" bg-white rounded-xl p-4 flex flex-col justify-between">
      <div>
        <div className=" text-gray-800 border-b-2 border-blue-600 w-24 text-2xl font-bold pb-1 mb-4">
          Sign-In
        </div>
        <div className=" text-xl font-bold text-gray-800">Welcome back</div>
        <div className=" text-gray-500 mb-3">
          Please sign into your account below
        </div>
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
      </div>
      <div
        onClick={() => OnCLickSubmit()}
        className=" hover:cursor-pointer flex justify-center p-2 rounded-md bg-blue-600 text-white text-xl"
      >
        Sign In
      </div>
    </div>
  );
};

export default SignIN;
