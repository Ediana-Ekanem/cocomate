import React from "react";
import arrow from "../Assets/Arrow 07.png";
import heroIMG from "../Assets/Rectangle 10.png";
import { CiSearch } from "react-icons/ci";
const Hero = () => {
  return (
    <div>
      <div className="bg-lightBrown p-20">
        <div className="container flex flex-col  items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row ">
          <div className="flex flex-col  md:w-1/1">
            <h1 className=" text-4xl  text-darkBlue text-bold font-semibold xl:text-6xl  ">
              Amazing coconut shell for your decoration
            </h1>

            <p className="text-gray mt-10 ">
              Cocomate is here to give you an amazing products you'll love made
              from Coconut Shell!
            </p>
          </div>
          <div className=" hidden  lg:flex flex-col  md:w-1/4 h-[200px] w-[197px] relative">
            <img src={arrow} alt="arrow" className="w-[100% h-[100%]  " />

            <div className="absolute top-60 right-40">
              <div className="relative">
                <input
                  className="mx-auto py-8 pl-10 pr-96 h-[55px] text-[12px] text-offgray"
                  type="text"
                  placeholder="Search your product "
                ></input>
                <div className=""></div>
                <CiSearch color="gray" className="absolute right-5  top-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={heroIMG} alt="hero-img" className="bg-contain bg-center" />
      </div>
    </div>
  );
};

export default Hero;
