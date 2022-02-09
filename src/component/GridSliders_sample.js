import React from 'react';
import styled from 'styled-components';

//固定import情報
import DateMap from '../component/Map_detail';
import Scroll from '../component/Scroll';

import DateList from './Data';

const Styled = styled.div `
`

  const GridSlide = () => {
    return (
      <Styled>
        <div className="swipercontainer">
          <div className="swiperwrapper">
            <Scroll/>
            {Object.keys(DateList).map(key => 
              <DateMap key={key} details={DateList[key]} />
            )} 
          </div>
        </div>
    </Styled>);
  };
  
  export default GridSlide;
