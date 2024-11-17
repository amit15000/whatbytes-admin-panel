"use client";

import React from "react";
import { SiTicktick } from "react-icons/si";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const HomePage = () => {
  const placeholders = ["Please enter your email address", "you@example.com"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full h-full flex flex-col text-black gap-2 px-4 sm:px-20">
      <h1 className="sm:text-4xl text-2xl py-2 sm:py-8 text-center font-semibold">
        Discover WhatBytes
      </h1>
      <p className="w-full text-left">
        At WhatBytes, we seamlessly blend creativity with advanced technology to
        bring innovative ideas to life. We are committed to turning your vision
        into impactful digital solutions.
      </p>
      <p className="w-full text-left">
        Our goal is to empower businesses of all scales by leveraging
        state-of-the-art technology to foster growth, efficiency, and a lasting
        impact.
      </p>
      <div className="flex items-start flex-col gap-1 w-full text-justify">
        <p className="flex-center flex-row gap-2">
          <SiTicktick className="text-lg" />
          Agile and efficient development processes designed to adapt to market
          changes swiftly.
        </p>
        <p className="flex-center flex-row gap-2">
          <SiTicktick className="text-lg" />
          Customized strategies to maximize digital opportunities and achieve
          business goals.
        </p>
        <p className="flex-center flex-row gap-2">
          <SiTicktick className="text-lg" />
          Creating user-friendly designs that offer seamless and engaging
          experiences.
        </p>
      </div>
      <div className="flex flex-col py-4 gap-3 text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold">Contact Us</h1>
        <p className="pl-1">
          We’d love to hear from you! Share your email address below:
        </p>
        <div className="flex flex-col  items-start w-full">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
        <div className="flex flex-col gap-3 py-5 text-left">
          <p className="flex items-center flex-row gap-2">
            <FaLocationDot /> 357 Bay Street, Toronto, ON M5H 4A6, Canada
          </p>
          <p className="flex items-center flex-row gap-2">
            <FaLocationDot /> 235 Binnamangala, 2nd Floor, 13th Cross Road, 2nd
            Stage, Indiranagar, Bengaluru, Karnataka 560038, India
          </p>
          <p className="flex items-center flex-row gap-2">
            <MdEmail /> contact@whatbytes.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
