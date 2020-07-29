import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
      persons: [
        {id: 'srth', name: 'Salmo', age: 38},
        {id: 'aerh', name: 'Victor', age: 16},
        {id: '34tv', name: 'Alessandra', age: 36}
      ]
    });

    const [personsVisibility, setPersonsVisibility] = useState({
      showPersons: false
    });

    const [otherState, setOtherState] = useState('some other value');

    const nameChangedHandler = (event, id) => {
      const personIndex = personsState.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {...personsState.persons[personIndex]};
      person.name = event.target.value;

      const newPersons = [...personsState.persons];
      newPersons[personIndex] = person;

      setPersonsState({ persons: newPersons });
    }

    const deletePersonHandler = (personIndex) => {
      const newPersons = [...personsState.persons];
      newPersons.splice(personIndex, 1);
      setPersonsState({persons: newPersons});
    }

    const tooglePersonsHandler = () => {
      setPersonsVisibility({showPersons: !personsVisibility.showPersons});
    }

    const style = {
      backgroundColor: 'green',
      color: 'white',
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
                age={person.age}
                key={person.id}
                changed={(event) => nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (personsState.persons.length <= 2) classes.push('red');
    if (personsState.persons.length <= 1) classes.push('bold');

    // PREFER TO USE BIND THAN ARROW FUNCTION
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={tooglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className:"App"}, 'text');
}

export default app;