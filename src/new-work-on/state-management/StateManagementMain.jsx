import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {RenderPropsPoc} from "./render-props-explaining/RenderPropsPoc";
import {ReactHooksMain} from "../react-hooks/ReactHooksMain";
import {ReduxMainView} from "./redux/redux-main";
import {ReactContextMain} from "./react-context/ReactContextMain";
import {HocMain} from "./hoc/Hoc";

export class StateManagementMain extends React.Component {

    constructor(props) {
        super();

    }

    render() {
        return (
            <div className="explain">
                <h2>State data sharing management in react </h2>
                <p>It's need to share data from component to component when you running a program </p>
                <p>With react you have some options - technique, patterns </p>


                <Router>
                    <div className="router-area">
                        <ol>
                            <li>One way data-flow - Like above in the <a href="../explain3/">managing state in parents</a> section
                                described. This is the basic option.
                            </li>
                            <li><Link to="/state-management-react/render-props-explanation/">Render - props </Link></li>
                            <li><Link to="">React hooks - TODO . U have example in the todos project.  </Link></li>
                            <li><Link to="/state-management-react/hoc">HOC - TODO  </Link></li>
                            <li><Link to="/state-management-react/react-context-explanation/">React context - I don't sure it's related. - TODO  </Link></li>

                            <li><Link to="/state-management-react/redux-explanation/">Redux - maybe the most common and expanded way</Link></li>


                        </ol>
                        <Route path="/state-management-react/render-props-explanation" component={RenderPropsPoc}/>
                        <Route path="/state-management-react/redux-explanation/" component={ReduxMainView}/>
                        <Route path="/state-management-react/react-context-explanation/" component={ReactContextMain}/>
                        <Route path="/state-management-react/hoc/" component={HocMain}/>



                    </div>
                </Router>


            </div>


        )

    }
}