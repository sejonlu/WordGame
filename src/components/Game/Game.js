import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    createArrayWithEmptyStrings(NUM_OF_GUESSES_ALLOWED)
  );

  const [nbrOfGuesses, setNbrOfGuesses] = React.useState(0);

  console.log("guesses", guesses);

  function handleAddGuess(guess) {
    if (nbrOfGuesses >= NUM_OF_GUESSES_ALLOWED) return;
    const nextGuesses = [...guesses];
    nextGuesses[nbrOfGuesses] = {
      id: Math.random(),
      result: checkGuess(guess, answer),
    };
    setGuesses(nextGuesses);
    setNbrOfGuesses(nbrOfGuesses + 1);
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess, index) => (
          <Guess key={index} guess={guess} />
        ))}
      </div>
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

function createArrayWithEmptyStrings(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    let entry = {};
    array.push(entry);
  }
  return array;
}

export default Game;
