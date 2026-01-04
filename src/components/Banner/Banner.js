import React from "react";

function Banner({ gameStatus, answer, numOfGuesses }) {
  return (
    <div className={`${gameStatus === "lost" ? "sad" : "happy"} banner`}>
      {gameStatus === "lost" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}

      {gameStatus === "won" && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuesses <= 1
              ? `${numOfGuesses} guess`
              : `${numOfGuesses} guesses`}
          </strong>
          !
        </p>
      )}
    </div>
  );
}

export default Banner;
