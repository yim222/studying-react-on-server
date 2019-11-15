import React from 'react';
import {StaticVersion} from './finalSummaryApp/StaticVersion'
import {InteractiveVersion} from './finalSummaryApp/InteractiveVersion'


//Little example app for learning related things.
 export class FinalSummary extends React.Component{//need to be able to export

  constructor(props){
    super();
    //uuid reminder
    this.idGenerator =  require('uuid/v1');



  }

  //If stateful u must those ?:

  componentDidMount(){
  }

  componentWillUnmount(){


  }

  render(){
    return(
      <div>
        <h1><a href = "https://reactjs.org/docs/thinking-in-react.html" >Final Summary </a> </h1>

        <StaticVersion></StaticVersion>
        <InteractiveVersion/>

      </div>
    );

  }
}
