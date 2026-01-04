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
  const [status, setStatus] = React.useState("running");

  function handleNewGuess(guess) {
    console.log(`from handleNewGuess: ${guess}`);
    setGuessResults([...guessResults, guess]);
    console.log(guessResults);
  }

  return (
    <>
      {status === "running" && (
        <>
          <GuessResults guessResults={guessResults} answer={answer} />
          <Input handleNewGuess={handleNewGuess} />
        </>
      )}
    </>
  );
}

export default Game;
