import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PhoneBar = () => {
  const [phones, setPhones] = useState([]);

  // useEffect(() => {
  //   fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
  //     .then((res) => res.json())
  //     .then((data) => setPhones(data.data));
  // }, []);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phonesData = loadedData.map((phone) => {
          const price = Number(phone.slug.split("-")[1]);
          const phoneInfo = {
            name: phone.phone_name,
            price: price,
          };
          return phoneInfo;
        });
        setPhones(phonesData);
      });
  }, []);

  return (
    <div>
      <BarChart width={900} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis dataKey="price" />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default PhoneBar;
