import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <div>{navigation.state === "loading" && "Loading"}</div>
      <Outlet />
    </>
  );
};

export default App;
