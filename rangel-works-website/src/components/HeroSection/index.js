import React from 'react';
import { Button } from '../ButtonElements';
import "./HeroSection.css"; 
import Video from '../video'

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>clay all day</h1>
            <p>check it out</p>
            <Video src='/herobackgroundedit.mp4' />                
            <div className="hero-btns">
           <Button fontBig big primary>Interested?</Button>
            </div>
        </div>
    )
  }

  export default HeroSection