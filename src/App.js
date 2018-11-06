import React from "react";
import Hooks from "./Hooks";
import Counter from "./Counter";
import { useHover } from "./effects/useHover";

function App() {
  //
  const [hoverRef, isHovered] = useHover();
  console.log(hoverRef);

  return (
    <div>
      <Hooks number={3} />

      <Counter />

      <div ref={hoverRef}>{isHovered ? "HH" : "TT"}</div>
    </div>
  );
}

export default App;
