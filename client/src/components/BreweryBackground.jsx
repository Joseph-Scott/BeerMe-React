import React, { Component } from "react";
import Background from '../img/bar.jpg';

const BreweryBackgroundImg = {
    width: '100vw',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'auto 100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    overflow: 'hidden',
    marginTop: '-100px'
  };
  
export default BreweryBackgroundImg;