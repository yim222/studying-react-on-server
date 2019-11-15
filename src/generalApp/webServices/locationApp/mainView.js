'use strict'
import React, { Component } from 'react';

import {Location, EventsHandling, ConditionalRendering, CheckHour} from './components'
import {ShowLists, Forms, MultipleInputs, LocalStorage,GenerateIDS} from './components2'
import {Drafti} from './drafti'
import {MainViewSolvingProbelms} from './solvingProblems'
//Here I organize all the components of the app and move them to the root2

export class MainView extends React.Component{
  constructor(props){
    super()
    this.msg1 = "Here is my components - Location App";
    this.location1 = {
      name:'aaa',
      address: "somewhere in the world",
      coords:{
        x: 10,
        y:80
      },
      category:{
        name: "default categroy;"
      }

    };
    this.data2 = {
      name:'BBB',
      address: "somewhere in the world",
      coords:{
        x: 22,
        y:80
      },
      category:{
        name: "middle east;"
      }

    };

    //define here your location
    this.myLocation = {
      name: "Israel"


    };
  }


  render(){
    return <div>
    <h1>Main View 1 !</h1>
      <h1>{this.msg1}</h1>
      <p>Location component: </p>

      {5+10}{this.location1.name}
     <Location location = {this.location1}/>
      <Location location = {this.data2}/>

      <p>It's important to remember that u should create objects as components and insert them ,
      inside other component and they will use as pars in the parent component's pars.
      as I did here with category</p>

    {/*  <Location location = {{name: "USA"}}/> */}
    <div>

      <EventsHandling/>
      <ConditionalRendering hour ={9} checkMe = {25}/>
      <CheckHour hour = {5}/>

    </div>

    <ShowLists par1 = "asdasd"/>

    <Forms/>

    <MultipleInputs/>

    <Drafti/>

    <LocalStorage/>

    <MainViewSolvingProbelms/>

    <GenerateIDS/>

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
