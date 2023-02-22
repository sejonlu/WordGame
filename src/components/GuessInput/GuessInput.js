import React from "react";

function GuessInput({ handleAddGuess, disabled }) {
  const [input, setInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop page refresh

    if (/^[a-zA-Z]{5}$/.test(input) === false) return;

    handleAddGuess(input);
    setInput(""); // reset input
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={input}
        pattern={"[a-zA-Z]{5}"}
        maxLength={5}
        required
        disabled={disabled}
        onChange={(event) => setInput(event.target.value.toUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
