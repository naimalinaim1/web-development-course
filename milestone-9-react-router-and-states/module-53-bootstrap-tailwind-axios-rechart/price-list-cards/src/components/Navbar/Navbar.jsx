import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // route
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Services", path: "/services" },
  ];

  return (
    <nav className="relative bg-green-600 p-2">
      <span onClick={() => setOpen(!open)} className="md:hidden">
        {open ? (
          <XMarkIcon className="w-6 h-6 text-red-500" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-gray-500" />
        )}
      </span>
      <ul
        className={`md:flex md:static duration-500 bg-green-600 pl-8 pb-4 md:pb-0 absolute ${
          open ? "top-6" : "-top-56"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
