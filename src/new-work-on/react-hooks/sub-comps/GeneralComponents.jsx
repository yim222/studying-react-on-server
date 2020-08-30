import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {CustomHooks2, useRandomGenerator} from "./CustomHooks";


export function GeneralCompsHooks(){
    return(
        <div>
            <h2>General Hooks Components</h2>
            <SimpleSquareHooks/>
            <DemonstrateUseEffect/>
            <SimpleSquareHooks2/>
            <Parent1/>
            <BreakHooksRules/>
            <CustomHooks2/>
            <ExUseContext/>
            <AdditionalHooks/>

        </div>
    )
}

export function SimpleSquareHooks(props){

    const [color, setColor] = useState('red');
    const [border, setBorder] = useState('yellow');
    const [width, setWidth] = useState('50');
    const [height, setHeight] = useState('50');
    const [style, setStyle] = useState({
        backgroundColor: color,
        border: '2px solid ' + border,
        width: width+'px',
        height: height+ 'px'
    });
    useEffect(()=>{

            // setStyle(
            //    {
            //         backgroundColor: color,
            //         border: '2px solid ' + border,
            //         width: width+'px',
            //         height: height+ 'px'
            //    }
            // );

        }

    )
    return(
        <div>
            <h3>Simple Square by hook</h3>

            {/*<div style={style}>*/}
            <div style={{
                backgroundColor: color,
                        border: '2px solid ' + border,
                        width: width+'px',
                        height: height+ 'px'
            }}>

            </div>
            Change width:
            <input name = 'width' type = 'number' onChange={(e) => {setWidth(e.target.value)}} value={width}/>
            <br/>
            Change height:
            <input name = 'height' type = 'number' onChange={(e) => {setHeight(e.target.value)}} value={height}/>
            <br/>
            Change color:
            <input name = 'color' type = 'text' onChange={(e) => {setColor(e.target.value)}} value={color}/>
            <br/>
            Change border:
            <input name = 'border' type = 'text' onChange={(e) => {setBorder(e.target.value)}} value={border}/>
        </div>

    );
}

export function SimpleSquareHooks2(props){
    // console.log("SimpleSquareHooks2");

    const [color, setColor] = useState('red');
    const [border, setBorder] = useState('yellow');
    const [width, setWidth] = useState('50');
    const [height, setHeight] = useState('50');
    const [style, setStyle] = useState({
        backgroundColor: color,
        border: '2px solid ' + border,
        width: width+'px',
        height: height+ 'px'
    });
    let style2 = {
        backgroundColor: color,
        border: '2px solid ' + border,
        width: width+'px',
        height: height+ 'px'
    };
    let text1 = "Am I seem? - yeah ";

    useEffect(()=> {
        text1 = height+"";
        console.log('text1 ? = ' + text1)

        // style2 ={
        //         backgroundColor: color,
        //         border: '2px solid ' + border,
        //         width: width+'px',
        //         height: height+ 'px'
        //     };
        //     // setStyle(
        //     //    {
        //     //         backgroundColor: color,
        //     //         border: '2px solid ' + border,
        //     //         width: width+'px',
        //     //         height: height+ 'px'
        //     //    }
        //     // );
        //
        // }

    });

    useLayoutEffect(()=>{
        style2 ={
                    backgroundColor: color,
                    border: '2px solid ' + border,
                    width: width+'px',
                    height: height+ 'px'
                };
    });
    return(
        <div>
            <h3>Simple Square by hook + one style object - by use effect - Didn't succeed---><br/>
            U need to use useLayoutEffect. The regular useEffect doesn't happen before the browser rendering. (And become a loop that it will be never get rendered with the new value </h3>

            <div style={style2}>
            {/*<div style={{*/}
            {/*    backgroundColor: color,*/}
            {/*    border: '2px solid ' + border,*/}
            {/*    width: width+'px',*/}
            {/*    height: height+ 'px'*/}
            {/*}}>*/}

            </div>
            Change width:
            <input name = 'width' type = 'number' onChange={(e) => {setWidth(e.target.value)}} value={width}/>
            <br/>
            Change height:
            <input name = 'height' type = 'number' onChange={(e) => {setHeight(e.target.value)}} value={height}/>
            <br/>
            Change color:
            <input name = 'color' type = 'text' onChange={(e) => {setColor(e.target.value)}} value={color}/>
            <br/>
            Change border:
            <input name = 'border' type = 'text' onChange={(e) => {setBorder(e.target.value)}} value={border}/>

            <h1>{text1}</h1>
        </div>

    );
}


export function DemonstrateUseEffect(props){

    return(
        <div>
            <h3>I demonstrate useEffect points.</h3>
            <p>One advantage that U can separate the logic (functionality ) between several useEffect. see here:<br/>
                https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns
            </p>
            <p>As U can see at the parent and child example, the useEffect run after each change on the render,
            and before the re-render, it's run the returning function (like unmount),
            so U can define on that flow mirror function like U did in updating and like that. </p>
            <p>U can define "once" running by passing the [] to the function. </p>
        </div>
    )
}

//Here I doing rewriting to the parent1 and child1 of the classic components

function Parent1(props){
    // console.log("Parent funct comp")
    const [childId, setChildId] = useState(1);
    const [child2Id, setChild2Id] = useState(0);

    const [showChild1, setShowChild1] = useState(true);
    let [counter1, setCounter1] =useState(0);
    let  counter2 = 0;

    let ids =[1,2,3,3,4,5,6,6,7];
    useEffect(doSomething,[]);

    function doSomething(){
        console.log("Doing nothing");
        // setInterval(()=>{
        //     console.log("DO nothing on interval ... ");
        //
        // }, 3000);

    }
    let generateRandom=()=>{
        // // setInterval(()=>{
        // //     let rndm = Math.floor(Math.random() * Math.floor(100));
        // //     setNumber(rndm);
        //
        // },3000)
    }
    let doSomething2=()=>{
        console.log("Doing nothing");
        setInterval(()=>{
            console.log("DO nothing on interval ... ");

        }, 3000);

    }

    //For running this logic only once - we pass second argumnet of empty array.
    useEffect(()=>{
        console.log("use effect only once - ");
        setInterval(()=>{
            setChildId(
                Math.floor(Math.random() * Math.floor(100))
            );
        }, 3000);

        setTimeout(()=>{
            setShowChild1(
                false
            );
        },30000);

        let counter1 = 0;
        //set interval for array index
        let invl2 = setInterval(()=>{
            setChild2Id(
                ids[counter1]

            );
            counter1++;
            if(counter1 >= ids.length){
                clearInterval(invl2);
            }
        }, 3000);

    },[]);

    useEffect(()=>{
        // console.log("Function Component Parent 1 mount/updated , #" + setCounter1(counter1+1) );//WOn't work
        // counter2++;
        // console.log(counter2)
        // console.log("Function Component Parent 1 mount/updated , #" + counter2++ );

        return (()=>{
            // console.log("Function Component Parent 1 unmount");

        });

    });


    return(
        <div>
            <h3>Parent1 </h3>
            <p>useState id = {childId}</p>
            { showChild1 && <Child1 id = {childId}/>}
            <EvenOrOdd num = {childId}/>
            <p>If U want to see about how to compare to previous, uncomment here the child2, that demonstrate that. </p>
            <Child2 id = {child2Id}/>
            <EvenOrOdd num = {child2Id}/>
            <Child3/>
        </div>
    )
}

function Child1(props){
    function unsubscribe (id){
        console.log('unsubscribing from id ' + id);
    }
    const desc = useEvenOdd(props.id);
    const   [innerNumber, setInnerNumber] = useState(props.id);
    const [multiple3, setMultiple3] = useState(0);
    const multipl3Desc = useEvenOdd(multiple3);
    const regJsDesc = jsEvenOdd(innerNumber);
    const  [someNum,  setSomeNum] = useState(0);
    const [obj1, setObj1] = useState({
        a: 'a value',
        b: 'b value'
    })

    function subscribe (id){
        console.log('subscribing to id ' + id);
    }
    useEffect(()=>{
        console.log("Child 1 mount/updated - useEffect");
        subscribe(props.id);
        return(
            ()=>{
                console.log("Child 1 unmount - useEffect");
                unsubscribe(props.id);

            }
        )

    });
    useEffect(()=>{
        setInnerNumber(props.id);
        setMultiple3(innerNumber * 3);
    });
    useEffect(()=>{
        return(()=>{
            console.log("Un mount child only once \n see how the id is with its initial values = " , props.id)

        });
    },[]);

    function showPrevState(prev) {
        //by pass it to some set state u can use the previous (your question)
        console.log("showPrevState")
        setSomeNum(prev+1);
        console.log("prev = " , prev, "current = ", someNum);


    }
    function notMerge() {
        let obj = {b: 'b new Value'};
        setObj1(obj);
    }

    function merge() {
        let obj = {b: 'b new Value'};
        setObj1(prevState => {
            // Object.assign would also work
            return {...prevState, ...obj};
        });
    }

    return(
        <div>
            <h5>Child 1 -hooks </h5>
            <p>Id = {props.id}</p>
            <p>Custom hook - Number is {desc}</p>
            <p>VS regular js  - Number is {regJsDesc} - seems it works the same.</p>

            <p>Custom hooks use inner information</p>
            <p>Multiple 3 = {multiple3}// description = {multipl3Desc} </p>

            <p>Some num = {someNum}</p>
            <button
            onClick={()=>{
                setSomeNum(showPrevState);
            }}
            >Click and change some num an show the previous </button>
            <button
                onClick={()=>{
                    setSomeNum(5);
                }}
            >won't make rerender because it's the same value </button>

            <p>U can merge values to object by using object spread syntax(...val)</p>
            <p>Object = a:{obj1.a} | b :{ obj1.b}</p>
            <button onClick={()=>{
                notMerge();
            }} >Not merge values</button>
            <button
                onClick={()=>{
                    merge();
                }}
            >Merge values</button>

            {/*<button onClick={this.test}>Test</button>*/}
        </div>
    )
}



function Child2(props){

    const [state1, setState1] = useState('initial values.');
    // const [desc, setDesc] = useEvenOdd(props.id);

    useEffect(()=>{
        // console.log("Child2 - each change ");
        console.log("Chile 2 render - id = " + props.id);


    })
    const [id, setId] = useState(props.id);
    function unsubscribe (id){
        console.log('unsubscribing from id ' + id);
    }

    function subscribe (id){
        console.log('subscribing to id ' + id);
        setId(id);
    }
    useEffect(()=>{
        console.log("child 2 mount/updated - useEffect - run only if previous prop doesnt' equal to the new = . ", props.id);
        subscribe(props.id);
        console.log("Other state - " , state1);
        return(
            ()=>{
                console.log("child 2 unmount - useEffect(previos) = " , props.id);
                unsubscribe(props.id);

            }
        )

    }, [props.id]);
    useEffect(()=>{
        setTimeout(()=>{
            setState1('change');
            console.log('state1-changed ');
        }, 4500);
        return(()=>{

            console.log("Un mount child only once id = " , props.id)
        });
    },[]);
    return(
        <div>
            <h5>Child 2 -hooks - comparing the changed values </h5>
            <p>U need to put the props value (not the state ) for checking this. </p>
            <p>If you want to compare </p>
            <p>Id = {props.id}</p>
            {/*<p>Custom hook - Number is {desc}</p>*/}
            <p>Other state = {state1}</p>
            <p>Didnt' get the note here, but the [] is generates the initial value</p>
            {/*<button onClick={this.test}>Test</button>*/}
        </div>
    )
}

function BreakHooksRules(){
    //don't call hooks inside loops, condition or nested functions

    //nested function
    // function nested1(){
    //     useEffect(()=>{
    //             console.log("Calling hooks inside nested function");

    //         //do something
    //         //result:  React Hook "useEffect" is called in function "nested1" which is neither a React function component or a custom React Hook function  react-hooks/rules-of-hooks
    //     })
    // }

    //loops
    // for(let i = 0 ; i <10 ; i++){
    //     console.log("Calling hooks inside loop");
    //    const [state1, setState1] = useState('dd');
    //     // }
    //result: React Hook "useState" may be executed more than once. Possibly because it is called in a loop. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks

    //conditions:
    let yes = true;
    // if(yes){
    //     const [state1, setState1] = useState('dd');
    // }
    //result : React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render

    // Instead, always use Hooks at the top level of your React function.
    const [state2, setState2] = useState('dd');

    //✅ Call Hooks from React function components.
    //✅ Call Hooks from custom Hooks (we’ll learn about them on the next page).

    return(
        <div>
            <h3>See here how to break hooks rules (uncooment)</h3>
            <p>Call hooks only from the top level of function component - <br/>
                By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.</p>
            <p>Link - https://reactjs.org/docs/hooks-rules.html</p>
        </div>
    )
}

// //dont call hooks from regular JS functions:
// function regularJS(){
//     const [state2, setState2] = useState('dd');
//     //result:  React Hook "useState" is called in function "regularJS" which is neither a React function component or a custom React Hook function
// }

function CustomHooks(){
    return(
        <div>
            <h3>Learning about custom hooks and how with that to share logic (=functionality) between components</h3>
            <h3>See here How I 'll use the new hook below - (even/odd) in both child1 and child2 </h3>
        </div>
    )
}

function useEvenOdd(num) {

    const [desc, setDesc] = useState('num');
    useEffect(()=>{
        if(num % 2 === 0){
            setDesc('Even');
        }
        else{
            setDesc('Odd');
        }
    });

    if (desc ==null) {
        return 'Loading...';
    }
    // return (num % 2 === 0) ? '2sdasd' : '1ddsds';

    return desc;
}

// Let's try first to create regular logic, and pass it to the parent id's provided.
//THen try to insert it inside the child by custom hook.

function EvenOrOdd(props){
    const [desc, setDesc] = useState(null);
    useEffect(()=>{
        props.num % 2 === 0 ? setDesc('Even'): setDesc('Odd');
    });
    if(desc == null){
        return(
            'loading'
        )
    }
    return (
       desc
    );
}

function jsEvenOdd(num) {

    let desc = "";
    if(num % 2 === 0){
        desc = 'Even';
    }
    else{
        desc = 'Odd';
    }

    // return (num % 2 === 0) ? '2sdasd' : '1ddsds';

    return desc;
}

function Child3(){
    // const [num, setNum] = useState(0);
    const num = useRandomGenerator();
    const byHook = useEvenOdd(num);
    const byJs = jsEvenOdd(num);
    // useLayoutEffect(()=>{
    //     console.log("Child 3 - starting interval")
    //     setInterval(()=>{
    //         console.log("adding 1 child 3 - current = ", num)
    //         let number = num+1;
    //         setNum(number);
    //         console.log("adding 1 child 3 - after = ", num)
    //
    //     },5000);
    // }, []);

    return(
        <div>
            <h3>Child 3 </h3>
            <p>Number = {num}</p>
            <p>Odd/Even bu custom = {byHook}</p>
            <p>Odd/Even by js = {byJs}</p>
            <p>It's don't work because in setInterval it's making new render and
            don't wait. U need to useLayoutMaybe.</p>
        </div>
    )
}

function ExUseContext(){
    return(
        <div>
            <h3>Explanation of useContext hook</h3>
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
            </ThemeContext.Provider>
            <p>It's linked to context using which is needed thing in React. </p>
            <p>https://reactjs.org/docs/context.html</p>
            <p>If you’re familiar with the context API before Hooks, useContext(MyContext) is equivalent to static contextType = MyContext in a class, or to MyContext.Consumer>.

                useContext(MyContext) only lets you read the context and subscribe to its changes. You still need a MyContext.Provider above in the tree to provide the value for this context.</p>
        </div>
    )
}

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

function App333() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}

function AdditionalHooks(){
    return(
        <div>
            <h3>Additional Hooks</h3>
            <p>
                The following Hooks are either variants of the basic ones from the previous section, or only needed for specific edge cases. Don’t stress about learning them up front.


            </p>
            <ExUseMemo/>

        </div>
    )
}

function ExUseMemo(){
    const [result, makeCalc] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // //functions
    // const changeXY = (ev) =>{
    //     ev.persist();
    //     console.warn("change XY, ev= ", ev);
    //     [ev.target.name] = ev.target.value;
    //     switch(ev.target.name){
    //         case "x":
    //             setX(ev.target.value)
    //             break;
    //         default:
    //             console.log("Nothing happen");
    //     }
    // }

    function calc(){
        console.log("Calcs? ");
        let result = x * y;
        for (let i =0; i< 11 ; i++){
            console.log("LOng calc, " , i);
        }
        makeCalc(result);
    }

    return(
        <div>
            <h3>Example of using useMemo</h3>
            <p>It's a hook that provide the technique of memoization, that save the old result at
            the cache, and if the values was already calculated it brings them from the memo (save the need to calculate again expensive calculation</p>
            <p>TODO :
                1-Make an input that show the result of mutlipe the two's inputs.
                2-Make it's work by nClick.
                3-Make the calculation will  be like expensive calc (make counting until 10).
                4- save.
                5- Do another state that and implement useMemo for saving the returning calc.
                6- Make sure it's working By running testing. It's should to work also on histories calc, not only the last, I assume. Check it. </p>
            <div>
                X = <input name ="x"
                           type = "number"
                           onChange={(ev)=>setX(ev.target.value)}
                           value={x}/><br/>
                Y = <input   type = "number"
                             onChange={(ev)=>setY(ev.target.value)}
                             value={y}/><br/>
                <button onClick = {calc}>X * Y </button>
                <p className='little-comment'><a href= 'https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks'>Seems</a> it's problematic to simplify the using of the name property like U R doing at classic classes  </p>

            </div>
            <p>The result : {result}</p>
            <p>test x = {x}</p>
        </div>
    );





}