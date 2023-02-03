import './AboutContent.css';
import React from 'react'
import { Link } from 'react-router-dom';
import ReactImg from '../assets/react-img.jpg';
import CodeImg from '../assets/code-img.jpg';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>I'm a full stack developer.</h1>
            <p>Currently looking for work!</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={CodeImg} className='img' alt='true'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={ReactImg} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;