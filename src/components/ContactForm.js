import './ContactForm.css';
import React from 'react';

const ContactForm = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Enter your message here' />
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm;