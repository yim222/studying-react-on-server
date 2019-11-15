import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//this is how u export and see the import correctly in the part1 file 
//Define function-components - MUST Capatalize!
 export function Component1(props){

  return <p className = 'jsCode'>I am component 1 and this is my parameter and this is my parameter1 : {props.par1}</p>


}

//define it as class

export class Component2 extends React.Component{

  render(){

     return <p className = "jsCode">I am component 2 and this is my pars - par1: {this.props.par1} par2: {this.props.par2} <br/>
      U can see at the code, that in that implementation I don't need to define the "props" but u need to use this.props.par2
     </p>;

  }

}



//const element1 = <Component1 par1="Sara" />;//this code is creating react Elements from the component
//const element2 = <Component2 par1="Val 1 " par2 = "44"/>;

//Here u represent it
//ReactDOM.render(component1("aa"),document.getElementById("compView1"));// -don't work well, don't read the args
//ReactDOM.render(element1,document.getElementById("compView1"));

//ReactDOM.render(element2, document.getElementById("compView2"));
