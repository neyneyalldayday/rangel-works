import React from 'react'
import { Button } from '../ButtonElements';
import "./AboutSarah.css"; 

const AboutSarah = () => {
    return (
        <div className="about-container">
        <h1>About me</h1>
        <p>life n stuff</p>                      
        <div className="hero-btns">
       <Button fontBig big primary>Reach out</Button>
        </div>
    </div>
    )
}

export default AboutSarah

