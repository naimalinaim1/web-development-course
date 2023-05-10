import React, { useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

const App = () => {
  const [showAll, setShowAll] = useState(true);
  const hidden = showAll ? { display: "none" } : {};
  return (
    <>
      <Header />
      <Button>Sort By Date</Button>
      <Card showAll={showAll}></Card>
      {/* <span onClick={() => setShowAll(true)} style={hidden}>
        <Button>See More</Button>
      </span> */}
      \
      {showAll && (
        <span onClick={() => setShowAll(false)}>
          <Button>See More</Button>
        </span>
      )}
    </>
  );
};

export default App;
