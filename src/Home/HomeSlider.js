import React from 'react';
import styled from 'styled-components';

import Date from './Data'
import DateMap from './Datamap'

import DFrontAboutMe from './Images/Desktop/FrontAboutMe.jpg'
import DFrontProduct from './Images/Desktop/FrontProduct.jpg'
import DFrontPhoto from './Images/Desktop/FrontPhoto.jpg'
import DFrontMedia from './Images/Desktop/FrontMedia.jpg'

import MFrontAboutMe from './Images/Mobile/FrontAboutMe.jpg'
import MFrontProduct from './Images/Mobile/FrontProduct.jpg'
import MFrontPhoto from './Images/Mobile/FrontPhoto.jpg'
import MFrontMedia from './Images/Mobile/FrontMedia.jpg'

const Div = styled.div`
.main_img {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
  background-position: center center;
  z-index:9;
  opacity: 0;

  -webkit-animation: anime 24s 0s infinite;
  animation: anime 24s 0s infinite; }

  .main_img:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    background-image: url(${DFrontAboutMe});
  }

  .main_img:nth-of-type(2) {
    -webkit-animation-delay: 6s;
    animation-delay: 6s; 
    background-image: url(${DFrontProduct});
    }

   .main_img:nth-of-type(3) {
     -webkit-animation-delay: 12s;
     animation-delay: 12s;
     background-image: url(${DFrontPhoto});
    }

   .main_img:nth-of-type(4) {
     -webkit-animation-delay: 18s;
     animation-delay: 18s;
     background-image: url(${DFrontMedia});
    }

  @media screen and (max-width: 768px){
    .main_img {

    }

    .main_img:nth-of-type(1) {
    background-image: url(${MFrontAboutMe});
  }

  .main_img:nth-of-type(2) {
    background-image: url(${MFrontProduct});
    }

   .main_img:nth-of-type(3) {
     background-image: url(${MFrontPhoto});
    }

   .main_img:nth-of-type(4) {
     background-image: url(${MFrontMedia});
    }
  }

  @keyframes anime {
    0% {
        opacity: 0;
    }
    8% {
        opacity: 1;
    }
    17% {
        opacity: 1;
    }
    30% {
        opacity: 0;
         z-index:9;
    }
    100% { opacity: 0 }
}

.home_text{
  font-size: 10vh;
  z-index: 10;
  text-align:center;
  position: fixed;
  top: calc(50% - 35px);
  left: 70px;
  font-weight: 500;
}

@media screen and (max-width: 768px){
  .home_text{
    font-size: 7.5vh;
    left: 35px;
    color: #ffffff;
  }
}
`

const HomeSliderDesktop = () => {
  return(
    <Div>
      {Object.keys(Date).map(key => 
              <DateMap key={key} details={Date[key]} />
            )} 
    </Div>
  );
};

export default HomeSliderDesktop;
