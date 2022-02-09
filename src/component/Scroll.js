import React from 'react';
import styled from 'styled-components';

const Styled = styled.div `
    width: 100%;
    height: 10vh;
    display: flex;
    position: relative;
    top: 0px;
    left: 0px;
    flex-direction: row;
    overflow: hidden;
  
  @media screen and (max-width: 768px){
    height: calc(10vh *0.6);
  }
  
  .Arrow_text{
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
    .Arrow_text{
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
  
  .Arrow div::before{
    content: "";
    display: block;
    position: absolute;
    width: 0.15rem;
    height: 100%;
    z-index: 30;
    background-color: #565565;
    border-radius: 10px;
  }
  
  .Arrow div::after{
    content: "";
    display: block;
    position: absolute;
    width: 0.15rem;
    height: 50%;
    z-index: 30;
    transform: translate(0.95vh ,4.2vh) rotate(30deg);
    background-color: #565565;
    border-radius: 10px;
  }
  
  
  @media screen and (max-width: 768px){
    .Arrow div::before{
      width: 0.1rem;
    }
    .Arrow div::after{
      width: 0.1rem;
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
`

const Scroll = () => {
    return (
          <Styled className='Scroll'>
              <p className='Arrow_text'>Scroll</p>
              <div className='Arrow'>
                  <div/>
              </div>
            </Styled>
    )    
  };
  
  export default Scroll;