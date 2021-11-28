import React, {useState} from "react";
import {doAlert, getList} from "./VerySimpleHoc2";
import {withRouter} from "react-router-dom";


export function HocMain(props) {
    return (
        <div>
            <h1>HOC main</h1>
            <a href={"https://reactjs.org/docs/higher-order-components.html"} target={"_blank"}>Docs </a>
            <p>A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are
                not part of the React API, per se. They are a pattern that emerges from React’s compositional
                nature.</p>
            <p>Concretely, a higher-order component is a function that takes a component and returns a new
                component.</p>
            <p>Mixin is another way to do it, but not it's not recommended </p>
            <CompAWithSpecialFunc name="Wrapped A"/>
            <CompBWithSpecialFunc name="CompBWithSpecialFunc"/>

            <NamesByHoc/>
            <CitiesByHoc/>
            <h4>HOC of react router: </h4>
            <ShowTheLocationWithRouter/>

            <p>With HOC you can define common logic to many examples.
                For further knowledge, see the logs, the code, and doc. </p>

            <h3>Convention</h3>
            <p>From <a
                href={"https://reactjs.org/docs/higher-order-components.html#dont-mutate-the-original-component-use-composition"}
                target={"_blank"}
            >this</a> subject
                and on –
                Those are advanced things, and convention for HOC. Consider pass over them and know well,
                If you are going to use it a lot.</p>
            <p> The most things are –</p>
            <ol>
                <li>- You should name the props with convention names.</li>
                <li>- You shouldn’t use HOC in render area of component.</li>
                <li>- You cannot get static functions from the wrapped component.</li>

            </ol>
            <h3>Some use cases</h3>
            <p>You can
                <a href={"https://www.smashingmagazine.com/2020/06/higher-order-components-react/#use-cases"}
                   target={"_blank"}
                >here</a> read about some use cases</p>
            <p>Here are some of my:</p>

            <ul>
                <li>- You have some components that get the data from the server,
                    sort it in some way and use it in some way, either in list or for make some calculation on that.
                    >>>
                    <ul>
                        <li>
                            So you can define a HOC that getThe data and do the
                            filtering to the state and pass it as a props to the wrapped component.
                        </li>
                    </ul>
                </li>
                <li>You got some kinds of inputs, that all send data to some server, and all have an email validation.
                </li>
                <li>
                    Actually I don’t sure. Maybe it’s in every shared component logic, but then – a lot of things, can
                    be done by children – etc. A thumb rule is if you have some component that do the same, or do things
                    by function in similar way – you can consider using HOC.
                </li>
                <li>
                    Example from my Statrup:
                    <ul>
                        <li>You have a email sender. You have some – one is for general subscribers, one is for
                            publishers, one is for registed users.
                        </li>
                        <li>In each component – you have function that get the user from the server, get the content,
                            and send the emails.
                        </li>
                        <li>So instead of creating this logic in each component you can by hook only to get the name of
                            the data. And make function that get the users,
                            get the relevant content, and define a function that implement this process.
                        </li>
                        <li>You pass to the wrapped component - the data (users, content) and the function .</li>
                        <li>The Enhanced component(EmailSenderScreen) only need to get the data as props, show it (the
                            content/list),
                            and button that use the props.sendEmail (that will pass through the HOC.
                        </li>
                        <li>In this way you
                            <ul>
                                <li>1- Can generic component to all kind of emailSender.</li>
                                <li>2- Leave the recurring logic out of them, and let the HOC doing this.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <h3>A Small exercise:</h3>
            <p>Do High Order Component which get data from <a href={"https://jsonplaceholder.typicode.com/"}>here
                (see resources)</a>, and allow the user to search about words in the content. </p>
            <p>Then do two generic components that one can filter by the data, and one can count the available data.
                Which will work by data name ("comment", "post" etc)</p>
            <p>Then make those two components work simply with the HOC, and show it on posts and on comments. </p>

            <a>Exercise solution (Todo) </a>


            <br/>
            <br/>
        </div>
    )
}

function CompA(props) {
    const [num, setNum] = useState(0);
    return (
        <div className={"small-comp"}>
            <h1>I am compA</h1>
            <p>num = {num}</p>
            <button onClick={() => setNum(num + 1)}>Click me !</button>
            <button onClick={props.func}>Hoc function</button>

        </div>
    )
}


function CompB(props) {
    const [num, setNum] = useState(0);
    return (
        <div className={"small-comp"}>
            <h1>I am compB</h1>
            <p>num = {num}</p>
            <button onClick={() => setNum(num + 1)}>Click me !</button>
            <button onClick={props.func}>Hoc function</button>


        </div>
    )
}


const CompAWithSpecialFunc = doAlert(
    CompA,
    () => {
        console.log("Provided function by compA")
    }
    ,
    "param1"
);


const CompBWithSpecialFunc = doAlert(
    CompB,
    () => {
        console.log("Provided function by compB");

    }
    ,
    "param1"
);


function Names(props) {
    const [num, setNum] = useState(0);
    return (
        <div className={"small-comp "}>
            <div className={"light-list"}>
                <h3>Names:</h3>
                {props.data.map((it, ke) => {
                    return <p>{it}</p>
                })}
            </div>


        </div>
    )
}


function Cities(props) {
    const [num, setNum] = useState(0);
    return (
        <div className={"small-comp "}>
            <div className={"dark-list"}>


                <h3>Cities:</h3>
                {props.data.map((it, ke) => {
                    return <p>{it}</p>
                })}
            </div>


        </div>
    )
}

const NamesByHoc = getList(Names, "names");
const CitiesByHoc = getList(Cities, "cities");

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    // };

    render() {
        const {match, location, history} = this.props;

        return <div>You are now at {location.pathname}</div>;
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);