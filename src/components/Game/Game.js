import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    createArrayWithEmptyStrings(NUM_OF_GUESSES_ALLOWED)
  );
  const [nbrOfGuesses, setNbrOfGuesses] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [didWin, setDidWin] = React.useState(false);

  console.log("guesses", guesses);

  function handleAddGuess(guess) {
    if (nbrOfGuesses >= NUM_OF_GUESSES_ALLOWED) return;
    const nextGuesses = [...guesses];
    const result = checkGuess(guess, answer);
    nextGuesses[nbrOfGuesses] = {
      id: Math.random(),
      result: result,
    };
    setGuesses(nextGuesses);
    setNbrOfGuesses(nbrOfGuesses + 1);

    const didWin = result.every((obj) => obj.status === "correct");
    if (didWin) {
      setDidWin(true);
      setGameOver(true);
    } else if (nbrOfGuesses + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess, index) => (
          <Guess key={index} guess={guess} />
        ))}
      </div>
      <GuessInput handleAddGuess={handleAddGuess} disabled={gameOver} />
      {gameOver && (
        <Banner
          didWin={didWin}
          nbrGuesses={nbrOfGuesses}
          correctAnswer={answer}
        />
      )}
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
