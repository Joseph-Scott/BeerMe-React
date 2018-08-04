import React, { Component } from "react";
import Background from '../img/barrels.jpeg';

const HomeBackgroundImg = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    marginTop: '-100px'
  };
  
  export default HomeBackgroundImg;