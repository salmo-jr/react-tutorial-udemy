import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  
  state = {
      persons: [
        {id: 'srth', name: 'Salmo', age: 38},
        {id: 'aerh', name: 'Victor', age: 16},
        {id: '34tv', name: 'Alessandra', age: 36}
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true
    }

    static getDerivedStateFromProps(props, state){
      console.log('[App.js] get DerivedStateFromProps', props);
      return state;
    }

    /* componentWillMount(){
      console.log('[App.js] componentWillMount');
    } */

    componentDidMount(){
      console.log('[App.js] componentDidMount');
    }

    componentDidUpdate(){
      console.log('[App.js] componentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log('[App.js] shouldComponentUpdate');
      return true;
    }

    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;

      const newPersons = [...this.state.persons];
      newPersons[personIndex] = person;

      this.setState({ persons: newPersons });
    };

    deletePersonHandler = (personIndex) => {
      const newPersons = [...this.state.persons];
      newPersons.splice(personIndex, 1);
      this.setState({persons: newPersons});
    };

    tooglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    };

    render(){
      console.log('[App.js] render');
      let persons = null;

      if (this.state.showPersons){
        persons = <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />
      }

      // PREFER TO USE BIND THAN ARROW FUNCTION
      return (
        <div className={classes.App}>
          <button
            onClick={() => {
              this.setState({showCockpit: false});
            }}
          >Remove Cockpit</button>
          
          { this.state.showCockpit ?
             <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.tooglePersonsHandler}/>
            : null }
          {persons}
        </div>
      );
    }
    //return React.createElement('div',{className:"App"}, 'text');
}

export default App;