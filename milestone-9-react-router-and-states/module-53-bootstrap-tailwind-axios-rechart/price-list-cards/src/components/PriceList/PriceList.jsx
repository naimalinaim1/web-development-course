import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const loadPrices = async () => {
      const res = await fetch("prices.json");
      const data = await res.json();
      setPrices(data);
    };
    loadPrices();
  }, []);

  return (
    <div>
      <h1 className="py-4 text-5xl text-center text-lime-50 bg-zinc-950">
        Awesome Affordable Price
      </h1>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90%] max-w-[1440px] mx-auto">
        {prices.map((price) => (
          <PriceCard key={price.id} pricing={price} />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
