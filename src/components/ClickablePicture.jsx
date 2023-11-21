import { useState } from "react";

function ClickablePicture(props) {
  const [imageToShow, setImageToShow] = useState(false);

  const handlePicture = () => {
    imageToShow ? setImageToShow(false) : setImageToShow(true);
  };
  const stylePicture = {
    position: "relative",
  };
  const styleGlasses = {
    position: "absolute",
    marginTop: "5px",
    marginLeft: "-50px",
  };

  return (
    <div>
      <button style={stylePicture} onClick={handlePicture}>
        <img src={props.img} width="50px" style={{ position: "relative" }} />
        <img
          src={props.imgClicked}
          width="50px"
          style={styleGlasses}
          hidden={imageToShow}
        />
      </button>
    </div>
  );
}

export default ClickablePicture;
