import React from 'react';
import styled from 'styled-components';

import PhotoDate from './PhotoDate';
import PhotoDateMap from './PhotoDatemap'

import FrontPhoto from './Images/FrontPhoto.jpg';

//
const PhotoStyled = styled.div `
.FrontImage{
    width: 100vw;
    height: var(--FrontImage-Size);
    display: block;
    position: fixed;
    top: var(--Header-Size);
    right: 50%;
    transform: translate(50%, 0);
    background-image: url(${FrontPhoto});
    background-size: cover;
    background-position: center center;
  }

  .swiperwrapper{
    margin:  var(--FrontImage-Size) 0px 60px 0px;
  }
`

  const PhotoSliderDesktop = () => {
    return (
      <PhotoStyled>
        <div className='FrontImage'/>
        <div className="swipercontainer">
          <div className="swiperwrapper">
            <div className='Scroll'>
              <p>Scroll</p>
              <div className='Arrow'>
                <div/>
              </div>
            </div>
            {Object.keys(PhotoDate).map(key => 
              <PhotoDateMap key={key} details={PhotoDate[key]} />
            )} 
          </div>
        </div>
    </PhotoStyled>);
  };
  
  export default PhotoSliderDesktop;
