import profiles from "../data/berlin.json";
function FaceBook() {
  const cardStyles = {
    marginTop: "40px",
    border: "2px solid",
    margin: "10px",
    display: "flex",
    textAlign: "start",
  };

  const listStyles = {
    listStyleType: "none",
  };
  const imgStyles = {
    width: "200px",
  };
  return (
    <div>
      {profiles.map((eachProfile, index) => {
        return (
          <div key={index} style={cardStyles}>
            <img
              src={eachProfile.img}
              alt={eachProfile.img}
              style={imgStyles}
            />
            <ul style={listStyles}>
              <li>
                <strong>First name</strong>:{eachProfile.firstName}
              </li>
              <li>
                <strong>Last name</strong>:{eachProfile.lastName}
              </li>
              <li>
                <strong>Country</strong>:{eachProfile.country}
              </li>
              <li>
                <strong>Type:</strong>:
                {eachProfile.isStudent ? "Student" : "Teacher"}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
