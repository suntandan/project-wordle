import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [inputGuess, setInputGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(inputGuess);
    setInputGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        title="Insert a 5 letter word"
        pattern="[a-zA-Z]{5}"
        id="guess-input"
        type="text"
        value={inputGuess}
        onChange={(e) => setInputGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
