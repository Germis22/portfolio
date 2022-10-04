/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import web1 from "../public/P1-1.png";
import web2 from "../public/P2-1.png";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiArduino,
  SiStyledcomponents,
} from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap dark:text-white text-gray-800 font-semibold">
        <div className="basis-1/3 flex-1 shadow-lg text-center rounded-lg">
          <Image
            className="rounded-lg object-fill"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web1}
            alt="web1"
          />
          <h1 className="mt-5">Medical Record Web</h1>
          <div className="flex justify-center p-5 text-gray-500">
            <SiJavascript className="text-3xl mx-3" />
            <SiReact className="text-3xl mx-3" />
            <SiVite className="text-3xl mx-3" />
            <SiFirebase className="text-3xl mx-3" />
            <SiTailwindcss className="text-3xl mx-3" />
          </div>
        </div>
        <div className="basis-1/3 flex-1 shadow-lg text-center rounded-lg">
          <Image
            className="rounded-lg object-fill"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web2}
            alt="web2"
          />
          <h1 className="mt-5">Public Transport App</h1>
          <div className="flex justify-center p-5 text-gray-500">
            <SiJavascript className="text-3xl mx-3" />
            <SiReact className="text-3xl mx-3" />
            <SiFirebase className="text-3xl mx-3" />
            <SiArduino className="text-3xl mx-3" />
            <SiStyledcomponents className="text-4xl mx-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
