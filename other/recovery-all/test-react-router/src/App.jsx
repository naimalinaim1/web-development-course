import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  );
}

export default App;
