import React from "react";
import customerIMG from "../Assets/Image.png";
import musicIcon from "../Assets/musicIcon.png";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const Testimonial = () => {
  return (
    <div className=" bg-brown">
      <div className="container mx-auto">
        <h1 className="text-white text-left font-extrabold text-4xl py-10">
          What do customers say...
        </h1>
        <div className="lg:flex pb-[50px]">
          <div className="w-[25%] m-auto sm:w-flex-col">
            <img src={customerIMG} alt="customer-img" />
          </div>
          <div className="w-[50%] m-auto">
            <div className="flex gap-1">
              <img src={musicIcon} alt="" />
              <img src={musicIcon} alt="" />
            </div>
            <h2 className="text-white text-left font-bold text-4xl">
              Amazing service
            </h2>
            <p
              className="text-left text-white pt-5 max-w-[80%] sm:p-0
            "
            >
              Since the online marketplace can be a scary place, the presence of
              customer reviews on an online store helps establish authenticity,
              confidence, and trust among shoppers.
            </p>
            <h3 className="text-left pt-5 font-bold text-offWhite">
              Wade Warren
            </h3>
            <p className="text-white text-left">Decorator</p>
            <div className="flex justify-end pt-10 gap-1 pl-100">
              <div>
                <IoIosArrowDropleft color="#FFFFFF99" size={25} />
              </div>
              <div>
                <IoIosArrowDropright color="#FFFFFF99" size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
