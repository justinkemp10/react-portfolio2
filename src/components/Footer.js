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
                        <p>Lincoln, NE</p>
                        <p>United States</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                531-220-6142</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                jkemp0790@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>Hi. My name is Justin Kemp. I'm a full stack developer currently looking for work! I enjoy mastering challenges and learning new techniques.</p>
                <div className='social'>
                <a href='https://www.linkedin.com/in/justinkemp10/' target='_blank' rel="noreferrer">
                    <FaLinkedin 
                        size={30}
                        style={{color:"#fff",
                        marginRight:"1rem"}} 
                    />
                </a>
                <a href='https://github.com/justinkemp10' target='_blank' rel="noreferrer">
                    <FaGithub 
                        size={30}
                        style={{color:"#fff",
                        marginRight:"1rem"}}  
                    />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer