import "./App.css";

function App() {
  function Greeting() {
      let name = 'Arturo'
    return  <h1>Hola {name}</h1>;
  }

  return (
    <>
      <Greeting />
    </>
  );
}

export default App;
