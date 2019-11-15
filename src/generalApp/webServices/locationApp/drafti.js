import React, {Component} from 'react';

export class Drafti extends React.Component{
  constructor(props){
    super();

    this.state = {

      stateVar1: "drafti state var1"

    }



  }
  render(){
    var var1 = "I am var 1 from drafti";


    return <div className ="explain">
    <h1>Here I am doing some playing with the code</h1>
    <p>{var1}</p>

    <FractioNumber/>


    </div>


  }

}

//inner classes
class FractioNumber extends React.Component{

  constructor(props){
    super();

    this.state = {

      stateVar1: "fraction state var1"

    }
    //bind the myFunction
    this.changeFractionState = this.changeFractionState.bind(this);

  }

  changeFractionState(myEvent){

    this.setState({
      stateVar1: myEvent.target.value

    })

  }

  render(){

    var var2 = this.state.stateVar1;
    return<div>
      <h2>I am FrcationNumber Component</h2>
      <p>Trying to chang value from outside, but it's need to be only by
      methods defined by this component.
      </p>
      <input type = "text" onChange ={this.changeFractionState} />

      <p>I am var2 that is assigned by state.var1 = {var2}</p>
    </div>

  }

}
