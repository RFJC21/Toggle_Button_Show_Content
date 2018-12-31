import React from "react";
import effects from "/home/cabeca/Desktop/react/react-complete-guide/src/containers/App.css";
import Aux from "../../hoc/Aux";

const cockpit = props => {
  const classes = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = effects.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(effects.red);
  }
  if (props.persons.length <= 1) {
    classes.push(effects.bold);
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(" ")}>CABECA</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Button
      </button>
    </Aux>
  );
};

export default React.memo(cockpit);
