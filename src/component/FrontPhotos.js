import React from 'react';
import styled from 'styled-components';

const Styled = styled.div `
  width: 100vw;
  height: var(--FrontImage-Size);
  display: block;
  position: fixed;
  top: var(--Header-Size);
  right: 50%;
  transform: translate(50%, 0);
  background-size: cover;
  background-position: center center;
`

const FrontPhotos = () => {
  return(
    <Styled className='FrontPhoto'/>
  );
};

export default FrontPhotos;