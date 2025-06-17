import "./App.css";

import { Greeting, UserCard } from "./components/Greetings.jsx";
import Product, { NavBar } from "./components/Product.jsx";
import { Button } from "./components/Button.jsx";
import { TaskCard } from "./components/Task.jsx";
import { Saludar } from "./components/Saludar.jsx";

import { Posts } from "./components/Posts.jsx";

import { Counter } from "./components/Counter.jsx";

import { Input } from "./components/Input.jsx";

// const users = [
//   {
//     id: 1,
//     name: "Arturo",
//     image: "https://robohash.org/user",
//   },
//   {
//     id: 2,
//     name: "Erick",
//     image: "https://robohash.org/user2",
//   },
// ];

const handleChange = (e) => {
  console.log(e.target.value);
};

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
      {/* 
      <TaskCard ready={false}/>
      <Saludar/>
      <Button text='Click me!'/> */}

      {/* <input type="text" name="" id="hola"  onChange={ function(e){
        console.log(e.target.value)
      }}/> */}
      {/* <input type="text" name="" id="hola"  onChange={ handleChange}/>

      <form onSubmit={(e)=> {e.preventDefault()
        console.log('Enviado...')}
      }>
        <h1>Registro de usuarios</h1>
        <button>Send</button>
      </form> */}

      {/* <Posts /> */}

      {/* {users.map((user, index) => {
        return (
          <div  key={index}>
            <h1>{user.name}</h1>
          </div>
        );
      })} */}

        <Counter/>
        <Input/>

    </>
  );
}

export default App;
