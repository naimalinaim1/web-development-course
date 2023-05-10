import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  const marks = [
    { id: 1, name: "Adam", math: 85, physics: 75, chemistry: 80 },
    { id: 2, name: "Bella", math: 70, physics: 80, chemistry: 75 },
    { id: 3, name: "Charlie", math: 92, physics: 85, chemistry: 90 },
    { id: 4, name: "David", math: 80, physics: 70, chemistry: 85 },
    { id: 5, name: "Emily", math: 78, physics: 82, chemistry: 79 },
    { id: 6, name: "Fiona", math: 88, physics: 90, chemistry: 87 },
    { id: 7, name: "George", math: 92, physics: 88, chemistry: 95 },
    { id: 8, name: "Hannah", math: 85, physics: 82, chemistry: 80 },
    { id: 9, name: "Isabella", math: 75, physics: 78, chemistry: 72 },
    { id: 10, name: "Jake", math: 90, physics: 92, chemistry: 88 },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <LineChart width={900} height={300} data={marks}>
        <Line dataKey="physics" />
        <Line dataKey="math" stroke="#8884d8" />
        <Line dataKey="chemistry" stroke="#EE55c4" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Dashboard;
