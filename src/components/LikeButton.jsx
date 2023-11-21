import { useState } from "react";

function LikeButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [likesToShow, setLikesToShow] = useState(0);
  const [colorToShow, setColorToShow] = useState(colors[0]);

  const handleLikes = () => {
    let likes = likesToShow;
    setLikesToShow(likes + 1);

    let color = colors[(likes + 1 + colors.length) % colors.length];
    setColorToShow(color);
  };

  const likeStyles = {
    backgroundColor: colorToShow,
  };
  return (
    <div>
      <button style={likeStyles} onClick={handleLikes}>
        {likesToShow} Likes
      </button>
    </div>
  );
}

export default LikeButton;
