function NumbersTable(props) {
  const arrNum = [];
  for (var i = 1; i < props.limit + 1; i++) {
    arrNum.push(i);
  }
  const styleWhite = {
    border: "1px solid",
    backgroundColor: "white",
    padding: "20px",
  };

  const styleRed = {
    border: "1px solid",
    backgroundColor: "red",
    padding: "20px",
  };
  return (
    <div>
      {arrNum.map((n, index) => {
        if (n % 2 === 0) {
          return (
            <span key={index} style={styleRed}>
              {n}
            </span>
          );
        } else {
          return (
            <span key={index} style={styleWhite}>
              {n}
            </span>
          );
        }
      })}
    </div>
  );
}

export default NumbersTable;
