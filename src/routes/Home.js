import React from 'react'
import Navbar from '../components/Navbar';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Work from '../components/Work';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Feature />
      <Work />
      <Footer />
    </div>
  )
}

export default Home