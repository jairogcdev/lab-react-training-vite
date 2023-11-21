import { useState } from "react";

function Dice() {
  const [diceToshow, setDiceToShow] = useState("./src/assets/images/dice3.png");
  const handleDices = () => {
    const newDice = Math.floor(Math.random() * 6 + 1);
    setDiceToShow("./src/assets/images/dice-empty.png");
    setTimeout(() => {
      setDiceToShow("./src/assets/images/dice" + newDice + ".png");
    }, 1000);
  };
  return (
    <div>
      <button>
        <img src={diceToshow} alt="dice" width="50px" onClick={handleDices} />
      </button>
    </div>
  );
}

export default Dice;
