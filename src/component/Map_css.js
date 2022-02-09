import React from 'react';
import styled from 'styled-components';

const Styled = styled.div `
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
    margin: calc(var(--GridMargin-Size)/2) 0px 60px 0px;
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
      padding-right: calc((100vw - (var(--Window-Size) + var(--GridMargin-Size) * 1))/2);
      padding-left: calc((100vw - (var(--Window-Size) + var(--GridMargin-Size) * 1))/2);
      }
    }

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


const GridSlide = () => {
    return (
        <Styled>
        </Styled>
    )    
  };
  
  export default GridSlide;