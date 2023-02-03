import './ContactForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_beml4fj', 'template_0nv5qe8', form.current, 'ifuMqe645bvvfQz7m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type='text' name='user_name'></input>
            <label>Email</label>
            <input type='email' name='user_email'></input>
            <label>Subject</label>
            <input type='text' name='user_subject'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Enter your message here' name='message' />
            <button className='btn' type='submit' value='Send'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm;