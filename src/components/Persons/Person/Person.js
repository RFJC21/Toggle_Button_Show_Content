import React, { Component } from "react";
import effects from "/home/cabeca/Desktop/react/react-complete-guide/src/containers/App.css";
import PropTypes from "prop-types";

class Person extends Component {
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

  render() {
    return (
      <div className={effects.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.numbers,
  changed: PropTypes.func
};

export default Person;
