import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const checkedAnswer = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checkedAnswer ? checkedAnswer[num].letter : undefined}
          status={checkedAnswer ? checkedAnswer[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
