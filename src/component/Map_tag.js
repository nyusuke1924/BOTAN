import React from 'react';
import styled from 'styled-components';

const Styled = styled.div `
.tag{
  height:100%;
  width:100%;
  margin: auto;
}
`

const Map_tag = (props) => {

  return (
    <Styled className="swiperslide">
        <div className="slideimages">
          <p className="tag"><a href={props.details.url}>
            <img src={require("./Images/image" + props.details.id + ".jpg")} alt='image1' className="image"/>
          </a></p>
        </div>
        <div className="text">
          <h1 className="font">{props.details.name}</h1>
        </div>
    </Styled>
  )
};

export default Map_tag;