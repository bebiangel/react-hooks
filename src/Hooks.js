import React, { useState, useEffect } from "react";

export default function Hooks() {
  //
  const [name, setName] = useState("Lionel");
  const [surname, setSurname] = useState("Messi");

  useEffect(() => {
    console.log("render1");
    return () => console.log("render2");
  });

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeSurame(e) {
    setSurname(e.target.value);
  }
  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
      </div>
      <div>
        <input value={surname} onChange={onChangeSurame} />
      </div>
    </>
  );
}
