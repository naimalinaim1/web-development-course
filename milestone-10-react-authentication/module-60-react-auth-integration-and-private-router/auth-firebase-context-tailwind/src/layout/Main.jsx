import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
  return (
    <>
      <Header />
      <div className="w-[96%] max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
