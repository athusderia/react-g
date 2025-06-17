import "../components/tasks.css";

export function TaskCard({ ready }) {
  // const cardStyles = {background: '#202020', color: '#fff', padding: '20px'}
  return (
    // <div style={cardStyles}>
    <div className="card">
      <h1>Mi primer tarea</h1>
      <span className={ready ? 'bg-red' : 'bg-purple'}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
      {/* <p>Tarea Realizada</p> */}
    </div>
  );
}
