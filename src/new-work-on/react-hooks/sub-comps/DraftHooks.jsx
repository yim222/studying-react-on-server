import React from 'react';
import {useState, useEffect} from 'react';
import {ClassicTitleCounter, MainClassicsContainer} from "../classic-comps/Comps1";


export class DraftHooks extends React.Component{
    constructor(props) {
        super();///sss
        this.state={
            show: true
        }

        setTimeout(()=>this.setState({show: false}),
            20000);
        //destructing array
        let arr = ['first', 'second'];
        let [one, two] = arr;
        console.log("one = " + one + " two = " + two);
    }

    render(){
        return(
            <div>
                <h3>
                    Draft React Hooks
                </h3>
                <h1>U here- continue with the word document</h1>
                <Example1/>
                <Example3/>
                <ClassicTitleCounter/>
                <p>If U remove the  clearInterval(invl); from example 4 the counter
                below will keep running. Also, see example 4 proper there are there important explanation.
                (it will unmount in 20 seconds... )</p>
                <div>{this.state.show && <Example4/>}</div>

                <h3>Rules of Hooks (hooks are not the component but the functions
                used to hook, like useState, useEffect</h3>
               <p> Hooks are JavaScript functions, but they impose two additional rules:</p>

                <p>Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
                </p>
                 <p>  Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)
                 </p>
                <Example5/>

                {/*<Try1/>*/}
                <p>********************* END OF EXPLANATIONS</p>
                <p>The hook let you hook the state, and define function for change it. </p>
                <p>*********************<br/>MAJOR BUILT-IN HOOKS :</p>
                <ul>
                    <li>useState - the function that defining the state value and the function to change it. From the doc: <br/>
                        Returns a stateful value, and a function to update it.
                    </li>
                    <li>useEffect - Use like componentDid Mount and Updated - from the doc:<br/>
                    </li>
                </ul>

                <MainClassicsContainer/>
            </div>
        )
    }
}

 export function Example1() {
     // Declare a new state variable, which we'll call "count"
     const [count, setCount] = useState(0);
     const [propName, funcName] = useState('initial value');

     function changeValue(){
         funcName('newValue');
     }

     return (
         <div>
             <p>You clicked {count} times !!!!</p>
             <button onClick={() => setCount(count + 1)}>
                 Click me
             </button>
             <p>My hook = {propName}</p>
             <button onClick={changeValue}>Change value</button>
         </div>
     );
 }

function Example3() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    useEffect(()=>{
        console.log("another useEffect");
    })
    function func() {
        document.title = `what clicked ${count} times???`;

    }

    return (
        <div>
            <p>Use effect is like automatic update like component didUpdate</p>
            <p>See that U need to use the signature of that, not to build a function.<br/>
            Like useEffect(()=>'' }
                and of U return from that this will happen when component unmount)</p>
            <p>You clicked {count} times - changing the title </p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>U can do some use effects. </p>
        </div>
    );
}
//
// function FriendStatus(props) {
//     const [isOnline, setIsOnline] = useState(null);
//
//     function handleStatusChange(status) {
//         setIsOnline(status.isOnline);
//     }
//
//     useEffect(() => {
//         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//         };
//     });
//
//     if (isOnline === null) {
//         return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
// }

function Example4(){
    let invl;
    useEffect(effect);

    effectCounter();
    return(
        <div>
            <h3>Example 4- effect Stoping side affects after component unMount.</h3>
            <p>quick - make interval that update the dom</p>
            <p>Important *** - how to unmount component:<br/>
            in General - U will do it from the parent so, Use conditional render
            by state in the parent. See this answer : https://stackoverflow.com/a/50561874/9727918</p>
            <p>If U want to remove the root from the dom U can do that. Probably there are works-around
            To do it from inside the component :<br/>
                https://discuss.codecademy.com/t/can-we-unmount-a-component-manually/392702
            </p>
        </div>

    );
    function effectCounter(){
        let number = 0;
        invl = setInterval(()=>{
            document.getElementById('dom-test').innerText = number;
            number++;
        }, 2000);

    }

    function effect(){        //do something
        console.log("Effect function")
        return (()=>{

            clearInterval(invl);
        });

    }
}

function Example5(){
    let otherCompState = Example6();

    return(
        <div>
            <h3>Example5 - Cool - see how to get state / props from other component  </h3>
            <p>Actually I didn't get it yet. What so special.
            They are showing a hood that act separately and two components can use it,
            maybe it's like a service, need to understand it well, and learn the use case.
            This is the link : <br/>
                https://reactjs.org/docs/hooks-overview.html#building-your-own-hooks</p>
            <Example6/>
            {console.log("?/?? " , otherCompState)}

        </div>
    )
}
function Example6(props){
    const [word1, setWord1] = useState("initial word");


    return(
        <div>
            <h3>I am example 6. </h3>
            <p>State as word = {word1}</p>
        </div>
    )

}

export function Try1() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(100);
    const [propName, funcName] = useState('initial value');

    function changeValue(){
        funcName('newValue');
    }

    setInterval(() => {
        setCount(count- 1);
    }, 3000);


    return (
        <div>
            <h3>TRy 1 - setInterval.... ? </h3>
            <p>You clicked {count} times !!!!</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>My hook = {propName}</p>
            <button onClick={changeValue}>Change value</button>
        </div>
    );
}
