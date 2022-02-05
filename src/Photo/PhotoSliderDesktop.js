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

@media screen and (max-width: 768px){
  .FrontImage{
    height: calc(var(--FrontImage-Size)*0.6);
  }
}

.swipercontainer{
  width: 100vw;
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  display: block;
  position: fixed;
  top: var(--Header-Size);
  left: 0;
  overflow: hidden scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0;
}

.swipercontainer::-webkit-scrollbar {
    display:none;
}

.swiperwrapper{
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin:  var(--FrontImage-Size) 0px 60px 0px;
  background-color: #e8ebeb;
  padding-right: calc((100vw - (var(--Window-Size) + var(--GridMargin-Size) * 3))/2);
  padding-left: calc((100vw - (var(--Window-Size) + var(--GridMargin-Size) * 3))/2);
}

@media screen and (max-width: 1200px){
  .swiperwrapper{
    padding-right: calc((100vw - (var(--Window-Size) + var(--GridMargin-Size) * 2))/2);
    padding-left: calc((100vw - (var(--Window-Size) + var(--GridMargin-Size) * 2))/2);
    }
  }

@media screen and (max-width: 768px){
  .swiperwrapper{
    margin-top: calc(var(--FrontImage-Size)*0.6);
    padding-right: calc((100vw - (var(--Window-Size) + var(--GridMargin-Size) * 1))/2);
    padding-left: calc((100vw - (var(--Window-Size) + var(--GridMargin-Size) * 1))/2);
    }
  }

  //Scroll
.Scroll{
  width: 100%;
  height: 10vh;
  display: flex;
  position: relative;
  top: 0px;
  left: 0px;
  flex-direction: row;
  overflow: hidden;
}

@media screen and (max-width: 768px){
  .Scroll{
    height: calc(10vh *0.6);
  }
}

.Scroll p{
  font-size: 2vh;
  display: flex;
  writing-mode: vertical-rl;
  position: relative;
  top: 50%;
  left: 0;
  margin: 0;
  margin-left: 50%;
  transform: translate(0, -50%);
  justify-content: center;
}

@media screen and (max-width: 768px){
  .Scroll p{
    font-size: calc(2vh *0.6);
  }
}

.Arrow{
  height: 8vh;
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  justify-content: center;
  z-index: 30;
  margin: 0;
  margin-top: auto;
  margin-bottom: auto;
  animation: 3s arrow-animation infinite;
}

@media screen and (max-width: 768px){
  .Arrow{
    height: calc(8vh *0.6);
  }
}

.Arrow div{

}

.Arrow div::before{
  content: "";
  display: block;
  position: absolute;
  width: 0.1rem;
  height: 100%;
  z-index: 30;
  background-color: #565565;
  border-radius: 10px;
}

.Arrow div::after{
  content: "";
  display: block;
  position: absolute;
  width: 0.12rem;
  height: 50%;
  z-index: 30;
  transform: translate(0.95vh ,4.2vh) rotate(30deg);
  background-color: #565565;
  border-radius: 10px;
}


@media screen and (max-width: 768px){
  .Arrow div::after{
    transform: translate(calc(0.95vh *0.6) ,calc(4.2vh *0.6)) rotate(30deg);
  }
}

@keyframes arrow-animation {
 0% {
   transform: translate(0, -10vh);
 }
 40% {
   transform: translate(0, 0);
 }
 60% {
   transform: translate(0, 0);
 }
 100% {
   transform: translate(0, 10vh);
 }
}

//loop
.swiperslide{
  width: calc(var(--Window-Size)/3);
  height: calc(var(--Window-Size) * 2/9);
  display: block;
  position: relative;
  margin: calc(var(--GridMargin-Size)/2);
}

@media screen and (max-width: 1200px){
  .swiperslide{
    width: calc(var(--Window-Size)/2);
    height: calc(var(--Window-Size) * 2/6);
  }
}

@media screen and (max-width: 768px){
  .swiperslide{
    width: calc(var(--Window-Size));
    height: calc(var(--Window-Size) * 2/3);
  }
}

.slideimages{
  height: 100%;
  margin: auto;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
}

.hero-slider .content {
  position: relative;
  z-index: 2;
}

.image{
  height: 100%;
  width: auto;
  margin: auto;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
}

.text{
  margin: 0;
  height: 32px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(254,254,254,0.5);
}

@media screen and (max-width: 768px){
  .text{
    height: 22px;
  }
}

.font{
  font-weight: 200;
  color: #565565;
  font-size: 30px;
}

@media screen and (max-width: 768px){
  .font{
    font-size: 20px;
    }
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
