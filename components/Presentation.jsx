/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import Perfil from "../public/IMG_4116.jpg"

const Presentation = () => {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        German Paz
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Software Engineer
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        I'm German, a software engineer from Bolivia. I'm passionate about Web
        and Mobile development. I love to learn new technologies and share my
        knowledge with others.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a
          href="https://github.com/Germis22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gpch22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.facebook.com/gpazchavez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </a>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
        <Image src={Perfil} layout="fill" objectFit="cover" alt="image" />
      </div>
    </div>
  );
};

export default Presentation;
