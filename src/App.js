import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
      persons: [
        {name: 'Salmo', age: 38},
        {name: 'Victor', age: 16},
        {name: 'Alessandra', age: 36}
      ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = (newName) => {
      //console.log('Was clicked!');
      setPersonsState(
        {
          persons: [
            {name: newName, age: 38},
            {name: 'Victor', age: 16},
            {name: 'Alessandra', age: 46}
          ]
        });
    }

    const nameChangedHandler = (event) => {
      setPersonsState(
        {
          persons: [
            {name: 'Salmo', age: 38},
            {name: event.target.value, age: 16},
            {name: 'Alessandra', age: 46}
          ]
        });
    }

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    // PREFER TO USE BIND THAN ARROW FUNCTION
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => switchNameHandler("Salmo Marques")}>Switch Name</button> 
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age} />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, "salmo.jr")}
          changed={nameChangedHandler}>Hobbies: Play soccer</Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className:"App"}, 'text');
}

export default app;