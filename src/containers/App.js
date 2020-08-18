import React, { useState } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (personsVisibility.showPersons){
      persons = <Persons
            persons={personsState.persons}
            clicked={deletePersonHandler}
            changed={nameChangedHandler} />
    }

    // PREFER TO USE BIND THAN ARROW FUNCTION
    return (
      <div className={classes.App}>
        <Cockpit
          title={props.appTitle}
          showPersons={personsVisibility.showPersons}
          persons={personsState.persons}
          clicked={tooglePersonsHandler}/>
        {persons}
      </div>
    );
    //return React.createElement('div',{className:"App"}, 'text');
}

export default app;