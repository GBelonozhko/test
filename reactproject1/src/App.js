import React, { Component } from 'react';

import './App.css';
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {name:'Greg', age:26},
      {name:'jasmine', age:23},
      {name:'Cindy', age:22}
    ] ,
  otherState: "somevalue"
  }

  switchNameHandler = () => {
   this.setState({
     
    persons: [
      {name:'Greg', age:26},
      {name:'Justyne', age:24},
      {name:'Irina', age:22}
    ]
   })
  }

  
 
 

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <p>this is really working</p>
        
        <div class="parallax">
         <p>parallax in action</p>
        </div>
        

        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name= {this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age}>My hobbies are playing bass</Person> 
        <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
