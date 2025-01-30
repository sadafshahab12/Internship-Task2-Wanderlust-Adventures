import React from "react";
import { FaGlobeAsia, FaHeart } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { GiIsland } from "react-icons/gi";
import { MdBackpack, MdFamilyRestroom } from "react-icons/md";
import Button from "./ui/Button";
import PagesHero from "../components/ui/PagesHero";
const packages = [
  {
    name: "Honeymoon Getaway",
    price: "$1,999",
    description:
      "A romantic escape to paradise with luxury stays and intimate experiences.",
    icon: <FaHeart />,
    videoSrc: "/packagesoffer/p1.mp4",
  },
  {
    name: "Adventure Trails",
    price: "$1,499",
    description:
      "Thrill-seekers’ dream! Trek through mountains, rivers, and jungles.",
    icon: <FaMountainSun />,
    videoSrc: "/packagesoffer/p2.mp4",
  },
  {
    name: "Family Fun Package",
    price: "$2,499",
    description:
      "Enjoy a memorable family vacation with activities for all ages.",
    icon: <MdFamilyRestroom />,
    videoSrc: "/packagesoffer/p-3.mp4",
  },
  {
    name: "Luxury Island Retreat",
    price: "$3,999",
    description:
      "Indulge in a lavish island vacation with private villas and crystal-clear waters.",
    icon: <GiIsland />,
    videoSrc: "/packagesoffer/p4.mp4",
  },
  {
    name: "Cultural Exploration",
    price: "$1,299",
    description:
      "Immerse yourself in rich history and diverse traditions across famous landmarks.",
    icon: <FaGlobeAsia />,
    videoSrc: "/packagesoffer/p-5.mp4",
  },
  {
    name: "Solo Backpacking Adventure",
    price: "$999",
    description:
      "Explore new destinations freely with budget-friendly stays and group tours.",
    icon: <MdBackpack />,
    videoSrc: "/packagesoffer/p-6.mp4",
  },
];
const PackagesOffer = () => {
  return (
    <>
      <PagesHero
        heading={"Unforgettable Journeys, Exclusive Deals!"}
        tagline={
          "Discover exclusive travel packages for romance, adventure, luxury, and more!"
        }
        description={
          "Embark on a dream journey with our curated travel packages. Whether it's romance, adventure, or solo exploration, find the perfect deal and create unforgettable memories!"
        }
        videoSrc={"/packagevideo1.mp4"}
      />
      <div className=" font-opensans p-5 space-y-5">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center ">
          Packages and Offers
        </h1>
        <div className="space-y-8 ">
          {packages.map((packages, index) => (
            <div
              key={index}
              className={`grid sm:grid-cols-[2fr_3fr] xs:grid-cols-[1fr_2fr] grid-cols-1 shadow shadow-darkblue rounded-md bg-white `}
            >
              <div className={`sm:space-y-4 space-y-2 sm:p-5 p-3 grid grid-cols-1 xxs:grid-cols-[1fr_2fr] xs:grid-cols-1 gap-4 `}>
                <div className="sm:h-14 xs:h-10 h-full sm:w-14 xs:w-10 w-full  bg-mint-500 xxs:flex hidden items-center justify-center rounded-md sm:text-3xl xs:text-xl text-3xl  ">
                  {packages.icon}
                </div>
                <div className="sm:space-y-4 space-y-2">
                  <h1 className="md:text-2xl xs:text-xl text-lg font-bold ">
                    {packages.name}
                  </h1>
                  <p className="text-sm">{packages.price}</p>
                  <p className="md:text-sm xs:text-[12px] text-[10px]">
                    {packages.description}
                  </p>
                  <Button btnText="Book Now" />
                </div>
              </div>
              <div>
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full md:h-80 h-full  object-cover xs:rounded-tr-md  rounded-br-md xs:rounded-bl-none rounded-bl-md"
                >
                  <source src={packages.videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PackagesOffer;
