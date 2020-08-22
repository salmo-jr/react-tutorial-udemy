import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import classes from './Person.css';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering ...');
        return (
            <Auxiliary>
                <p onClick={this.props.click}>I'm {this.props.name}! And I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name} />
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
  }

export default withClass(Person, classes.Person);