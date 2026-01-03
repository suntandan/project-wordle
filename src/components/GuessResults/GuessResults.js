import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guess) => (
        <p className="guess" key={guess.id}>
          {guess.label}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
