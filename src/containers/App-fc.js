import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Persons/person';

const app =props =>{

  const [personsState,setPersonsState]=useState(
    { persons:[
      {name:'alka',age:'29'},
      {name:'bhoop',age:'27'},
      {name:'pooja',age:'31'}]
    }
  )

  const switchNameHandler=()=>{
  //console.log('clcked')
  //this.state.persons[1].name='max'
  setPersonsState({
    persons:
    [
      {name:'max',age:'28'},
      {name:'bhoop',age:'27'},
      {name:'pooja',age:'31'}
    ]
  })
}



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p></p>
        <button onClick={switchNameHandler} >switch name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

      </div>
    );
  }

export default app;

// state={
//   persons:[
//     {name:'alka',age:'29'},
//     {name:'bhoop',age:'27'},
//     {name:'pooja',age:'31'}
//   ],
//   otherState:'some state'
// }

// switchNameHandler=()=>{
//   console.log('clcked')
//   //this.state.persons[1].name='max'
//   this.setState({
//     persons:
//     [
//       {name:'max',age:'28'},
//       {name:'bhoop',age:'27'},
//       {name:'pooja',age:'31'}
//     ]
//   })
// }
