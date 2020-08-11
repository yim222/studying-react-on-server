import React from 'react';
import {Link, Route} from "react-router-dom";
import {DraftHooks, Example1} from "./sub-comps/DraftHooks";

export class ReactHooksMain extends React.Component {
    constructor(props) {
        super();

    }
    componentDidMount() {
        console.log("ReactHooksMain did mount - " , this.props);
        console.log(React.version);
    }

    render(){
        return(
            <div className='container'>
                <h1>React-Hooks</h1>
                <h3>U can't use hooks inside class component, U need to make them on single tree which I need to understand,
                Or to make workarounds like
                    <a target={'blank'} href = "https://www.google.com/search?newwindow=1&sxsrf=ALeKk01YaafKVRJQuR2Jsg25n83sOUr_mg%3A1597133191130&ei=h1EyX8fEB4Ox8gLe2KGYAg&q=react+hooks+and+class+on+same+tree+example&oq=react+hooks+and+class+on+same+tree+example&gs_lcp=CgZwc3ktYWIQAzoRCC4QsQMQgwEQxwEQowIQkwI6DgguELEDEIMBEMcBEKMCOggIABCxAxCDAToCCAA6CAguELEDEIMBOggILhDHARCjAjoLCC4QxwEQrwEQkwI6AgguOgQIABBDOgQIABAKOgQILhAKOgoILhDHARCjAhAKOgcILhBDEJMCOgQILhBDOgcILhANEJMCOgQILhANOgoILhDHARCjAhANOgoILhDHARCvARANOgQIABANOgUIABCRAjoFCAAQsQM6CwguELEDEMcBEKMCOgcIABCxAxBDOgUILhCxAzoICAAQsQMQkQI6CggAELEDEIMBEEM6BggAEBYQHjoICAAQFhAKEB46CAghEBYQHRAeOgUIIRCgAToHCCEQChCgAToECCEQFVCo9hdYz9QYYIHZGGgIcAB4AIAB1AGIAes3kgEGMC40NC4zmAEAoAEBqgEHZ3dzLXdperABAMABAQ&sclient=psy-ab&ved=0ahUKEwiHpJDk2JLrAhWDmFwKHV5sCCMQ4dUDCAw&uact=5
">
                        here :
                    </a>
                </h3>
                {/*<Example1/>*/}
                <h2>This is the main page of react-hooks studying</h2>

                <p><Link to = {this.props.match.url+'/draft'}>Link to draft</Link></p>
                <p>Link to other</p>
                <Route path={this.props.match.url + "/draft"} component={DraftHooks} />
            {/*     render={(props) => <DetailsPage globalStore={globalStore} {...props} /> */}
            </div>
        )
    }
}