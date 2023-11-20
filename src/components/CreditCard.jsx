function CreditCard(props) {
  const styleCreditCard = {
    color: props.color,
    backgroundColor: props.bgColor,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    marginBottom: "5px",
    width: "280px",
  };

  const cardType =
    props.type === "Visa"
      ? "./src/assets/images/visa.png"
      : "./src/assets/images/master-card.svg";

  const imgStyles = {
    maxWidth: "35px",
    maxHeight: "15px",
    alignSelf: "end",
    margin: "20px",
  };

  const numberHidden =
    props.number.length >= 4
      ? "⦁"
          .repeat(props.number.length - 4)
          .match(/.{1,4}/g)
          .join(" ") +
        " " +
        props.number.slice(props.number.length - 4, props.number.length)
      : props.number;
  const month =
    props.expirationMonth > 9
      ? props.expirationMonth
      : "0" + props.expirationMonth;

  const expBank = {
    justifyContent: "space-evenly",
    textAlign: "start",
    marginLeft: "18px",
  };

  const nameStyle = {
    textAlign: "start",
    marginLeft: "18px",
  };

  return (
    <div style={styleCreditCard}>
      <img src={cardType} alt="card" style={imgStyles} />
      <p>
        <strong>{numberHidden}</strong>
      </p>
      <span>
        <div style={expBank}>
          Expires {month}/{props.expirationYear} {props.bank}
        </div>
      </span>
      <span style={nameStyle}>{props.owner}</span>
    </div>
  );
}

export default CreditCard;
