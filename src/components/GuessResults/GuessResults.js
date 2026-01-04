import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessResults, answer }) {
  return guessResults.length < NUM_OF_GUESSES_ALLOWED ? (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={guessResults[num]} answer={answer} />;
      })}
    </div>
  ) : null;
}

export default GuessResults;
