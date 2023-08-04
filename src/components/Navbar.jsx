import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/products" },
    { name: "SERVICES", link: "/services" },
    { name: "ABOUT US", link: "/aboutus" },
  ];
  let [open,setOpen]=useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 position: absolute">
      <div className="bg-gradient-to-l from-violet-900 via-violet-400 to-blue-100 py-4 md:px-10 px-7 md:flex items-center justify-between">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-1">
             <a href="/">
              <img className="h-14 w-24" src="/favelogo.png" alt="Logo" />
            </a>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FaBars
            name={open ? "close" : "menu"}
            className="text-blue-500 font-bold mt-2"
          />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-390px]"
          } md:opacity-100 opacity-0`}
        >
          {Links.map((Link) => (
            <li
              key={Link.name}
              className="md:ml-8 text-md md:my-0  my-2 pt-4 mr-12"
            >
              <a
                href={Link.link}
                className="text-yellow-600 md:text-gray-200 font-bold hover:text-yellow-500 duration-200"
              >
                {Link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default Navbar
