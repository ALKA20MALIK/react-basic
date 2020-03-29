import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Auxiliary from '../components/hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
 constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }				  
state = {
    persons: [
      { id: '1', name: 'alka', age: '29' },
      { id: '2', name: 'bhoop', age: '27' },
      { id: '3', name: 'pooja', age: '31' }
    ],
    otherState: 'some state',
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }



  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = { 
	...this.state.persons[personIndex] 
	}

    person.name = event.target.value;

    const persons = [...this.state.persons]

    persons[personIndex] = person
	
    this.setState((prevState, props) => {
      return {
        persons: persons, 
		changeCounter: prevState.changeCounter + 1
      }
    })
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  loginHandler = () => {
    this.setState({ authenticated: true })
  }
  render() {

    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}>
        </Persons>
      );
    }
    return (
      <Auxiliary>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}
        >
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}>
          </Cockpit>
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );

  }
}

export default withClass(App, classes.App);
