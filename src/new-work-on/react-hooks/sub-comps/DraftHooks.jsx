import React from 'react';
import {useState} from 'react';


export class DraftHooks extends React.Component{
    constructor(props) {
        super();
    }

    render(){
        return(
            <div>
                <h3>
                    Draft React Hooks
                </h3>
                <Example1/>
            </div>
        )
    }
}

function Example1 () {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}