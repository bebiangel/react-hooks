import React, { useState, useEffect } from "react";

export default function Hooks(props) {
  //
  const [name, setName] = useState(() => {
    //
    const a = "Lionel";
    return props.number;
  });

  const [surname, setSurname] = useState("Messi");

  // useEffect(() => {
  //   console.log("render1");
  //   return () => console.log("render2");
  // });

  // const context = useContext(null);
  // console.log(context);

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
