function Random(props) {
  const number = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  const numberStyles = {
    border: "1px solid",
    marginRight: "200px",
    textAlign: "left",
    marginTop: "10px",
  };
  return (
    <div style={numberStyles}>
      Random value between {props.min} and {props.max} = {number}
    </div>
  );
}

export default Random;
