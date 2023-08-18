import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Result Oriented",
          "Data Driven",
          "Hardworking"   
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default TypeWriter;
