/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import reactLogo from "../public/react.svg";
import htmlLogo from "../public/html.png";
import tailwindLogo from "../public/tailwind.svg";
import firebaseLogo from "../public/firebase.svg";
import jsLogo from "../public/javascript.svg";
import cssLogo from "../public/css.png";
import githubLogo from "../public/github.png";
import bsLogo from "../public/bootstrap.png";

const Services = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a developer, I've used different{" "}
          <span className="text-teal-500">technologies</span> and{" "}
          <span className="text-teal-500">tools</span> to create several
          projects.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-700 dark:text-white flex-1">
          <Image src={jsLogo} width={100} height={100} alt="design" />
          <h3 className="text-lg font-medium pt-8 pb-2  ">JavaScript</h3>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image src={reactLogo} width={100} height={100} alt="code" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            React / React Native
          </h3>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image src={htmlLogo} width={100} height={100} alt="consulting" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Html</h3>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image src={cssLogo} width={100} height={100} alt="consulting" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Css</h3>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image src={firebaseLogo} width={100} height={100} alt="consulting" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Firebase</h3>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image src={githubLogo} width={100} height={100} alt="consulting" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Git / GitHub</h3>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image src={tailwindLogo} width={100} height={100} alt="consulting" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Tailwind</h3>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image src={bsLogo} width={100} height={100} alt="consulting" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Bootstrap</h3>
        </div>
      </div>
    </>
  );
};

export default Services;
