import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  //creation
  constructor(props) {
    super(props);
    console.log("Persons.js inside constr", props);
  }

  componentWillMount() {
    console.log("Persons.ergjn");
  }

  componentDidMount() {
    console.log("Persons.wegw");
  }

  //update
  componentWillReceiveProps(nextProps) {
    console.log("Update Persons inside componentwillreceiveprops", nextProps);
  }

  //return true or false!!
  //if false, it wouldn't update the state
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Update Persons inside componentshould", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("update persons inside will update", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("Update");
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
