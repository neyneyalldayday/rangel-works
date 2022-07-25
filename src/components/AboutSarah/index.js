import React from 'react'
import { Button } from '../ButtonElements';
import { Link } from 'gatsby'
import "./AboutSarah.css"; 

const AboutSarah = () => {
    return (
        <div className="about-container">
        <h1>About me</h1>
        <p>I turn Clay</p>                      
        <p>into art</p>                      
        <div className="hero-btns">
       <Button fontBig big primary as={Link} to="/email">Contact me!</Button>
        </div>
    </div>
    )
}

export default AboutSarah

