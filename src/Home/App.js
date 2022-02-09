import React from 'react';
import styled from 'styled-components';
import HomeSlider from './HomeSlider';

const Div = styled.div`
  width: 90%;
  margin: 0;
  position: absolute;
  top: 60px;
  right: 5%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  `

const HomeApp = () => {
  return (
    <Div className="App">
      <HomeSlider/>
    </Div>
  );
};

export default HomeApp;
