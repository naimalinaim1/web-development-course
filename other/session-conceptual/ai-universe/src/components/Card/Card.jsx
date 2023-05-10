import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";

const Card = ({ showAll }) => {
  const [data, setData] = useState([]);
  const [uniqueId, setUniqueId] = useState(null);
  uniqueId && console.log(uniqueId);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const data = await res.json();
      setData(data.data.tools);
    };
    loadData();
  }, []);

  return (
    <div className=" mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {data.slice(0, showAll ? 6 : 12).map((singleData) => (
        <SingleData
          key={singleData.id}
          setUniqueId={setUniqueId}
          tool={singleData}
        />
      ))}
      <Modal />
    </div>
  );
};

export default Card;
