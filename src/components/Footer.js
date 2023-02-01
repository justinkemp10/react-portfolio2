import './Footer.css';
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>123 Housing Society</p>
                        <p>United States</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                888-888-8888</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                info@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>Hi. My name is Justin Kemp. I'm a full stack developer looking for work! I enjoy mastering challenges and learning new techniques.</p>
                <div className='social'>
                <FaLinkedin 
                    size={30}
                    style={{color:"#fff",
                     marginRight:"1rem"}} 
                />
                <FaGithub 
                    size={30}
                    style={{color:"#fff",
                     marginRight:"1rem"}} 
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer