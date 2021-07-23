import React from 'react';
import { Button } from '../ButtonElements';
import "./HeroSection.css"; 


function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Sarah Rangel Art</h1>
            <p>check it out</p>
            <video src='../../images/herobackgroundedit.mp4' />                
            <div className="hero-btns">
           <Button fontBig big primary>Interested?</Button>
            </div>
        </div>
    )
  }

  export default HeroSection