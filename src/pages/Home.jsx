import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import "../App.css"
import Testimonials from '../components/Testimonials'
const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedDestination/>
      <Testimonials/>
    </div>
  )
}

export default Home
