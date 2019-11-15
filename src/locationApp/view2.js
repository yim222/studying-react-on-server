import React from 'react';

export class MainView2 extends React.Component{

  constructor(props){
    super();

  }
  render(){


    return  <div className =  "explain">
      <h1>I am Main View 2 </h1>
      <p>Trying to route to other screen without inner setting to router:</p>
      <h1>?</h1>
      {/*// <Link to="/screen1/">Basic explanation</Link>*/}
    </div>
  }

}
