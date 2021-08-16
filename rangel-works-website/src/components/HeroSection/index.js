import React from 'react';
import {Link} from 'gatsby';
import { Button } from '../ButtonElements';
import "./HeroSection.css";
import Video from '../../assets/videos/edit.mp4' 


function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Sarah Rangel Art</h1>
            <p>check it out</p>
            <video className="background-video">
                <source src={Video} type="video/mp4"  autoPlay loop muted playsInline />
            </video>                        
            <div className="hero-btns">
           <Button fontBig big primary as={Link} to="/works">Interested?</Button>
            </div>
        </div>
    )
  }

  export default HeroSection