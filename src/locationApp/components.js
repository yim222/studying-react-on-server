'use strict';
import React, { Component } from 'react';

//here is the main app components.

/*
A Location has the following properties: Name, Address, Coordinates, and Category.
they should be state because the user should can change them
*/
 export class Location extends React.Component{//need to be able to export

  constructor(props){
    super();
    //set initial location
    this.state = {
      location:{
        name:"jjjj",
        address:"init address",
        coords:{
          x: 5,
          y:55
        },
        category: ""

       }

    }
    /*
    this.setState(
      //arrow function
      (state, props) =>({
        location: this.props.location
      })

    );
    */

    this.changeStateC = ()=>{
      /*
        this.setState((state, props)=>({

          location :  this.props.location

        }));
        */
    }

  }

  //If stateful u must those :

  componentDidMount(){
    /*
    this.setState((state, props)=>({

      location :  this.props.location

    }));
    */
    this.setState((state, props)=>({

      location :  this.props.location

    }));
    this.setState({a:"Greate Category"});


  }

  componentWillUnmount(){


  }

  render(){
    return <div
     style = {{border: "2px solid black"}}>
      <h2 >Location </h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th><th>address</th><th>coordinates</th><th>category</th>

          </tr>
          <tr>
            <td>{this.state.location.name}</td>
            <td>{this.state.location.address}</td>
            <td>{this.state.location.coords.x}</td>
          {/*  <td> lat: {this.state.location.coordinates.lat} lng : {this.state.location.coordinates.lng} </td>
          <td>{this.state.location.category}</td>*/}
          {/*<td>{this.state.location.category.name}</td>*/}
          <td><Category category = {this.props.location.category}/></td>

          </tr>
      </tbody>
      </table>
      <p>Ok I am yet control in that. Continue with studying, play on that, don’t delay a lot.
Just can’t understand how to pass states from one to another, but in props it’ s happen
</p>

    </div>

  }



}

const location2 = {
  name: "PT"

};
//render it to app
//ReactDOM.render(<Location location = {location2}/>,
//document.getElementById("comp1"));

export class Category extends React.Component{

  constructor(props){
    super();
    this.state = {
      category:{
        name: ""
      }
    };


  }
  componentDidMount(){

    this.setState  (function(state, props){
      return{
        category :  this.props.category
      };


    });

    /*
    this.setState((state, props)=>({

      location :  this.props.location

    }));
    */

  }
  componentWillUnmount(){}

  render(){
    return <div>

    <span>category Name : {this.state.category.name}</span>

    </div>

  }
}


export class EventsHandling extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, sum : 20};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.add2 = this.add2.bind(this);
    const pp = "<h1>Hi</h1>";
  }
  componentDidMount(){

  }

  componentWillUnmount(){

  }

  //this is method that set state.isToggle
  handleClick() {
   this.setState(state => ({
     isToggleOn: !state.isToggleOn
   }));
 }
/*
 add2(){
/*
   this.setState(state => (
     //like return method
     {
     sum: 500

   }

   ));
 }*/
/*
   this.setState(state => ({
     sum: 50
   }));
 }
*/
 add2() {//now working - cannot read property - Because u didn't make it bind...
  this.setState(state => ({
    sum: (state.sum + 2)
  }));
}

//trying the other way - without binding.
handleClick2 = () => {
  //  console.log('this is:', this);
    alert("Hi", this);
  }
handleClick3 (){
  //  console.log('this is:', this);
    alert("Hi - third way to make this.func not undefine. Inline calling the element\n"
  +"See inside ");
  }

  makeManyElements(i2){

    var viewStr = "";

    for(var i = 0; i <=i2; i++){
      viewStr += "<p>I am p number {i}</p>";

    }
    return viewStr;
  }

  render(){

    return <div className = "explain">
      <h2>Event Handling (תגובה לאירועים)</h2>
      <p>Problem : make reaction to events like press button in react</p>
      <p>U'll need to learn the theory and doing of the synthetic API
      https://reactjs.org/docs/events.html
      </p>
      <button onClick={this.handleClick}>
       {this.state.isToggleOn ? 'ON' : 'OFF'}
     </button> not working good. let's continue . Now work. The mounting cause the problem.(Not sure now works with mounting too...)
     <button onClick={this.add2}>
    add2 to number   {this.state.sum  }
    </button> not working good. let's continue . Now work. The mounting cause the problem.(Not sure now works with mounting too...)

    <p>And I am affected too from the pressing - {this.state.sum }</p>


    <p>Trying to use Synthetic Event in the event from the API - <br/>
    Didn't understand nothing, but I know u can pass it as par (e) or something.</p>

    <p style = {{textAlign : "left", padding : "50px"}}>to do :
    <br/>
    1- method that set state <br/>2- bind the element in the constructor <br/>3- insert it as html event . the parameter is
    the event itself (but how to pass values ? )- Answer - u pass value by calling methods that changeState value. As u will see further at inputs
    <br/>4- call it without () - {"{myFunction}"}
    <br/>
    5- Style u insert like that : {'style = {{textAlign : "left", padding : "50px"}}'}<br/>
    6- U can do it without binding the element with arrow function see handleClick2(exprimental -ניסיוני)<br/>
    <br/>
    7- Or in inner (inline )- see number 3 . but not recommended
    </p>

    <button onClick ={this.handleClick2} >trying to make without use in binding </button>here -https://reactjs.org/docs/handling-events.html

    <br/>
    <span style ={{padding : '60px', margin : '90px'}}>aaa</span>
    <p>lashdalsdhla</p>
    <button onClick={(e) => this.handleClick3(e)}>
       Click me - handle 3
     </button>
     <p>Wrote something about a loop. How to use loop. TO make many buttons ? how it's get making.</p>
     all and more are in : <br/>
     https://reactjs.org/docs/handling-events.html

     <div>

      {this.makeManyElements(10)}
     </div>
     <h1>Not working don't know how to do i . </h1>
     {this.pp}
     Anyway it's important u need to know how do ti .

    </div>


  }
}

export class ConditionalRendering extends React.Component{
  constructor(props){
    //this.hour = props.hour;
    super();
    this.state = {
      money: 0,
      checkMe: 9
    }
    //this.add2 = this.add2.bind(this);
    this.add200 = this.add200.bind(this);
    this.toggleCheckMe = this.toggleCheckMe.bind(this);
    this.alertOnce = this.alertOnce.bind(this);

    this.element1 = <p>Hi I am element from the constructor</p>;

    this.poverty  = <p>Hi I am poverty  from the constructor, I will dissapper when u will be millionaire</p>;
  }

  add200(){
    console.log("add200");
    this.setState(function(state, props){
      return {
        money : (this.state.money +200000)
      }
    });

  }

  toggleCheckMe(){
    console.log("toggle Check Me");

    this.setState(
      function(state, props){

        if (this.state.checkMe > 10){
          return {
            checkMe: 8
          }
        }
        else{

          return  {checkMe: 22}
        }

      }

    );


  }

  //function for make dissapper
  makeDisappeare(){
    if (this.state.money >= 1000000){

      this.poverty = null;
    }

  }

  alertOnce(){
    function handleClick(e){
      alert("Only One alert");
      e.preventDefault();//what after will be happen alertOnce
       //alert("two alert?");

    }


       return (
     <button href="#" onClick={handleClick}>
      Only once
     </button>
   );

  }




  render(){
    /*

    1 - make button that adding more value to states
    2- make function that checking it and return prespectively
    3- render it

    */
    var simpleElement = <p>I am simple Element from the scope of render </p>;
    let changingElement;
    const money = this.state.money; let hour = 15;
    if (money >= 1000000){

      changingElement = <p>Now U R a Millionaire !</p>
      hour = this.state.money /200000;
      //  alert("Hour = " + hour);


    }
    else{

      changingElement = <p>Continue working until the morning !</p>


    }
    this.makeDisappeare();



    return <div className = "explain">
      <h1>Conditional Rendering </h1>
      <h2>Hi Smaller</h2>
      <p>Here u also see how u can use JS in the render function (before the return statemant)</p>
      <p>check here how they done the function -<br/>https://codepen.io/anon/pen/QzdgpJ?editors=0010</p>
      <p>U can connect the states of parent to children props, by other local vars </p>
      <p>Doing jumping of 200,000 and after 1,000,000 it's say "Now u r millionarr "</p>
      <button onClick = {this.add200}>Add More money </button>
      <p> Balance = {this.state.money} $</p>
      {simpleElement}
      {changingElement}
      {this.poverty}

      <p>See here how I pass state to other component -
      What is interesting is that when the condition is false it's return to it's original value . It's like hold it. </p>


      <CheckHour hour = {hour}/>
      <p>Short way to make condition: THis good for just one case ,don't know if to some</p>
      <p>checkme = {this.state.checkMe} </p>
      <p>U will the element hi just if props.checkMe is more then 10 : is like expression <br/>

      {
        this.state.checkMe > 10 &&

        <p>Hi check Me is more then 10 </p>

      }
      </p>
      <p>It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.</p>

      <p>
        This is with ? operator - condition ? true : false.<br/>
        {this.state.checkMe > 10 ? (<span>checkMe is more then 10 </span>) : (<span>checkMe is less  then 10 </span>)}



      </p>
      <button onClick = {this.toggleCheckMe}>Add or substrcat from 10 </button>
      {this.element1}

      <p>All that in the render() is always rendered constantly. Intersting to understand how it's work
      and how it's not taking a lot resources.

      </p>
      <p>Do once - click here and just once it's give alert</p>
      <button onClick = {this.alertOnce}>Alert Once</button>
      {this.alertOnce()}
      <p>Not working, let's continue <br/>
      It doesn't work becaue prevent default is doing something else, not prevent alert. It's prevent the default doing of the program, like
      browsers  </p>
    </div>


  }

}

//it's good for little components
function Day(props) {

  var styleDay = {
    backgroundColor:'blue', color: 'white',
    width: '100px', height: '100px', position: 'absolute', left: '80px'
  }

  return <p style = {styleDay}>Day</p>;
}

function Night(props) {
  var styleNight = {
    backgroundColor:'black', color: 'yellow',
    width: '100px', height: '100px', position: 'absolute', left: '80px'
  }


  return <p style = {styleNight}>Night</p>;
}

export function CheckHour(props){

  const hour = props.hour;

  if(hour > 12){
    return <div><p>if(hour > 12)</p><Night/></div>
  }
  return <div><p>if(hour > 12)</p><Day/></div>

}
