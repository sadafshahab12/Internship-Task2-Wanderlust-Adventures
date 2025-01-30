import React from "react";


const PagesHero = ({ videoSrc, heading, tagline, description, btnText }) => {
  return (
    <div className="relative w-full sm:h-screen xs:h-[80vh] h-[70vh] overflow-hidden font-opensans  ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="relative z-5  flex items-center justify-center flex-col h-full sm:gap-7 gap-4 sm:p-5 p-2">
        <h1 className="lg:text-6xl sm:text-5xl xs:text-4xl xxs:text-3xl text-2xl  font-black text-white lg:w-[80%] w-full text-center text-shadow leading-18">
          {heading}
        </h1>
        <div className="space-y-2.5">
          <p className="text-white sm:text-2xl xs:text-xl xxs:text-lg text-sm text-center text-shadow tracking-wider">
            {tagline}
          </p>
          <p className="text-white text-[14px] text-pretty w-[70%] mx-auto text-center">{description}</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
    </div>
  );
};

export default PagesHero;
