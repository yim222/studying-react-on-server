import React, { Component } from 'react';

export class Component3 extends React.Component{

  render(){

    return(
      <div className = "explain">
        <h1>I am Component3 , that the things I have in my file : </h1>
        <Composition/>



      </div>
    )
  }

}


class Composition extends React.Component{

  render(){
    return(
      <div>
        <h1>Composition NOT inheritance</h1>
        <h2>If you want create more specify component, they don't suggest inheritance,
          U have those options : </h2>
          <p>https://reactjs.org/docs/composition-vs-inheritance.html</p>
          <GeneralEvent leftText = "Dynamic text to my left" rightText = "Dynamic text to my right">
            What I wrote here is consider as children props
          </GeneralEvent>

          <h3>This is specified component:</h3>
          <MySpecifiedEvent/>
          <p>General "extends" won't work ( U can try to uncomment the "ChildComp" in the code)
            and also not reasonable.<br/>
            The render is cant be modified in that way,
            and about new functions, they recommended to use function from
            outer module, (if doing in the above way isn't enough),
          </p>
          {/*<ChildComp/>*/}

      </div>
    )
  }
}


function GeneralEvent(props){
  const styles = {

    childrenStyle : {
      backgroundColor: 'yellow',
      fontSize: '15px'
    },
    leftSide:{
      width: "50%",
      left:"0px",
      backgroundColor:"purple",
      color: "white",
      display: "inline",
      float: "left"

    },
    rightSide :{
      width: "50%",
      right: "0px",
      backgroundColor: "green",
      display: "inline",
        float: "left"
    }

  }
  return(
    <div>
      <h2> I am general event component</h2>
      <p>U can insert here things like 2 tags component,
        and all will be display here at the below </p>

        <div style = {styles.childrenStyle}>{props.children}</div>

        <div style = {{width: "100%", padding: "50px", backgroundColor: "blue"}}>
          <span >
            <h2  style = {styles.leftSide}>Here is props to left side : <br/>
              {props.leftText}
            </h2>
          </span>

          <span >
            <h2 style = {styles.rightSide}>And Here is props to right side : <br/>
              {props.rightText}
            </h2>

          </span>


        </div>

    </div>
  )
}

function MySpecifiedEvent(){

  var message = " I am message var !!!";
  var withMessage = `look how here I insert JS var in a string, by the $sign : ${message}`;

  return (
    <div>
      <h3>Look I am specified Event component .<br/>
      Alsp, notice that we create component without props, if we don't need it </h3>
      <GeneralEvent leftText = "boys" rightText = "girls">
        This is Singles Event description:
        <p>Btw - good tip about es6 :
          <br/>
          {withMessage}
          <br/>
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        </p>
      </GeneralEvent>

    </div>
  )
}

class ChildComp extends GeneralEvent{


}

//This should be state less
export class Day extends React.Component{
  constructor (props){
    super();


  }

  render(){
    let days = ['Rishon', 'Sheni', 'Shelishi', 'Reviee', 'Hamishi', 'Shishi', 'Shabbat'];

    return(
      <div>
        <h3>Day is {days[this.props.code-1]} day (code  number is {this.props.code})</h3>
      </div>
    )
  }
}
