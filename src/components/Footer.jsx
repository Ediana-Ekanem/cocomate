import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" bg-brown">
        <div className="flex container text-white justify-evenly py-14 mx-auto leading-8 gap-10 sm:px-2">
          <div>
            <p>4517 Washington Ave</p>
            <p>AManchester, Kentucky </p>
            <p>39495</p>
          </div>
          <div className="text-left">
            <h4 className="font-bold ">Quick links</h4>
            <p>Gallery</p>
            <p>About us</p>
            <p>Buy online</p>
          </div>
          <div className="text-left">
            <h4 className="font-bold">Policy</h4>
            <p>Terms & conditions</p>
            <p>Privacy policy</p>
          </div>

          <div className=" text-left">
            <h4 className="font-bold  ">Social</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIN</p>
          </div>
        </div>
        <p className="text-white text-sm pb-5">
          Copright &copy;2022 cocomate. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
