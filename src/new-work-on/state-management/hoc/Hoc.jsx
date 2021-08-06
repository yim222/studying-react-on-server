import React, {useState} from "react";
import {doAlert, getList} from "./VerySimpleHoc2";


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
            <CompAWithSpecialFunc name = "Wrapped A"/>
            <CompBWithSpecialFunc name = "CompBWithSpecialFunc"/>

            <NamesByHoc/>
            <CitiesByHoc/>

            <br/>
            <br/>
        </div>)
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
    },
    "param1"
);


const CompBWithSpecialFunc = doAlert(
    CompB,
    () => {
        console.log("Provided function by compB");

    },
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
