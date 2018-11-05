import React, { useState, useEffect } from "react";
import Hooks from "./Hooks";
import Counter from "./Counter";

function App() {
  //
  return (
    <div>
      <Hooks number={3} />

      <Counter />
    </div>
  );
}

export default App;
