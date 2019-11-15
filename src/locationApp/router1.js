import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {MainView} from './mainView.js';
import {Day} from './components3';
import {MyForm} from './makeForm';
export class RouterExplanation extends React.Component{

  constructor(props){
    super();
    this.state ={
      dayId: null
    }

  }

  //functions
  onChangeInput = (ev) =>{
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  render(){

    const AppRouter1 = () =>(
    <Router >
      <div>
        <Link to = "/router1/">This page - here</Link><br/>
        <Link to = "/route500/">link to screen 1 from here </Link><br/>
        -it's not work so well but if u manage all from root component it's should work
        <Link to = "/screen1/" >Counte on the root setting - ? not work with Link </Link><br/>
        <Route path = "/route500/" component = {MainView}/>





      </div>
    </Router>

    );

    //from the basic example :
    const AppRouter2 = () => (
    <Router>
      <div>
        {Header()}

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/myNested" component={MyNested} />
        <Route path="/ccc" component={MyNested} />

      </div>
    </Router>
  );

  //Day router components
  const DaysRouter = () => (


    <Router>
      <div>
        <Link to = "/day" >Days list </Link>
        <div>
          <Route path = "/day" component = {DayList}/>

        </div>
      </div>
    </Router>
  )


const DayList = ({match})=>{
    return (
      <div>
      {console.log("hi ? ", match)}

        <Router>
          <div>
          <Link to = {`${match.url}/1`} >One </Link>
          <Link to = {`${match.url}/2`} >Two </Link>
          <Link to = {`${match.url}/3`} >Three </Link>

          <Route path={`${match.url}/:dayCode`} component={DayDisplay} />
          <Route
            exact
            path={match.path}
            render={() => <h3>Choose a day.</h3>}
          />
          </div>
        </Router>


      </div>
    )
  }



  const DayDisplay =({match})=>{
    return (

      <div>
        {console.log("hi2 ? ", match.params)}

        <Day code = {match.params.dayCode}/>


      </div>
    )
  }


  //This is a example to components...
  const Home = () => <h2>Home</h2>;
  const About = () => <h2>About</h2>;
  const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
  const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
  );
  const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
    <li>
      <Link to="/myNested">My Nested Routes</Link>
    </li>
    <li>
      <Link to="/ccc">My Nested Routes with match of ccc</Link>
    </li>
  </ul>
  );

  const OneNested = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
  const MyNested = ({match}) => (
    <div>
    {console.log("match", match)}
      <h2>My nested with pars</h2>
      <ul>
        <li>
          <Link to={`${match.url}/par1`}>my par1</Link>
        </li>
        <li>
          <Link to={`${match.url}/par2`}>my par2</Link>
        </li>

    </ul>
    <Route path={`${match.path}/:id`} component={OneNested} />

    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a one nested.</h3>}
    />

    </div>


  );
    return <div className = "explain">

    <h1>I am Router 1. explanation of the routing. </h1>
    <span>I can define from where I want - include here - routing for all the app </span>
    {AppRouter1()}
    <a href = "https://reacttraining.com/react-router/core/guides/philosophy">The Main DOC
    of routing </a>
    <p>There is some theory that should be studied sometime</p>

    <p>Ok Let's see about nested routing, and continue </p>
    {AppRouter2()}{/*calling to the functions= */}

    <h3>match is keyword. u must use it  (It's been tested a few time. U should learn the class deeply. Any way if U want a proof
    just replace all the match to other and see how it makes problems. )</h3>
    <p>TODO - example : <br/>
    Exact path is just this path, with now other sub paths, but not exact if it’s start with that. <br/>
     /name/blalba
It’s will also route to there.
If u won’t define / as exact any other route will go to there....(maybe it's up to the sequence of defining)
    </p>
    <p> Think that for nested paths u must create sub component too ? <br/>
    Answer: Not, But you need for match work to wrap inside Router - the LinkTo and the Route together!
    </p>
    <h2>Routing from array - direct routing and with form</h2>
    <p>This is Day component - it has those properties : number (1), correspond name = (Rishon)<br/>Choose 1 from 1-7</p>
    <input name = "dayId" placeholder = "1 to 7" onChange = {this.onChangeInput} />

    <Day code = {1} />
    <h2> Here U can change it by the input above : </h2>
    {(this.state.dayId)? <Day code = {this.state.dayId} /> :  <h3>dayId  NOT defined</h3>}

    <p>{this.state.dayId}</p>
    <p>Challenge - make a  router of component that contain  of some buttons of days (use nested routing), <br/>DONE !
    </p>
    <DaysRouter/>
    <br/>
    <br/>
    <p>There is like bug when U put the router close to the edge of the screen it's not work well
    <br/>
    Challeng after the above :  and then do it with form that take open new page with the day .

    </p>
    <p>Trying to make a regular form to something from homepage <br/>
      It seems that for route will be global (and not just availabe from one component like the above route - try by yourself )<br/>
      U must set it on the app <br/>
      this is the route  : http://localhost:3000/screen1/
    </p>
    <form action = "http://localhost:3000/screen1/">
      <input type = "text" name = "ppp" value = "1"/>

      <input type = "submit" value = "submit ... "/>
    </form>
    <p>I success to make a moving to other url, but the parameter is differents. U need to insert this in action.
      But U need to think how u want it will pass.
      THis is what u need, with name values. This is how the form will work.
      And the booking sites also work like that I think
    </p>

    <MyForm/>

    <br/>Some spacing.... <br/>


  </div>
  }
}

//End of router
export const TestTemp1 = ({match})=>{
    return (
      <div>
      {console.log("hi ? ", match)}

        <Router>
          <div>
          <Link to = {`${match.url}/1`} >One </Link>
          <Link to = {`${match.url}/2`} >Two </Link>
          <Link to = {`${match.url}/3`} >Three </Link>

          <Route path={`${match.url}/:dayCode`} component={DayDisplay} />
          <Route
            exact
            path={match.path}
            render={() => <h3>Choose a day.</h3>}
          />
          </div>
        </Router>


      </div>
    )
  }



    const DayDisplay =({match})=>{
      return (

        <div>
          {console.log("hi2 ? ", match.params)}

          <Day code = {match.params.dayCode}/>

          <p>For make it global u need to connect the last router to global routing. U MUST use in "/" before the params</p>

        </div>
      )
    }
