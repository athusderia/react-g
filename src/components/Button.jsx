import PropTypes from "prop-types";

export function Button({ text, name="Deria" }) {
    console.log(name)
  return <button>{text} - {name} </button>;
}


Button.propTypes ={
    text:PropTypes.string.isRequired
}
