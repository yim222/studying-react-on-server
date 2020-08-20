import React, {useState, useEffect, useLayoutEffect} from 'react';


export function GeneralCompsHooks(){
    return(
        <div>
            <h2>General Hooks Components</h2>
            <SimpleSquareHooks/>
            <DemonstrateUseEffect/>
            <SimpleSquareHooks2/>
            <Parent1/>
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
    const [showChild1, setShowChild1] = useState(true);
    let [counter1, setCounter1] =useState(0);
    let  counter2 = 0;

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
        },10000);

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
        </div>
    )
}

function Child1(props){
    function unsubscribe (id){
        console.log('unsubscribing from id ' + id);
    }

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
        return(()=>{
            console.log("Un mount child only once ")
        });
    },[]);
    return(
        <div>
            <h5>Child 1 -hooks </h5>
            <p>Id = {props.id}</p>
            {/*<button onClick={this.test}>Test</button>*/}
        </div>
    )
}