import React from "react";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";
import Dashboard from "./components/Dashboard/Dashboard";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import Lottie from "lottie-react";
import reader from "./education.json";

const App = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-default">Hello from tailwind</h1>
      <PriceList />
      <Dashboard />
      <PhoneBar />
      <Lottie animationData={reader} loop={true} />
      <div className="flex justify-center items-center min-h-[calc(100vh-68px)]">
        <p className="text-7xl font-thin">L</p>
        <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin mt-4 border-blue-500"></div>
        <p className="text-7xl font-thin">addng...</p>
      </div>
    </>
  );
};

export default App;
