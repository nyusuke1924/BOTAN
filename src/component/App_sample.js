import React from 'react';
import styled from 'styled-components';

import FrontImages from 'src/component/FrontImages.js'
import GridSlide from 'src/component/GridSlide.js'
import MapCss from 'src/component/Map_css.js'

import FrontImage from './Images/FrontImage.jpg'

const Styled = styled.div `
.FrontImage{
  background-image: url(${FrontImage});
}
`

const App = () => {
  return (
    <Styled className="App">
      <MapCss/>
      <FrontImages/>
      <GridSlide/>
    </Styled>
  );
};

export default App;