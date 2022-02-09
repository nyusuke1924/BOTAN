const DateMap = (props) => {

  return (
    <div className="swiperslide">
        <div className="slideimages">
          <p className="tag"><a href={props.details.url}>
            <img src={require("./Images/image" + props.details.id + ".jpg")} alt='image1' className="image"/>
          </a></p>
        </div>
        <div className="text">
          <h1 className="font">{props.details.name}</h1>
        </div>
    </div>
  )
};

export default DateMap;