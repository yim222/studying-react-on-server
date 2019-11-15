//Trying to solve some problems

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {MainView2} from "./view2.js";

export class MainViewSolvingProbelms extends React.Component{



  render(){


    return <div className = "explain">

      <h1>Solving Problem</h1>

      <h2>Here I'm trying to solve some problems that uprised with the processes</h2>

      <h3>I am insert it from the file of this component. That save me the need to export and
      import each new, and changing the invoke to the components (Or how it's called. )
      </h3>

      <StateObjects/>
      <ReactRoute1/>



  </div>
  }

}


class StateObjects extends React.Component{


  constructor(props){
    super();


  }


  render(){

    return<div>

      <h1>Objects in states problem</h1>

      <p>This solution discuss in the problem of data note merging when updating states.<br/>
        In regular state with a, b, c ... properties, when I update one property with set state,
        the other values stay as it is, and the changed value merged into the state.<br/>
        Unlike that when it's object. When I change the object value it's override all the value.<br/>
        What I have understand is that the state is just work like that, maybe it's because the idea of then
        state method, that I am missing. Anyeway...
        Let do example : I have
        two components representation to shapes array.
        in one is all as vars, and in one every one is obejcts.

        lets say there is rectangleA, rectangleB, triangleA, triangleB, triangleC. The Sides of two shapes- Square and Triangle.
        <br/>
        SO the SMART way should be to define differents object to each shape.
        The less smart and less organize way is to define all together.

        That's the problem, in the smart way problems happenings.
square

       </p>

       <p>First lets see the "all together" way </p>


       <Shapes1/>

       <Shapes2/>

       <Shapes3Solution/>



       <h3>Other insight - apparently u can't define in function states. when
       component is function u can do it only stateless </h3>
       <UserDefinedComp/>
    </div>


  }
}



class  Shapes1 extends React.Component{

  constructor(props){
    super();
    this.state = {

      rectangleA: 50,
      rectangleB: 100,
      triangleA: 20,
      triangleB: 30,
      triangleC: 40

    }

    //regist functions
    this.changeSomething = this.changeSomething.bind(this);

  }

  //Functions:

  changeSomething(ev){

    this.setState({
      rectangleA : ev.target.value
    });

  }



//Render!
  render(){


    return <div>


        <h3><u>All together shapes</u></h3>

        <p>

        Rectangle A = {this.state.rectangleA}, Rectangle B = {this.state.rectangleB}<br/>

        TriangleA = {this.state.triangleA},  TriangleB = {this.state.triangleB},  TriangleC = {this.state.triangleC}

        </p>
        <p>Ok that's the values let change them now. U can see inside the code that's that all properties
        of state, not of other nested obejct</p>


        <span>Trying to change something (rec1)</span>
        <input type = "number" value = {this.state.rectangleA} onChange = {this.changeSomething}
         name = "rectangleA"/>

         <span>Work! so now I'll copy this and do at as object</span>


    </div>;
  }

}


class  Shapes2 extends React.Component{

  constructor(props){
    super();
    this.state = {
      rectangle:{
        a:55,
        b: 66
      },
      triangle:{

        a: 70,
        b:80,
        c:64
      },

      boringVar: "I am just single boring var on state . How do I affected, \n"
      +"from all that mess ??!!!!#$%#@#"


      /* before was :
      rectangleA: 50,
      rectangleB: 100,
      triangleA: 20,
      triangleB: 30,
      triangleC: 40
      */

    }

    //regist functions
    this.changeSomething = this.changeSomething.bind(this);
    this.createNew = this.createNew.bind(this);

  }

  //Functions:

  changeSomething(ev){

    this.setState({
      rectangle:{
      //  ...this.state.rectangle, u here this is the solution!.
        a:ev.target.value
      }
      //  rectangle.a :ev.target.value - won't work at all...
    });

  }

  createNew(){
    const triangle = {
      a: 6,
      b:2,
      c:7
    }

    this.setState({
      //...this.state.triangle,
      triangle: triangle
    });


  }



//Render!
  render(){


    return <div>


        <h3><u>Shapes 2 - Each shape in object</u></h3>

        <p>

        Rectangle A = {this.state.rectangle.a}, Rectangle B = {this.state.rectangle.b}<br/>

        TriangleA = {this.state.triangle.a},  TriangleB = {this.state.triangle.b},  TriangleC = {this.state.triangle.c}
        <br/>
        simple var = {this.state.boringVar} - not get hramed. We can say that the problem is only inside the obejct...

        </p>
        <p>Ok that's the values let change them now. U can see inside the code that's that all properties
        of state, not of other nested obejct</p>


        <span>Trying to change something (rec1)</span>
        <input type = "number" value = {this.state.rectangle.a} onChange = {this.changeSomething}
         name = "rectangleA"/>

         <span>U see how the B loosing it's values ?</span>
         <span>Now let's do check what's happen if I change all the object :  </span>
         <button onClick = {this.createNew}>Create new triangle</button>

         <p>Ok found the solution but the question is if this is problematic ? to write like that </p>
         <p>U here - next time : 1- see the solution and demonstrate it. 2- Read about that a little (15-20 minutes) 3- Continue.
         </p>

         <h4>Well that's not change the other properties, and that already <u>good solution </u>
          because u can seperate all to objects, and not mixing them.
         But yet inside the objects, u have problem because u r loosing all the merging
         flexity (and now in each change u need to worry about the whole world)
         </h4>



    </div>;
  }

}


class  Shapes3Solution extends React.Component{

  constructor(props){
    super();
    this.state = {
      rectangle:{
        a:55,
        b: 66
      },
      triangle:{

        a: 70,
        b:80,
        c:64
      },

      boringVar: "I am just single boring var on state . How do I affected, \n"
      +"from all that mess ??!!!!#$%#@#"


      /* before was :
      rectangleA: 50,
      rectangleB: 100,
      triangleA: 20,
      triangleB: 30,
      triangleC: 40
      */

    }

    //regist functions
    this.changeSomething = this.changeSomething.bind(this);
    this.changeSomething2 = this.changeSomething2.bind(this);
    this.createNew = this.createNew.bind(this);

  }

  //Functions:

  changeSomething(ev){

    this.setState({
      rectangle:{
       ...this.state.rectangle, // this is the solution!. -but this is not rely able so
       //I'm trying something else
        a:ev.target.value
      }
      //  rectangle.a :ev.target.value - won't work at all...
    });

  }
  changeSomething2(ev){
    //this.setState((state, props)=>({  location :  this.props.location}));
      //var value = ev.target.value;
      //create the old object :
      var prevState1 = this.state;
      //insert the new value
      prevState1.rectangle.a = ev.target.value;
      this.setState((prevState1 ,props)=>({

        //  rectangle.a :ev.target.value - won't work at all...
      }));
      //I am new to react, but this seems wrong;
      //handleChange should call
      //this.setState( (prevState, props) => ({ ... // use prevState.point }) ) instead.
      //– Sheljohn Apr 21 '18 at 16:14

    }

  //

  createNew(){
    const triangle = {
      a: 6,
      b:2,
      c:7
    }

    this.setState({
      //...this.state.triangle,
      triangle: triangle
    });


  }



//Render!
  render(){


    return <div>

        <h1 style = {{color: 'black'}}>There Is Solution:</h1>
        <h3><u>Shapes 3 - Each shape in object - work well</u></h3>
        <p>Well it's very simple solution, just adding one line of code in the setState syntax,<br/>
        Above the line of the object : <br/>
        <pre>
          ...this.state.triangle,<br/>
          triangle: triangle



        </pre>
        instead of :

        <pre>

          triangle: triangle



        </pre>




        see inside the syntax exactly
      </p>
        <p>

        Rectangle A = {this.state.rectangle.a}, Rectangle B = {this.state.rectangle.b}<br/>

        TriangleA = {this.state.triangle.a},  TriangleB = {this.state.triangle.b},  TriangleC = {this.state.triangle.c}
        <br/>
        simple var = {this.state.boringVar} - not get hramed. We can say that the problem is only inside the obejct...

        </p>
        <p>Ok that's the values let's change them now. U can see inside the code that's it's seperated to
          differents objects all </p>


        <span>Trying to change something (rec1)</span>
        <input type = "number" value = {this.state.rectangle.a} onChange = {this.changeSomething}
         name = "rectangleA"/>

         <span>U see how now  B doesn't loosing it's values ... it's because the little change that I made on it.</span>

         <h3>But this approach not recommended due to probelm with the asynchronous issues<br/>
       THis is other approach that making it with setState functions. see the way<br/>
     in onChange2 </h3>

              <input type = "number" value = {this.state.rectangle.a} onChange = {this.changeSomething2}
               name = "rectangleA"/>
         <br/>
         <h1>But -  The Best solution is the simplest - Just Don't do it</h1>


         <p style= {{color:'black'}}>After checking more info about this. I saw that it's consider to not good practice,
         and it could cause problem with the asynchronous states and all that.
         so it's better to define subProperty in the name ,
         and apparently each component should be by itself not containing a a lot of sub-Objects
          see here - https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react/51136076#51136076 <br/>
          and here - https://stackoverflow.com/questions/24898012/react-js-setstate-overwriting-not-merging/41391598#41391598

        </p>
        <h2>It's important insight on react, it use shallow - chaeck only the 1st level, and then rendered. ,
        in big objects it can do a perforamance issues. </h2>
        <p>{"this.setState((stateNewValue ,parValueForUseInside)=>({    }));"}</p>
        <p>Important to learn it </p>


         <span>Now let's do check what's happen if I change all the object :  </span>
         <button onClick = {this.createNew}>Create new triangle</button>

         <p>Ok found the solution but the question is if this is problematic ? to write like that </p>


         <h4>Well that's not change the other properties, and that already <u>good solution </u>
          because u can seperate all to objects, and not mixing them.
         But yet inside the objects, u have problem because u r loosing all the merging
         flexity (and now in each change u need to worry about the whole world)
         </h4>



    </div>;
  }

}



function UserDefinedComp (props){

  var stateee = {
    a:"ggg"

  }

  return (
    <div>
      <p>I am only function components (user defined), can I own State (please) ?</p>
      <p>apparently No</p>

    </div>


  )
}

export class ReactRoute1 extends React.Component{

  constructor(props){
    super();

  }

  render(){


    return <div className ="exaplain">

      <h1>How to use react-router ? </h1>
      <p>First - install it on the project library :
        https://www.npmjs.com/package/react-router-dom
      <br/>

      </p>
      <pre>
      npm install --save react-router-dom
      </pre>
      <AppRouter/>

      <span>It's working but the other that in the page are shown. How do I create new page ? </span>


    </div>
  }



}

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/view2/">view 2</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/view2/" component={MainView2} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);
//export default AppRouter;
