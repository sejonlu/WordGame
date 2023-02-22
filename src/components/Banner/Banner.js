import React from "react";

function Banner({ didWin, nbrGuesses, correctAnswer }) {
  let template;

  if (didWin) {
    template = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{nbrGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else {
    template = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{correctAnswer}</strong>.
        </p>
      </div>
    );
  }

  return template;
}

export default Banner;
