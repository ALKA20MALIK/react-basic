import React, { Component } from 'react'
import classes from './Person.css';
import Auxiliary from '../../hoc/Auxiliary'
import withClass from '../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

  constructor(props) {
    super(props);
    //this.inputElement=React.createRef();
  }

  static contextType=AuthContext

  componentDidMount() {
    //this.inputElement.current.focus()
    console.log(this.context.Authenticated)
  }
  render() {
    console.log('[Person.js] rendering...');

    return (
      //<div className={classes.Person}>
      <Auxiliary>
          {this.context.authenticated ? <p>Authenticated ! </p> : <p>Please login</p>}

        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key='i1'>{this.props.children}</p>
        <input
          key='i2'
          type="text"
          //ref={this.inputElement}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.string,
  changed: PropTypes.func
}
export default withClass(Person, classes.Person);