import "./App.css";

import { Greeting, UserCard } from "./components/Greetings.jsx";
import Product, { NavBar } from "./components/Product.jsx";
import { Button } from "./components/Button.jsx";
import { TaskCard } from "./components/Task.jsx";

function App() {
  return (
    <>
      {/* <Greeting title='Hola mundo' name='Joe'/>
      <Greeting title='Hola js'/> */}

      {/* <UserCard
        name="Milaneso Fiori"
        amount={40000}
        married={false}
        points={[99, 33, 0.6, 235]}
        address={{
          street:'123 main street',
          city: 'México'
        }}
        greet={function(){alert('hello')} }
      />
      <UserCard
        name="Athus Deria"
        amount={2000}
        married={true}
        points={[99, 33, 0.6, 235]}
        address={{
          street:'123 falso',
          city: 'México'
        }}
        greet={function(){alert('hello')} }
      /> */}

      {/* <Button text='Click me!'/>
      <Button text='Pay'/>
      <Button text='Go to' name="Athus"/>
      <Button text='Ya vámonos '/> */}

      <TaskCard />
    </>
  );
}

export default App;
