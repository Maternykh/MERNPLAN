import React from "react";
import SignIN from "../components/Registr/SignIN";
import { Routes, Route } from "react-router-dom";
import SignUP from "../components/Registr/SignUP";
import Start from "./Start";

const Registration: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={`/`} element={<Start />}></Route>
        <Route path={`/signin`} element={<SignIN />}></Route>
        <Route path={`/signup`} element={<SignUP />}></Route>
      </Routes>
    </div>
  );
};

export default Registration;
