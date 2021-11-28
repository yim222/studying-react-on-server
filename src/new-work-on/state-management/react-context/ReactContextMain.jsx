import React, {useContext, useState} from "react";
import {ProductsWithContext} from "./ProductsWithContext";

export class ReactContextMain extends React.Component {

    render() {
        return (
            <div>
                <h2>React Context Explanation</h2>
                <p>A simple example: </p>
                <ChangeNumbers/>
            </div>
        )
    }
}

//U don't need to create the context inside specific component

const NumberContext = React.createContext(55);
NumberContext.displayName = "LingarContext";//this change the name in the react dev-tools

class ChangeNumbers extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }

    }

    componentDidMount() {
        // setInterval(()=>{
        //
        //     this.setState({
        //         number: Math.floor(Math.random() * 100)
        //     })
        //
        // },3000)
    }

    changeNumber = () => {
        this.setState({
            number: Math.floor(Math.random() * 100)
        });
    }


    render() {
        return (
            <div>
                <h3>SImple example </h3>
                <p>Here I have a number that will be changed and always I want that the children
                    component will be synchronzied with it, without pass it directly ( but from inside the component)
                    . </p>
                <p>Things you need to remember:</p>
                <ul>
                    <li>createContext('light');</li>
                    <li>contextType</li>
                    <li>myContext.Provider</li>
                </ul>
                <button onClick={this.changeNumber}>Change number</button>
                <NumberContext.Provider value={this.state.number}>
                    <ShowNum1/>
                    <ShowNum2/>
                    <ShowNum3Func/>

                </NumberContext.Provider>

                <p>Here see how it's working with products:</p>

                <ProductsWithContext/>
                <p>I don't get the big story, I can do it with simple props too. </p>
                <p>Let's do sub component that will access the data from inside. </p>
                <p>In the single item u can see it working. Without type also. For why I need the type?
                    seems that it's for classes. </p>
                <p>Context, and also render props - is like Umbrella. U can define component that can use
                    in this Umbrella.
                    <br/>
                    Render props is more flexible since You don't need to specially prepare the component to be
                    fit for context. The lack with it is that you still need to pass the props by the tree,
                    and cannot access them from the "air". With context you do can do it, if it's under
                    the umbrella.***
                </p>
                <p>The advantage is that you can affect the global value by state, or props (that comes from other
                    state).
                    If you want to affect the global you to change the passed state. </p>
                <p>Question – again so what I get with render – props? – this is a great advantage.
                    I don’t need to put products, and most-expensive, inside specific component, and also this parent
                    component not must to contain those two.
                    Maybe it’s can be achieved with children. I don’t sure if you can pass props/state to children need
                    to think about that.
                    I think that in other words – render props is the way to pass props from parent to child.
                </p>
                <h4>**********************Example of how to pass function to nested in the tree
                    component************************</h4>
                {/*Finishing*/}
                <Counter>
                    <Dummy name="dummy1">
                        <InnerSmartComponent/>
                        <InnerSmartComponent2/>

                    </Dummy>

                </Counter>


            </div>
        )
    }

}

class ShowNum1 extends React.Component {
    render() {
        return (
            <p>Show num1 the num = {this.context + ""}</p>
        )
    }
}


class ShowNum2 extends React.Component {
    render() {
        return (
            <p className={"small-comp"}>Show num2 the num ={this.context + ""}  </p>
        )
    }
}

function ShowNum3Func(props) {
    return (
        <div>
            <p>With function component this.context won't work, so we need to use consumer - see inside. </p>
            <NumberContext.Consumer>
                {value => <p>Show num3 the num ={value + ""}  </p>}
            </NumberContext.Consumer>
            {/*<p>Show num2 the num ={this.context + ""}  </p>*/}

        </div>
    )
}

///How to pass function for updating the context

const CounterContext = React.createContext({
    number: 4,
    count: () => {
    }//function for update the number
});


function Counter(props) {
    const contextValue = useContext(CounterContext);
    const countFunc = () => {
        console.log("countFUnc")
        setCounter(prevState => {


            return {
                ...prevState,

                number: prevState.number + 1,

            }
        });
    }

    const [counter, setCounter] = useState({
        number: contextValue.number,
        count: countFunc
    });


    return (
        <div>
            <CounterContext.Provider value={counter}>


                <div>
                    <CounterContext.Consumer>

                        {({number, count}) => {
                            return (
                                <div className={"small-comp"}>
                                    <h4>I am counter - this is the number : {number}</h4>
                                    <p>Click here for count</p>
                                    <button onClick={count}>count</button>
                                    <p>This is my children</p>
                                    {props.children}
                                </div>)
                        }}

                    </CounterContext.Consumer>

                </div>


            </CounterContext.Provider>

        </div>
    )
}

function Dummy(props) {
    return (
        <div className={"small-comp"}>
            <h4>I am {props.name}, a dummy component. I don't know nothing. I just contain children. </h4>
            {props.children}
        </div>
    )
}

function InnerSmartComponent() {
    return (
        <CounterContext.Consumer>
            {({number, count}) => {
                return (

                    <div className={"small-comp"}>
                        <h4>I am smart component - I know to count too.. - this is the number : {number}</h4>
                        <p>Click here for count</p>
                        <button onClick={count}>count</button>

                    </div>)
            }}

        </CounterContext.Consumer>
    )
}


function InnerSmartComponent2() {
    const value = useContext(CounterContext);
    return (


        <div className={"small-comp"}>
            <h4>I am smart component - I know to count too.. I USE USE CONTEXT INSTEAD OF CONSUMERS : {value.number}</h4>
            <p>Click here for count</p>
            <button onClick={value.count}>count</button>

        </div>

    )
}


ShowNum1.contextType = NumberContext;

ShowNum2.contextType = NumberContext;

// ShowNum3Func.contextType = NumberContext;//not working


