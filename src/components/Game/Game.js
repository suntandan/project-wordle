import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(inputGuess) {
    const nextGuess = [...guessList, inputGuess];
    //Conditions
    if (inputGuess.toUpperCase() === answer) setGameStatus("won");
    if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) setGameStatus("lost");

    //Update guess array
    setGuessList(nextGuess);
  }

  return (
    <>
      {gameStatus !== "running" && (
        <Banner
          gameStatus={gameStatus}
          answer={answer}
          numOfGuesses={guessList.length}
        />
      )}
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
