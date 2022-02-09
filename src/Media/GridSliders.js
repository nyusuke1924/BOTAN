import React from 'react';
import styled from 'styled-components';

import DataList from './Data'
import DataMap from './Datamap'

const Styled = styled.div `
.image{
  height: auto;
  width: 100%;
}

.tag{
  height:100%;
  width:100%;
  margin: auto;
}
`

  const GridSlide = () => {
    return (
      <Styled>
        <div className="swipercontainer">
          <div className="swiperwrapper">
            {Object.keys(DataList).map(key => 
              <DataMap key={key} details={DataList[key]} />
            )} 
          </div>
        </div>
    </Styled>);
  };
  
  export default GridSlide;
