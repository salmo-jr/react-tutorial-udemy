import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Salmo', age: 38},
      {name: 'Victor', age: 16},
      {name: 'Alessandra', age: 36}
    ],
    otherProp: 'something'
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    this.setState(
      {
        persons: [
          {name: 'Salmo Marques', age: 38},
          {name: 'Victor', age: 16},
          {name: 'Alessandra', age: 46}
        ]
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies: Play soccer</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className:"App"}, 'text');
  }
}

export default App;
