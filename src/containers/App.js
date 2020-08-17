import React, { useState } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

    let persons = null;
    let btnClass = '';

    if (personsVisibility.showPersons){
      persons = (
        <div>
          {
            personsState.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person
                  click={deletePersonHandler.bind(this, index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => nameChangedHandler(event, person.id)} />
                </ErrorBoundary>
            })
          }
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (personsState.persons.length <= 2) assignedClasses.push(classes.red);
    if (personsState.persons.length <= 1) assignedClasses.push(classes.bold);

    // PREFER TO USE BIND THAN ARROW FUNCTION
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App.</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={tooglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className:"App"}, 'text');
}

export default app;