import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Feature2 from '../components/Feature2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Feature2 heading="ABOUT." text="I'm a friendly programmer from Nebraska." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About