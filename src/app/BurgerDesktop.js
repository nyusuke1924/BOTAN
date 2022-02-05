import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'

import HomeApp from '../Home/App.js'
import AboutMeApp from '../AboutMe/App.js'
import ProductApp from '../Product/App.js'
import PhotoApp from '../Photo/App.js'
import MediaApp from '../Media/App.js'

import icon from './Images/main-logo.png';
import iicon from './Images/instagram-logo.svg';
import ficon from './Images/facebook-logo.svg';
import ticon from './Images/twitter-logo.svg';
import bicon from './Images/base-dlogo.png';

const StyleMenu = styled.nav`
  width: 100vw;
  height: var(--Header-Size);
  opacity: 0.8;
  background-color: #e8ebeb;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-box-align: initial;
  -webkit-box-pack: center;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  background-color: #ffffff;
  .logo {
    padding: 0;
    position: fixed;
    top: 8px;
    left: 20px;
  }
  .taglist{
    list-style: none;
  }
  .tag{
    text-decoration: none;
  }
`

const Div = styled.div`
  list-style: none;
  display: -webkit-box;
  flex-flow: column nowrap;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 110px;
  ul {
    display: -webkit-box;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 15px;
  }
  ul li {
    padding: 5px 10px;
    list-style: none;
  }
  ul li a {
    text-decoration: none;
    font-weight: 200;
    color: #000000;
  }
  ul p {
    padding: 5px 5px;
    list-style: none;
  }
`;

const Burger = () => {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <StyleMenu>
          <div className="logo"><li className="taglist">
            <Link to='/' className="tag">
              <img src={icon} alt="icon" width="auto" height="40"></img>
            </Link></li></div>
      </StyleMenu>
      <Div>
         <ul>
           <li><Link to='/AboutMe'>About Me</Link></li>
           <li><Link to='/Product'>Product</Link></li>
           <li><Link to='/Photo'>Photo</Link></li>
           <li><Link to='/Media'>Media</Link></li>
            <p><a href="https://www.facebook.com/profile.php?id=100018652172573">
              <img src={ficon} alt="icon" width="20" height="20"></img>
            </a></p>
            <p><a href="https://twitter.com/YSK_1924">
              <img src={ticon} alt="icon" width="20" height="20"></img>
            </a></p>
            <p><a href="https://www.instagram.com/nyusuke1924/?hl=ja">
              <img src={iicon} alt="icon" width="20" height="20"></img>
            </a></p>
            <p><a href="https://botanshop.base.ec">
              <img src={bicon} alt="icon" width="20" height="20"></img>
            </a></p>
        </ul>
    </Div>
    <Routes>
      <Route path='/' element={<HomeApp/>} />
      <Route path='AboutMe' element={<AboutMeApp/>} />
      <Route path='Product' element={<ProductApp/>} />
      <Route path='Photo' element={<PhotoApp/>} />
      <Route path='Media' element={<MediaApp/>} />
  </Routes>
    </BrowserRouter>
  )
}

export default Burger
