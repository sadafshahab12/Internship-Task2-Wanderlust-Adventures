import React from "react";
import FeaturedDestination from "../components/FeaturedDestination";
import PagesHero from "../components/ui/PagesHero";

const Destinations = () => {
  useEffect(() => {
    document.title = "Destinations | Wanderlust Adventure";
  });
  return (
    <>
      <PagesHero
        videoSrc={"/destination page bg.mp4"}
        heading={" Explore Breathtaking Destinations Around the World"}
        tagline={
          "✈️ Your Next Adventure Awaits – Discover, Explore, Experience!"
        }
        description={
          "From the romantic streets of Paris to the serene beaches of the Maldives and the majestic mountains of Skardu, find your perfect getaway. Whether you're seeking adventure, relaxation, or cultural exploration, we bring you the best destinations to fuel your wanderlust. Start your journey today!"
        }
      />
      <div>
        <FeaturedDestination />
      </div>
    </>
  );
};

export default Destinations;
