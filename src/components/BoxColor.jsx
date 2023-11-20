function BoxColor(props) {
  const rgb = "rgb(" + props.r + "," + props.g + "," + props.b + ")";
  const color = props.g === 0 ? "white" : "black";
  const boxStyles = {
    border: "1px solid",
    marginRight: "200px",
    textAlign: "center",
    marginTop: "10px",
    backgroundColor: rgb,
    color: color,
    margin: "0 200px",
  };

  const numHex = (colorNumber) => {
    let hexValue = colorNumber.toString(16);
    if (hexValue.length % 2 > 0) {
      hexValue = "0" + hexValue;
    }
    return hexValue;
  };

  const hexNumberR = numHex(props.r);
  const hexNumberG = numHex(props.g);
  const hexNumberB = numHex(props.b);
  return (
    <div style={boxStyles}>
      rgb({props.r},{props.g},{props.b})
      <br />#{hexNumberR}
      {hexNumberG}
      {hexNumberB}
    </div>
  );
}

export default BoxColor;
