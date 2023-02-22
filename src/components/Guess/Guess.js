import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  let template;

  console.log("guess", guess);

  if (Object.keys(guess).length !== 0) {
    template = guess.result.map((r, index) => (
      <span key={index} className={`cell ${r.status}`}>
        {r.letter}
      </span>
    ));
  } else {
    template = range(0, 5).map((c, index) => (
      <span key={index} className="cell">
        {" "}
      </span>
    ));
  }

  return <p className="guess">{template}</p>;
}

export default Guess;
