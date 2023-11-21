import { useState } from "react";

function Carousel(props) {
  const [imageToShow, setImageToShow] = useState(0);
  const handleImagesLeft = () => {
    if (imageToShow > 0 && imageToShow <= 3) {
      setImageToShow(imageToShow - 1);
    }
  };
  const handleImagesRight = () => {
    if (imageToShow >= 0 && imageToShow < 3) {
      setImageToShow(imageToShow + 1);
    }
  };
  return (
    <div>
      <button onClick={handleImagesLeft}>Left</button>
      <img src={props.images[imageToShow]} />
      <button onClick={handleImagesRight}>Right</button>
    </div>
  );
}

export default Carousel;
