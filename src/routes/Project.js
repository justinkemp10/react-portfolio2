import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Feature2 from '../components/Feature2';
import Pricing from '../components/Pricing';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
      <Navbar />
      <Feature2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Project