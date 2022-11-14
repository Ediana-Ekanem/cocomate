import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProductProp = ({ img, title, size, amount }) => {
  return (
    <div>
      <img src={img} alt="" className={` ${size}`} />
      <div className="pt-[130px]">
        <h6 className="text-left pl-5 font-bold text-lg ">{title}</h6>
        <div className="flex justify-between text-sm mx-5 mt-1 ">
          <p>${amount}</p>
          <IoIosArrowRoundForward color="brown" size={30} className="" />
        </div>
      </div>
    </div>
  );
};

export default ProductProp;
