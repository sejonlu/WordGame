import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessTracker from "../GuessTracker/GuessTracker";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessTracker guesses={guesses} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
