function IdCard(props) {
  const cardStyles = {
    border: "2px solid",
    margin: "10px",
    display: "flex",
    textAlign: "start",
  };

  const listStyles = {
    listStyleType: "none",
  };

  return (
    <div style={cardStyles}>
      <img src={props.picture} alt={props.picture} />
      <ul style={listStyles}>
        <li>
          <strong>First name</strong>:{props.firstName}
        </li>
        <li>
          <strong>Last name</strong>:{props.lastName}
        </li>
        <li>
          <strong>Gender</strong>:{props.gender}
        </li>
        <li>
          <strong>Height</strong>:{props.height}
        </li>
        <li>
          <strong>Birth</strong>:{props.birth.toDateString()}
        </li>
      </ul>
    </div>
  );
}

export default IdCard;
