export function Greeting({ title, name = "Jon Doe" }) {
  //   let name = "Arturo";
  //   const valor = true;
  //   // return <h1>{valor ? "Hola casado" : "Hola perdido"} </h1>;

  //   const user = {
  //     firstName: "Erick",
  //     lastName: "Romero",
  //   };
  //   return (
  //     <div>
  //       <h1>{user.firstName}</h1>
  //       <h3>{user.lastName}</h3>
  //     </div>
  //   );

  return (
    <h1>
      {title}, {name}{" "}
    </h1>
  );
}

export function UserCard(props) {
  // console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
      <p>$ {props.amount}</p>
      <p> {props.married ? "Married" : "Single"}</p>
      <ul>
        <li>{props.address.city}</li>
        <li>{props.address.street}</li>
      </ul>
      {props.greet}
    </div>
  );
}
