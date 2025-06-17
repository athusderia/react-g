import React, { useState, useEffect } from "react";

export const Input = () => {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] =useState(0)

  //Si le damos un arreglo vacio solo se ejecuta al inicio y no cada que hay un cambio
  useEffect(() => {
    console.log("Render");
  }, [counter]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert(`El mensaje es: ${mensaje}`);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter + 1)
      }}>Incrementar</button>

    </div>
  );
};
