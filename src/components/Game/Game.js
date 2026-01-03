import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function handleNewGuess(newGuess) {
    const guessObj = {
      id: Math.random().toString(36).substr(2, 9),
      label: newGuess,
    };
    const newGuessToBeComitted = [...guessResults, guessObj];
    setGuessResults(newGuessToBeComitted);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <Input handleNewGuess={handleNewGuess} />
    </>
  );
}

export default Game;
