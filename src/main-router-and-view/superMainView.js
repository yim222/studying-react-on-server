//import react, MainView
import React from "react";
import {MainView} from '../locationApp/mainView.js';
import {MainView2} from '../locationApp/mainView2.js';
import {GoogleMapsReactStudying} from '../explanations/GoogleMapsReactStudying';
import  MapContainer from '../explanations/GoogleMapsReactStudying';
import {FinalSummary} from '../explanations/FinalSummary';
import {LittleAppExample} from '../explanations/LittleItemsApp'
import LearningExample from '../explanations/LearningExample'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {RouterExplanation, TestTemp1} from '../locationApp/router1.js';
import {testMe as testRouting, ShowWeekDayByRoute} from '../generalApp/components1/routingComponents/ShowWeekDay.js'
import {FormForGetMonthDayWeekDay } from '../generalApp/components1/ui-comps-1/components1.js'
import{ Main } from '../tech500-exercise/components/main.js'
import {ErrorHandlingMain} from "../new-work-on/error-handling";
import {ReactHooksMain} from "../new-work-on/react-hooks/ReactHooksMain";
import {StateManagementMain} from "../new-work-on/state-management/StateManagementMain";





//create the component..
export class SuperMainView extends React.Component{


  render(){
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
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/screen1/">Basic explanation</Link>

          </li>
          <li>
            <Link to="/screen2/">Scree 2 - more explanatons</Link>
          </li>

          <li>
            <Link to="/router1/">Routing explanatons</Link>
          </li>

          <li>
            <Link to="/explain3/">managing state in parents, Like items, and how to tell parent things from child explanatons</Link>
          </li>
          <li>
            <Link to="/error-handling">Error Handling in React</Link>
          </li>
          <li>
            <Link to="/explain4/">Learning example</Link>
          </li>

          <li>
            <Link to="/gmreact/">Google Maps React Studying</Link>
          </li>
          <li>
            <Link to="/finalsummary/">Final summary</Link>
          </li>
          <li>
            <Link to="/days-list">Day list from main - Global params link </Link>
          </li>
          <h3>*When U did a path with params like the below - Don't forget that U must pass it a paramters. </h3>
          <li>
            <Link to="/routing-comp/weekBymonthDay?startingMonthDay=4&monthDay=23">Test routing comp</Link>
          </li>
          <li>
            <Link to="/formExample">The form should work - form example </Link>
          </li>
          <li>
            <Link to="/react-hooks">React Hooks</Link>
          </li>
          <li>
            <Link to="/state-management-react">State-management-advanced Techniques React</Link>
          </li>
          <li>
            <Link to="/TECH500">TECH500</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/screen1/" component={MainView} />
      <Route path="/screen2/" component={MainView2} />
      <Route path="/router1/" component={RouterExplanation} />
      <Route path="/explain3/" component={LittleAppExample} />
      <Route path="/explain4/" component={LearningExample} />
      <Route path="/gmreact/" component={GoogleMapsReactStudying} />
      <Route path="/finalsummary/" component={FinalSummary} />
      <Route path="/days-list/" component={TestTemp1} />
      <Route path="/days-list/" component={TestTemp1} />
      <Route exact path="/routing-comp/:id"
        render={(match,location,history) => ShowWeekDayByRoute(match,location,history)}
      />
      <Route path="/formExample" component={FormForGetMonthDayWeekDay} />
      <Route path="/TECH500" component={Main} />
      <Route path="/error-handling" component={ErrorHandlingMain} />
      <Route path="/react-hooks" component={ReactHooksMain} />
      <Route path="/state-management-react" component={StateManagementMain} />






      <div style = {{height:"500px"}}> </div>




    </div>
  </Router>
  );
    const elStyle = {
      border : "5px solid blue"
    }
    return <div style = {elStyle}>
      <h1>This is the main View of the app</h1>
      <a href= "https://reacttraining.com/react-router/web/guides/quick-start">
        explanation to react-router
      </a>
      <p>After u define here the routing u just can use regualr href for routing,</p>
      <p>here is the routing to the app</p>
      {AppRouter()}

    </div>
  }
}
