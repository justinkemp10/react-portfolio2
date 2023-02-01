import './Feature.css';
import React from 'react'
import IntroImg from "../assets/bg-img.jpg";
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <div className='feature'>
        <div className='mask'>
            <img className='intro-img' 
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className='content'>
            <p>Hello, I'm Justin.</p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Feature;