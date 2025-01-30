import React, { useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import "../App.css";
import Testimonials from "../components/Testimonials";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Wanderlust Adventure";
  });
  return (
    <div>
      <Hero />
      <FeaturedDestination />
      <Testimonials />
    </div>
  );
};

export default Home;
