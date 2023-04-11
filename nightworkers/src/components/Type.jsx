import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Délegation", "Validation", "casino", "R2E"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        stop: true,
      }}
    />
  );
}

export default Type;
