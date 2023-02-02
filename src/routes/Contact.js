import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Feature2 from '../components/Feature2';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Feature2 heading="CONTACT." text="Let's chat!" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact;