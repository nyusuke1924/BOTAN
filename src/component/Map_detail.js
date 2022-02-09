import {useState} from 'react';
import styled from 'styled-components';

const Styled = styled.div `

//clickイベント後の対応
.none{
  display: none;
}

.show{
  width: 100vw;
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  display: block;
  position: fixed;
  top: var(--Header-Size);
  left: 50%;
  overflow: hidden scroll;
  -ms-overflow-style: none;
  transform: translate(-50%, 0);
	border-radius: 10px;
  margin-top: var(--GridMargin-Size);
  z-index: 30;
}

.detail_list{
  width: var(--Window-Size);
  max-width: 1000px;
  display: flex;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgba(254,254,254,0.9);
  border-radius: 10px;
  margin-bottom: calc(var(--Header-Size) + var(--GridMargin-Size));
  padding: 0 50px 0 50px;
  z-index: 40;
}

.title{
  height: var(--Header-Size);
  width: 100%;
  display: flex;
  position: relative;
}

.close{
  height: 100%;
  width: 10vh;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  z-index: 50;
}

.close div::before{
  content: "";
  display: block;
  position: absolute;
  width: 0.15rem;
  height: calc(var(--Header-Size)/2);
  right: 50%;
  transform: translate(50%, 50%) rotate(-45deg);
  background-color: #565565;
  border-radius: 10px;
  
}

.close div::after{
  content: "";
  display: block;
  position: absolute;
  width: 0.15rem;
  height: calc(var(--Header-Size)/2);
  right: 50%;
  transform: translate(50%, 50%) rotate(45deg);
  background-color: #565565;
  border-radius: 10px;
}

.detail_title{
  display: flex;
  position: relative;
  font-weight: 200;
  color: #565565;
  font-size: 3rem;
  margin: 0;
  align-items: center;
}

.detail_image{
  width: 100%;
  display: flex;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  padding-bottom: var(--GridMargin-Size);
}

.detail_text{
  display: flex;
  position: relative;
  font-weight: 200;
  color: #565565;
  font-size: 1rem;
}
`

const Map_Detail = (props) => {

  const [show, setShow] = useState(false);

  return (
    <Styled className="swiperslide">
        <div className="slideimages">
          <img src={require("../Images/" + props.details.folder +"/image" + props.details.id + ".jpg")} alt='image1' className="image"
          onClick={() => setShow(currentShow => !currentShow)}/>
        </div>
        <div className="text">
          <h1 className="font">{props.details.name}</h1>
        </div>
        
          <div className={ show ? 'show': 'none'}>
            <div className='detail_list'>
              <div className='title'>
                <div className ='close' onClick={() => setShow(currentShow => !currentShow)}>
                  <div></div>
                </div>
                <h1 className="detail_title">{props.details.name}</h1>
              </div>
              <img src={require("../Images/" + props.details.folder +"/image" + props.details.id + ".jpg")} alt='image1' className="detail_image"/>
              <h1 className="detail_text">{props.details.text}</h1>
            </div>
          </div>
    </Styled>
  )
};

export default Map_Detail;