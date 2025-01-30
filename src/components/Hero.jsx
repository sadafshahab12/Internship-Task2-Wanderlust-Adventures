import React from "react";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="relative w-full sm:h-screen xs:h-[80vh] h-[70vh] overflow-hidden font-opensans  ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10  flex items-center justify-center flex-col h-full sm:gap-7 gap-4 sm:p-5 p-2">
        <h1 className="lg:text-6xl sm:text-5xl xs:text-4xl xxs:text-3xl text-2xl  font-black text-white lg:w-[70%] w-full text-center text-shadow">
          Welcome to Wanderlust Adventures
        </h1>
        <p className="text-white sm:text-2xl xs:text-xl xxs:text-lg text-sm text-center text-shadow">
          Wanderlust Adventures – Chase Wonders, Create Memories!
        </p>
        <div className="border border-white p-1 rounded-full  relative xs:w-[80%] xxs:w-[90%] w-full ">
          <IoSearch className="absolute w-6 h-6  top-3.5 xs:left-10 left-5" />
          <input
            type="text"
            placeholder="Where do you want to go"
            className="bg-white  py-3 px-4 rounded-full text-center w-full  outline-none  text-sm placeholder:text-slate-400"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
    </div>
  );
};

export default Hero;
