import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  let template;

  if (word) {
    template = word.split("").map((c, index) => (
      <span key={index} className="cell">
        {c}
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
