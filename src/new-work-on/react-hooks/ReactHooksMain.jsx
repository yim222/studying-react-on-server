import React from "react";
import {Link, Route} from "react-router-dom";
import {DraftHooks, Example1} from "./sub-comps/DraftHooks";
import {GeneralCompsHooks} from "./sub-comps/GeneralComponents";

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
                <h2>What is and why - <a href = "https://www.quora.com/What-are-React-hooks"></a> here </h2>
                <p>In general - it other way to create the react application, using only function, define many states (hooks is like function that
                affect the state of the property of the component.) </p>
                <p>There is some cases in the FE development that make the things become complicated, and by those hooks some of those problems,
                with coding and the way things work become easier and simpler</p>

                <h3>This doesn't correct. U can do it, I don't know why it's happened like that. ---> U can't use hooks inside class component, U need to make them on single tree which I need to understand,
                Or to make workarounds like
                    <a target={'blank'} href = "https://www.google.com/search?newwindow=1&sxsrf=ALeKk01YaafKVRJQuR2Jsg25n83sOUr_mg%3A1597133191130&ei=h1EyX8fEB4Ox8gLe2KGYAg&q=react+hooks+and+class+on+same+tree+example&oq=react+hooks+and+class+on+same+tree+example&gs_lcp=CgZwc3ktYWIQAzoRCC4QsQMQgwEQxwEQowIQkwI6DgguELEDEIMBEMcBEKMCOggIABCxAxCDAToCCAA6CAguELEDEIMBOggILhDHARCjAjoLCC4QxwEQrwEQkwI6AgguOgQIABBDOgQIABAKOgQILhAKOgoILhDHARCjAhAKOgcILhBDEJMCOgQILhBDOgcILhANEJMCOgQILhANOgoILhDHARCjAhANOgoILhDHARCvARANOgQIABANOgUIABCRAjoFCAAQsQM6CwguELEDEMcBEKMCOgcIABCxAxBDOgUILhCxAzoICAAQsQMQkQI6CggAELEDEIMBEEM6BggAEBYQHjoICAAQFhAKEB46CAghEBYQHRAeOgUIIRCgAToHCCEQChCgAToECCEQFVCo9hdYz9QYYIHZGGgIcAB4AIAB1AGIAes3kgEGMC40NC4zmAEAoAEBqgEHZ3dzLXdperABAMABAQ&sclient=psy-ab&ved=0ahUKEwiHpJDk2JLrAhWDmFwKHV5sCCMQ4dUDCAw&uact=5
">
                        here :
                    </a>
                </h3>
                {/*<Example1/>*/}
                <h2>This is the main page of react-hooks studying</h2>
                React – Hooks live example:
                https://codesandbox.io/react-hooks<br/>
                React hooks docs
                https://reactjs.org/docs/hooks-intro.html



                <p><Link to = {this.props.match.url+'/draft'}>Link to draft</Link></p>
                <p><Link to = {this.props.match.url+'/general-comps-hooks'}>General Components</Link></p>

                <p>Link to other</p>
                <Route path={this.props.match.url + "/draft"} component={DraftHooks} />
                <Route path={this.props.match.url + "/general-comps-hooks"} component={GeneralCompsHooks} />

                {/*     render={(props) => <DetailsPage globalStore={globalStore} {...props} /> */}
            </div>
        )
    }
}