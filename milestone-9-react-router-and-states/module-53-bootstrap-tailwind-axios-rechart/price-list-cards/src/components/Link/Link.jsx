import React from "react";

const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <li className="mr-12 hover:bg-green-700">
      <a href={path}>{name}</a>
    </li>
  );
};

export default Link;
