function Rating(props) {
  const number = Math.round(props.children);
  const starRatingUp = "★".repeat(number);
  const starRatingDown = "☆".repeat(5 - number);
  return (
    <div>
      {starRatingUp}
      {starRatingDown}
    </div>
  );
}

export default Rating;
