function Greetings(props) {
  let greeting = "";
  if (props.lang === "de") {
    greeting = "Hallo";
  } else if (props.lang === "fr") {
    greeting = "Bonjour";
  } else if (props.lang === "es") {
    greeting = "Hola";
  } else if (props.lang === "en") {
    greeting = "Hello";
  }
  const greetingStyles = {
    border: "1px solid",
    marginRight: "200px",
    textAlign: "left",
    marginTop: "10px",
  };

  return (
    <div style={greetingStyles}>
      {greeting} {props.children}
    </div>
  );
}

export default Greetings;
