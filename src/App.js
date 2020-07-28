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

    const [personsVisibility, setPersonsVisibility] = useState({
      showPersons: false
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

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

    const deletePersonHandler = (personIndex) => {
      const newPersons = [... personsState.persons];
      newPersons.splice(personIndex, 1);
      setPersonsState({persons: newPersons});
    }

    const tooglePersonsHandler = () => {
      setPersonsVisibility({showPersons: !personsVisibility.showPersons});
    }

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (personsVisibility.showPersons){
      persons = (
        <div>
          {
            personsState.persons.map((person, index) => {
              return <Person
                click={deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age} />
            })
          }
        </div>
      );
    }

    // PREFER TO USE BIND THAN ARROW FUNCTION
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={tooglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className:"App"}, 'text');
}

export default app;