import React from "react";
import Logo from "../Assets/Cocomate PNG 1 1.png";
import dropDown from "../Assets/dropDown.png";
const Navbar = () => {
  return (
    <div>
      {/* NavBar */}
      <nav className=" container mx-auto p-3 bg-white">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2 ">
            <img src={Logo} alt="Logo" className="h-10 w-40 object-contain " />
          </div>
          {/* Menu Items */}
          <div className=" hidden space-x-8 md:flex ">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <div className="flex gap-3 items-center">
              <a href="#">Product</a>
              <img src={dropDown} alt="dropDown-Icon" className="h-1 w-2" />
            </div>
            <div className="pl-20 ">
              <a href="#">Contact</a>

              {/* Button */}

              <a href="" className="   text-white bg-brown ml-4  py-2 px-2">
                Buy online
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
