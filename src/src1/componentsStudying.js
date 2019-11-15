'use strict'

//Define function-components - MUST Capatalize!
function Component1(props){

  return <p className = 'jsCode'>I am component 1 and this is my parameter and this is my parameter1 : {props.par1}</p>


}

//define it as class

class Component2 extends React.Component{

  render(){

     return <p className = "jsCode">I am component 2 and this is my pars - par1: {this.props.par1} par2: {this.props.par2} <br/>
      U can see at the code, that in that implementation I don't need to define the "props" but u need to use this.props.par2
     </p>;

  }

}

const element1 = <Component1 par1="Sara" />;//this code is creating react Elements from the component
const element2 = <Component2 par1="Val 1 " par2 = "44"/>;

//Here u represent it
//ReactDOM.render(component1("aa"),document.getElementById("compView1"));// -don't work well, don't read the args
ReactDOM.render(element1,document.getElementById("compView1"));

ReactDOM.render(element2, document.getElementById("compView2"));

//Let do more 1 and put them 3 together in one

class Component3 extends React.Component{
  constructor(){
    super();
    this.var1 = "I am var 1 I define as this.var1 and must be super before me. Also the props should pass as parameter, even though it's worked without this. ";
  }

  render(){

    return <p className = "jsCode">I am component3 my par3 is : {this.props.par3} and where is regualr var ?
    <br/> {this.var1} </p>

  }

}
//const element3 = <Component3 par3 ="WHat's up " />;

class ComponentMulti extends React.Component{

  render (){

    return <div >

            <Component1 par1 = "multiHerecomp1"/>
            <Component2 par1 = "yeah" par2 = "multiHerecomp2" />
            <Component3 par3 ="WHat's up !" />
          </div>


  }
}

ReactDOM.render(<ComponentMulti/>, document.getElementById("CompMulti"));

class Component5 extends React.Component{

  render(){

     return <p className = "jsCode">I am component 2 and this is my pars - par1: {this.props.par1} par2: {this.props.color1} <br/>
      U can see at the code, that in that implementation I don't need to define the "props" but u need to use this.props.par2
     </p>;

  }

}

const element5 = <Component5 par1="Val 1 " color1 = "pink"/>;

ReactDOM.render(element5, document.getElementById("compView5"));


//Make complext component

class FullChair extends React.Component{

  constructor(props){
    super();
    this.styleSetting = {
      backgroundColor: props.color1 ,//this.props.color1 -won't work {props.color1}-won't work
      border: "3px yellow",
      color: "blue"

    };
    this.manufacturerName = "DR. Gav";

  }

    render (){

      return  <div style = {this.styleSetting } className = "jsCode">
        <h1>Manufacturer Name: {this.manufacturerName}</h1>
        <p >color : {this.props.color1}</p>

        <p> person : {this.props.pName} || age :{ this.props.age }</p>
      </div>


  }


}


const element4 = <FullChair  color1 = "yellow"
pName ="Yehuda" age = {80}/>;// age = 80 won't work because it's expression

//renedring This
ReactDOM.render(element4, document.getElementById("compView4"));

class Person extends React.Component{

  constructor(props){
    super();

  }

  render (){

    return <div >


      <p> person : {this.props.pName} || age :{ this.props.age }</p>
    </div>


  }


}


class SimpleChair extends React.Component{
  constructor(props){
    super();
    this.styleSetting = {
      backgroundColor: props.color1 ,//this.props.color1 -won't work {props.color1}-won't work
      border: "3px yellow",
      color: "blue"

    };
    this.manufacturerName = "DR. Gav";

  }

  render (){

    return  <div style = {this.styleSetting } className = "jsCode">
      <h1>Manufacturer Name: {this.manufacturerName}</h1>
      <p >color : {this.props.color1}</p>

      <Person pName = {this.props.person.pName} age = {this. props.person.age }/>
    </div>


  }
}


const myPerson = {
  pName: "Izhar", age : 36

};
//rendering it
ReactDOM.render(
  <SimpleChair color1 = "red" person = {myPerson}/>,

  document.getElementById("compView6")

);




class WorkOn extends React.Component{
  constructor(props){
    super();
    this.var1 = "I am var 1"
  }
  render(){

    return <div className = "jsCode">

      <h2>Work on here </h2>

      <p >I am component3 my par3 is : {this.props.par3} - u must write <i>"this.props.parName"</i><br/> and where is regualr var ? -
      <br/> {this.var1} </p><br/>

      <p>It's like parameters - this.props.objectName. so this is obj.a {this.props.obj1.a} and this is obj.b {this.props.obj1.b}</p>

      <p>this is needed when it's class component. But when it's function ? </p>



    </div>
  }
}
const object1 = {
  a:"I am a",
  b: " I am b"

};
ReactDOM.render(<WorkOn par3 = "hi" obj1 = {object1}/>, document.getElementById("compViewWorkOn"))

function WorkOnFuction(props){

  var var1 = "I am var 1 on function component";
  return (
    <div className = "jsCode">

      <h2>Work on here function here </h2>

      <p >I am component3 my par3 is : {props.par3} - u must write <i>"props.parName"</i>- because it's function. <br/> and where is regualr var ? -
      <br/> {var1} </p><br/>

      <p>It's like parameters - this.props.objectName. so this is obj.a {props.obj1.a} and this is obj.b {props.obj1.b}</p>

      <p>this is needed when it's class component. But when it's function ? </p>

      <h1>This is the different. in function u access it as props, at component as this.props </h1>



    </div>


  );
}

ReactDOM.render(<WorkOnFuction par3 = "hi" obj1 = {object1}/>, document.getElementById("compViewWorkOnFunction"));
