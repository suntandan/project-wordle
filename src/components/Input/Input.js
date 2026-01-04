import React from "react";

function Input({ handleNewGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      console.log("Guess must be 5 letters long");
      return;
    }
    handleNewGuess(guess);
    setGuess("");
  }
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default Input;
