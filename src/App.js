 //import ReactDOM from 'react-dom';
 import React, { Component } from 'react';

import logo from  './logo.svg';
import './App.css';
import {Component1, Component2 } from './studyingExamples/componentsStudying1.js'
import {StudyingReactPart1 } from './studyingExamples/view/part1.js'
import {MainView} from './locationApp/mainView.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ReactRoute1} from './locationApp/solvingProblems.js'
import {SuperMainView} from './main-router-and-view/superMainView.js';
import {Main as TECH500} from './tech500-exercise/components/main.js'
 import {Example1} from "./new-work-on/react-hooks/sub-comps/DraftHooks";

//import './studyingExamples/componentsStudying1.js'

 /**
  * Deploy on github:
  *
  *https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
  * run
  * npm run deploy the it will deploy the current version (from you local) of the code.
  *
  * the url:
  * https://yim222.github.io/studying-react-on-server/
  */
 class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
              {/*<Example1/>*/}
          <div className = "location-view " >
          <SuperMainView/>
              {/*<ReactRoute1/>*/}
              {/*<MainView/>*/}
          </div>



          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
              <br/>Have edited - lingar
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p>About using JSX and the flow of the app. <br/>
            This is generate "create-react-app" It's unlike with html that u need to process the
            The JSX file to JS for use them in the html. Here is all flow down to the
            App.js and u show all u want in component that import the other component.
            <br/>So U need to make component for the view u want to set if u want to seperate it from
            the main App.</p>

            <a href = "StudyingReact.html" className="App-link">Go</a>
        {/*<div id = "compView1"></div> -->*/}
        <Component1 par1 = "izhar"/>
       <Component2 par1 = "izhar" par2 = "Mashkif"/>
       <StudyingReactPart1/>
          </header>


          </div>


      </div>
    );
  }
}

export default App;
