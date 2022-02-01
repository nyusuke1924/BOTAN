import React from 'react';

const DateMap = (props) => {
  return (
    <div className="swiperslide">
        <div className="slideimages">
            <img src={props.details.image} alt='image1' className="image"/>
        </div>
        <div className="text">
            <h1 className="font">{props.details.name}</h1>
        </div>
    </div>
  )
};

export default DateMap;