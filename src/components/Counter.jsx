import React, {useState} from "react"

export const Counter = () => {

    const [counter, setCounter] = useState(10)

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Sumar</button>

      <button onClick={()=>{
        setCounter(counter -1)
      }}>Restar</button>

      <button onClick={()=>{
        setCounter(10)
      }}>Reiniciar</button>
    </div>
  );
};
