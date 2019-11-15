'use strict'
import React, { Component } from 'react';

import {Location, EventsHandling, ConditionalRendering, CheckHour} from './components'
import {ShowLists, Forms, MultipleInputs, LocalStorage} from './components2'
import {Component3} from './components3'

import {Drafti} from './drafti'
import {MainViewSolvingProbelms} from './solvingProblems'
//Here I organize all the components of the app and move them to the root2

export class MainView2 extends React.Component{
  constructor(props){
    super()



    }
  render(){
    return <div>
      <h1>I M main view2 </h1>
      <h2>Routing</h2>
      <p>Trying to route to other screen without inner setting to router:</p>
      <p>The regular way do a problem. I would be happy to see example.</p>
      <a href ="screen1/">With regular a tag </a>
      <p>Not working way</p>
        <a href ="../screen1">With regular a tag </a>
        Playing with relative also not do the job
        <a href = "../aaa">With regular a tag </a>
        Playing with relative also not do the job

        <Component3/>


    </div>


  }



}

//render it to app
//ReactDOM.render(<MainView/>,
//document.getElementById("root"));


const location3 = {
  name: "PTE"

};

//render it to app
//ReactDOM.render(<Location location = {location3}/>,
//document.getElementById("comp3"));
