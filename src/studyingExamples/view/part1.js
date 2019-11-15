import React, { Component } from 'react';
import {Component1, Component2,WorkOnFuction} from '../componentsStudying.js';
export class StudyingReactPart1 extends React.Component{
constructor(props){
  super();

      {const object2 = {
        a:"I am a",
        b: " I am b"

      }}


}
  render(){

     return <div>
         <title>Studying React - part 1</title>
         <p>wgh</p>

         <p><b>I am here convert the files from the first guidenss that made with html direct to
         the app structure. Don't study from here the basix , if u want go to
         <a href = "file:///C:\izhar\files\AAA-projects\ReactProjects\studying-react-clean-project\StudyingReact.html">here</a> <br/>
         file:///C:/izhar/files/AAA-projects/ReactProjects/studying-react-clean-project/StudyingReact.html<br/>
         Here I'll do the locaton app <br/>
         The way to make the changes is to remove the react DOM, import and export correctly,
         and make all the dom elements into direct components. In this work-method the component are reside just Here
       </b></p>
         <a href = "StudyingReact-part2.html">go to part2</a>
         <p> GEtting start - please read that for remeber how to work with react from the start</p>
         <h1>Start with react - 3 ways </h1>

         <ul>
            <li>1- The simple way with manually adding tags, and start compilers when you need.
            <br/>This is how this project is built. But for example u encounter problems when
          U are need server, some syntax not work on local machine. It's recommended by them to existing websites, apparently because
        they have already running enviroment.</li>
            <li>2- With create react app command - this is the primary and recommended way.
            see <a href="https://reactjs.org/docs/create-a-new-react-app.html">here</a> about that
          this is very simple , just 3 commands :
              <pre>
                npx create-react-app my-app
                cd my-app
                npm start
              </pre>
             </li>
             <li>with manually install packages like explained <a href="https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm">here</a>
              </li>

         </ul>
         <h2>Anyway - u should create basic projects for convient of the work</h2>
         <p>Sometimes there is problems to copy projects from the windows, so u can do it from the CMD<br/></p>
        <pre>***xcopy /S sourceFolder destinationfolder</pre>   <br/>
    https://ss64.com/nt/xcopy.html

    <h2>Don't forget that there is changes that need to be done, when u moving to producton area. Don't
    remeber when but it's reminded in all through the guides </h2>
   <h1>Add react : <br/> This is component from the doc </h1>
   <h2>1- create dom element - it's mean simple div element </h2>
    <div id = "reactApp1"></div>

    <h2>2- load react - Here below we load react and my component</h2>
    {/*<!-- ... other HTML ... -->*/}
    <p>Here is my component</p>

    <Component1 par1 = "Hi I am par 1"/>

    <WorkOnFuction par3 = "I am par3 " obj1 = {{a:"Propery A ",b:"Propery B"}} />


     </div>
  }

}
