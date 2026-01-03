import React from "react";

function Input({ handleNewGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      console.log("Guess must be 5 letters long");
      return;
    }
    const convertedAnswer = guess.toUpperCase();
    handleNewGuess(convertedAnswer);
    console.log({ convertedAnswer });
    setGuess("");
  }
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
      </form>
    </>
  );
}

export default Input;
