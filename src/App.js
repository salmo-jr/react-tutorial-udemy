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

    const switchNameHandler = () => {
      //console.log('Was clicked!');
      setPersonsState(
        {
          persons: [
            {name: 'Salmo Marques', age: 38},
            {name: 'Victor', age: 16},
            {name: 'Alessandra', age: 46}
          ]
        });
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Hobbies: Play soccer</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className:"App"}, 'text');
}

export default app;