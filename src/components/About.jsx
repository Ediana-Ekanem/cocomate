import React from "react";
import img5 from "../Assets/Rectangle 5.png";
import img8 from "../Assets/Rectangle 8.png";
import img6 from "../Assets/Rectangle 6.png";
import img7 from "../Assets/Rectangle 7.png";

const About = () => {
  return (
    <div className="bg-lightBrown">
      <div className="container text-left mx-auto pt-20 ">
        <h1 className="text-darkBlue font-bold text-4xl pb-5">About us</h1>
        <p className="text-sm">
          Upcycling of Coconut Shell waste into beautiful set of <br /> bowls
          and other interior decorations.
        </p>
        <div className="  flex ">
          <div className=" pt-20 pb-40 px-5 gap-5 flex justify-between ">
            {/* left flex */}
            <div className=" pb-2">
              <div className="w-[100%] pb-5">
                <h1 className="text-brown text-4xl font-bold">1</h1>
                <h3 className="font-bold text-lg">Mission</h3>
                <p className="text-base">Promoting a healthy environment</p>
              </div>
              <div className=" w-[100%]">
                <h1 className="text-brown text-4xl font-bold">3</h1>
                <h3 className="font-bold text-lg">Vision</h3>
                <p className="text-base">
                  The great experience we got through innovation.
                </p>
              </div>
            </div>
            {/* right flex */}
            <div className=" ">
              <div className="w-[60%] m-auto pb-5">
                <h1 className="text-brown text-4xl font-bold">2</h1>
                <h3 className="font-bold text-lg ">Motivation</h3>
                <p className="text-base">
                  The great experience we got through innovation
                </p>
              </div>

              <div className="w-[60%] m-auto">
                <h1 className=" text-brown text-4xl font-bold">4</h1>
                <h3 className="font-bold text-lg">Goal</h3>
                <p className="text-base">
                  To protect the environment and help in providing healthy
                  breathing air and also create jobs to the youths
                </p>
              </div>
            </div>
          </div>
          <div className=" flex gap-5">
            <div>
              <div className="object-cover pt-[60px] h-80  w-40 ">
                <img src={img5} alt="img-5" className="w-[100%] h-[100%]" />
              </div>
              <div className="object-cover pt-5 w-40  md:w-40 md:h-40">
                <img src={img8} alt="img-8" className="w-[100%] h-[100%]" />
              </div>
            </div>
            <div>
              <div className="pb-10 gap-5  ">
                <div className="object-cover h-100 w-40">
                  <img src={img6} alt="img-6" className="w-[100%] h-[100%]" />
                </div>
                <div className="object-cover pt-5  w-40">
                  <img src={img7} alt="img-7" className="w-[100%] h-[100%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
