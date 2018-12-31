import React, { Component } from "react";
import effects from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js inside constr", props);
  }

  componentWillMount() {
    console.log("ergjn");
  }

  componentDidMount() {
    console.log("wjntjn");
  }

  //return true or false!!
  //if false, it wouldn't update the state
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Update App.js inside componentshould", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("update App.js inside will update", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("Update App.js");
  }

  state = {
    persons: [
      { id: "12", name: "Rui", age: 28 },
      { id: "123", name: "Filipe", age: 26 },
      { id: "1234", name: "Jesus", age: 26 }
    ],
    otherState: "some other state",
    showPersons: false,
    toggleClicked: 0
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = (event, id) => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
      toggleClicked: this.state.toggleClicked + 1
    });
  };

  render() {
    // esta variavel e nula
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={effects.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );

    //return React.createElement(
    // "div",
    //{ className: "App" },
    //React.createElement("hi", null, "Rui")
    //);
  }
}

export default App;
