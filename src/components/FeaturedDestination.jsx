import React from "react";
import { destinations } from "../data";
import Button from "./ui/Button";

const FeaturedDestination = () => {
  return (
    <div className="font-opensans p-5">
      <h1 className="sm:text-3xl xxs:text-xl text-lg font-bold text-center py-8">
        Feartured Destinations
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-shadesblue text-golden p-5 space-y-5 rounded-lg"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full lg:h-60 md:h-50 xxs:h-60 h-45 rounded-md shadow-md shadow-white hover:scale-110  transition-all ease-in duration-300"
              />
            </div>
            <h1 className="text-2xl font-bold">{destination.name}</h1>
            <p className="text-sm">{destination.description}</p>
            <Button btnText="view more" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
