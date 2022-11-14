import React from "react";
import img5 from "../Assets/Rectangle 5.png";
import img8 from "../Assets/Rectangle 7.png";
import img6 from "../Assets/Rectangle 6.png";
import img7 from "../Assets/Rectangle 6 (1).png";

const Contact = () => {
  return (
    <div className="bg-lightBrown ">
      <div className="flex  py-20 px-40 gap-10 container">
        <div>
          <div className=" flex gap-5">
            <div>
              <div className=" pt-[60px] h-72 w-40  ">
                <img
                  src={img8}
                  alt="img-5"
                  className="w-[100%] h-[100%] object-fill"
                />
              </div>
              <div className="pt-5 w-40 h-36">
                <img
                  src={img5}
                  alt="img-8"
                  className="w-[100%] h-[100%] object-fill"
                />
              </div>
            </div>
            <div>
              <div className="pb-10 gap-5 ">
                <div className=" h-48 w-32 ">
                  <img
                    src={img7}
                    alt="img-6"
                    className="w-[100%] h-[100%] object-fill"
                  />
                </div>
                <div className="object-fill pt-5 w-32  h-52 ">
                  <img
                    src={img6}
                    alt="img-7"
                    className="w-[100%] h-[100%] object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-lightBrown lg:col-span-3 lg:p-3 w-[600px] ">
            <div className="text-left pl-12 mb-7">
              <h1 className="text-darkBlue font-bold text-3xl mb-3">
                Contact us
              </h1>
              <p className="text-sm">Our team would love to hear from you!</p>
            </div>

            <form action="" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <label className="sr-only" for="firstName">
                    First Name
                  </label>
                  <input
                    className=" w-4/6  border-gray-200 p-3 text-sm"
                    placeholder="First name"
                    type="text"
                    id="fname"
                  />
                </div>
                <div>
                  <label className="sr-only" for="lname">
                    Last Name
                  </label>
                  <input
                    className=" w-4/6 border-gray-200 p-3 text-sm "
                    placeholder="Last name"
                    type="text"
                    id="lname"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" for="email">
                  Email
                </label>
                <input
                  className="w-10/12 border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" for="message">
                  Message
                </label>
                <textarea
                  className="w-10/12 border-gray-200 p-3 text-sm h-32"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex  items-center justify-center bg-brown px-[185px] py-2 text-white sm:w-auto"
                >
                  <span className="font-medium"> Send Messsage </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    // DIVVIDE

    // <div className="bg-lightBrown">
    //   <div className="">
    //     <section className="bg-lightBrown">
    //       <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    //         <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
    //           <div className=" flex  ">
    //             {/* left flex */}
    //             <div className=" pb-2">
    //               <div className="w-[100%] pb-5">
    //                 <h1 className="text-brown text-4xl font-bold">1</h1>
    //                 <h3 className="font-bold text-lg">Mission</h3>
    //                 <p className="text-base">Promoting a healthy environment</p>
    //               </div>
    //               <div className=" w-[100%]">
    //                 <h1 className="text-brown text-4xl font-bold">3</h1>
    //                 <h3 className="font-bold text-lg">Vision</h3>
    //                 <p className="text-base">
    //                   The great experience we got through innovation.
    //                 </p>
    //               </div>
    //             </div>
    //             {/* right flex */}
    //             <div className=" ">
    //               <div className="w-[60%]  pb-5">
    //                 <h1 className="text-brown text-4xl font-bold">2</h1>
    //                 <h3 className="font-bold text-lg ">Motivation</h3>
    //                 <p className="text-base">
    //                   The great experience we got through innovation
    //                 </p>
    //               </div>

    //               <div className="w-[60%] ">
    //                 <h1 className=" text-brown text-4xl font-bold">4</h1>
    //                 <h3 className="font-bold text-lg">Goal</h3>
    //                 <p className="text-base">
    //                   To protect the environment and help in providing healthy
    //                   breathing air and also create jobs to the youths
    //                 </p>
    //               </div>
    //             </div>
    //           </div>

    //           <div className=" bg-lightBrown  lg:col-span-3 lg:p-12">
    //             <form action="" className="space-y-4">
    //               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
    //                 <div>
    //                   <label className="sr-only" for="firstName">
    //                     First Name
    //                   </label>
    //                   <input
    //                     className=" w-4/6  border-gray-200 p-3 text-sm"
    //                     placeholder="First name"
    //                     type="text"
    //                     id="fname"
    //                   />
    //                 </div>
    //                 <div>
    //                   <label className="sr-only" for="lname">
    //                     Last Name
    //                   </label>
    //                   <input
    //                     className=" w-4/6 border-gray-200 p-3 text-sm"
    //                     placeholder="Last name"
    //                     type="text"
    //                     id="lname"
    //                   />
    //                 </div>
    //               </div>
    //               <div>
    //                 <label className="sr-only" for="email">
    //                   Email
    //                 </label>
    //                 <input
    //                   className="w-10/12 border-gray-200 p-3 text-sm"
    //                   placeholder="Email address"
    //                   type="email"
    //                   id="email"
    //                 />
    //               </div>

    //               <div>
    //                 <label className="sr-only" for="message">
    //                   Message
    //                 </label>
    //                 <textarea
    //                   className="w-10/12 border-gray-200 p-3 text-sm"
    //                   placeholder="Message"
    //                   rows="8"
    //                   id="message"
    //                 ></textarea>
    //               </div>

    //               <div className="mt-4">
    //                 <button
    //                   type="submit"
    //                   className="inline-flex w-full items-center justify-center bg-brown px-[185px] py-2 text-white sm:w-auto"
    //                 >
    //                   <span className="font-medium"> Send Messsage </span>
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
};

export default Contact;
