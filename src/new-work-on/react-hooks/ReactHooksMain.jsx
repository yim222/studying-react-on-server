import React from 'react';
import {Link, Route} from "react-router-dom";
import {DraftHooks} from "./sub-comps/DraftHooks";

export class ReactHooksMain extends React.Component {
    constructor(props) {
        super();

    }
    componentDidMount() {
        console.log("ReactHooksMain did mount - " , this.props);
    }

    render(){
        return(
            <div className='container-2'>
                <h1>React-Hooks</h1>
                <h2>This is the main page of react-hooks studying</h2>

                <p><Link to = {this.props.match.url+'/draft'}>Link to draft</Link></p>
                <p>Link to other</p>
                <Route path={this.props.match.url + "/draft"} component={DraftHooks} />
            {/*     render={(props) => <DetailsPage globalStore={globalStore} {...props} /> */}
            </div>
        )
    }
}