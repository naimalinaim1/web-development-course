import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
