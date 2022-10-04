import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiDownload } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl py-1 dark:text-white">Contact</h1>
      <div className="md:flex justify-center gap-20 pt-20 pb-44 text-gray-800 dark:text-white">
        <div className="text-center pb-10">
          <AiFillPhone className="inline-block text-2xl text-gray-500 mb-2 " />
          <h2 className="text-xl font-semibold">Phone</h2>
          <p className="text-lg">+591 76694369</p>
        </div>
        <div className="text-center pb-10">
          <IoLocationSharp className="inline-block text-2xl text-gray-500 mb-2" />
          <h2 className="text-xl font-semibold">Location</h2>
          <p className="text-lg">Santa Cruz, Bolivia</p>
        </div>
        <div className="text-center pb-10">
          <MdEmail className="inline-block text-2xl text-gray-500 mb-2" />
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-lg">Golpa22@gmail.com</p>
        </div>
        <div className="text-center pb-10 pt-6 ">
          <a href="CV-GermanPaz.pdf" download="CV-GermanPaz.pdf">
            <button className="inline-block bg-gray-500 pt-2 pb-1 px-4 rounded-xl text-white text-lg">
              Resume
                <BiDownload className="inline-block text-2xl ml-2 mb-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
