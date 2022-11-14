import React from "react";
import ProductProp from "./ProductProp";
import { IoIosArrowRoundForward } from "react-icons/io";
import stoolImg from "../Assets/Stool.png";

const Products = () => {
  return (
    <div className="bg-lightBrown py-32">
      <div className="flex  justify-evenly mx-28">
        <div>
          <div className=" bg-cardColor w-56 h-52 relative ">
            <ProductProp
              img={stoolImg}
              title="Purse"
              size="w-40 h-34 absolute  left-8 bottom-32"
              amount="200"
            />
          </div>
        </div>
        <div>
          <div className=" bg-cardColor w-56 h-52 relative">
            <ProductProp
              img={stoolImg}
              title="Purse"
              size="w-40 h-32   absolute  left-8 bottom-32 object-cover"
              amount="150"
            />
          </div>
        </div>

        <div>
          <div className=" bg-cardColor w-56 h-52 relative">
            <ProductProp
              img={stoolImg}
              title="Purse"
              size="w-38 h-48 absolute  left-4 bottom-28  "
              amount="300"
            />
          </div>
        </div>
        <div>
          <div className="bg-cardColor w-56 h-52 relative">
            <ProductProp
              img={stoolImg}
              title="Purse"
              size="w-44 h-40   absolute  left-6 bottom-32 "
              amount="300"
            />
          </div>
        </div>
      </div>

      <div className="flex  justify-evenly  mt-40 mx-28">
        <div>
          <div className=" bg-cardColor w-56 h-52 relative ">
            <ProductProp
              img={stoolImg}
              title="Purse"
              size="w-48 h-46   absolute  left-[16px] bottom-28 "
              amount="50"
            />
          </div>
        </div>
        <div>
          <div className="bg-cardColor w-56 h-52 relative">
            <ProductProp
              img={stoolImg}
              title="Purse"
              size="w-36 h-48   absolute  left-[40px] bottom-28 object-fill "
              amount="200"
            />
          </div>
        </div>
        <div>
          <div className="bg-cardColor w-56 h-52 relative">
            <ProductProp
              img={stoolImg}
              title="Purse"
              size="w-36 h-38   absolute  left-[40px] bottom-32 "
              amount="100"
            />
          </div>
        </div>
        <div>
          <div className="bg-cardColor w-56 h-52 relative">
            <ProductProp
              img={stoolImg}
              title="Purse"
              size="w-36 h-52   absolute  left-[40px] bottom-28 object-content"
              amount="80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
