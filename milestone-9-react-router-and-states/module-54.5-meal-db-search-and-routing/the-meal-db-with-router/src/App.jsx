import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="w-[96%] max-w-[1440px] mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default App;
