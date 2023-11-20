function DriverCard(props) {
  console.log(props);
  const number = Math.round(props.rating);
  const starRatingUp = "★".repeat(number);
  const starRatingDown = "☆".repeat(5 - number);
  const { model, licensePlate } = props.car;
  const imgStyles = {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
  };
  const cardStyle = {
    padding: "20px",
    margin: "20px 30%",
    borderRadius: "10px",
    backgroundColor: "#455eb5",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  const infoStyle = {
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
  };

  return (
    <div style={cardStyle}>
      <img src={props.img} alt="img" style={imgStyles} />
      <div style={infoStyle}>
        <span>
          <strong>{props.name}</strong>
        </span>
        <span>
          {starRatingUp}
          {starRatingDown}
        </span>
        <span>
          {model} - {licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;
