import React, { useState } from "react";
import microsoft from "../assets/Images/microsoft(1).png";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { PiShoppingCartThin } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavItems = (
    <>
      <li className="lg:border-none border-b border-gray-200 pb-5 lg:pb-0">
        <a className="hover:border-b-2 lg:text-black text-gray-800 hover:border-black hover:pb-0 text-sm" href="/">
          Microsoft 365
        </a>
      </li>
      <li className="lg:border-none border-b border-gray-200 pb-5 lg:pb-0">
        <a className="hover:border-b-2 lg:text-black text-gray-800 hover:border-black hover:pb-0 text-sm" href="/">
          Teams
        </a>
      </li>
      <li className="lg:border-none border-b border-gray-200 pb-5 lg:pb-0">
        <a className="hover:border-b-2 lg:text-black text-gray-800 hover:border-black hover:pb-0 text-sm" href="/">
          Copilot
        </a>
      </li>
      <li className="lg:border-none border-b border-gray-200 pb-5 lg:pb-0">
        <a className="hover:border-b-2 lg:text-black text-gray-800 hover:border-black hover:pb-0 text-sm" href="/">
          Windows
        </a>
      </li>
      <li className="lg:border-none border-b border-gray-200 pb-5 lg:pb-0">
        <a className="hover:border-b-2 lg:text-black text-gray-800 hover:border-black hover:pb-0 text-sm" href="/">
          Surface
        </a>
      </li>
      <li className="lg:border-none border-b border-gray-200 pb-5 lg:pb-0">
        <a className="hover:border-b-2 lg:text-black text-gray-800 hover:border-black hover:pb-0 text-sm" href="/">
          Xbox
        </a>
      </li>
      <li className="lg:border-none">
        <a className="hover:border-b-2 lg:text-black text-gray-800 hover:border-black hover:pb-0 text-sm" href="/">
          Support
        </a>
      </li>
    </>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between mx-16 font-thin text-sm p-1 mb-1">
        <div className="flex space-x-6 items-center">
          <img className="h-[42px] w-[120px] object-cover" src={microsoft} alt="Microsoft" />
          <ul className="list-none flex space-x-5 items-center">{NavItems}</ul>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex">
            <div className="mt-[4px] hover:border-b-2 hover:border-black hover:pb-0 ">
              All Microsoft{" "}
            </div>
            <div>
              <FaChevronDown className="mt-[11px] mx-1 text-[9px] " />
            </div>
          </div>
          <div className="relative group">
            <LiaSearchSolid className="text-lg" />
            <span className="absolute z-10 right-0 bottom-[-28px] bg-white text-black text-xs px-3 py-1 border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Search Microsoft.com
            </span>
          </div>
          <div className="relative group">
            <PiShoppingCartThin className="text-lg" />
            <span className="absolute z-10 right-0 bottom-[-28px] bg-white text-black text-xs px-3 py-1 border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              0 items in Shopping cart
            </span>
          </div>
          <div className="relative group">
            <Link to="/signIn" >
            <GoPerson className="text-3xl border border-black rounded-full p-1" />
            </Link>
            <span className="absolute z-10 right-0 bottom-[-28px] bg-white text-black text-xs px-3 py-1 border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Sign in to your account
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between px-4 py-2 items-center">
        <div className="flex items-center space-x-5">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="font-thin text-xl" />
            ) : (
              <RxHamburgerMenu className="text-xl" />
            )}
          </button>
          <LiaSearchSolid className="text-xl cursor-pointer" />
        </div>
        <img className="h-[42px] w-[120px] object-cover" src={microsoft} alt="Microsoft" />
        <div className="flex space-x-8 items-center">
          <PiShoppingCartThin className="text-xl cursor-pointer" />
          <Link to="SignIn">
          <GoPerson className="text-3xl border border-black rounded-full p-1 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="z-20 lg:hidden bg-[#f2f2f2] absolute top-14 left-0 w-full shadow-md p-4">
          <ul className="flex flex-col space-y-3">{NavItems}</ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

