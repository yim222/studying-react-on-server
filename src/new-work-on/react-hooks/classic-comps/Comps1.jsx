import React from 'react';

//Here I'm doing classic components for comparing with the hooks component.

export function MainClassicsContainer(){
    return(
        <div>
            <h2>Main Container - classic class Components</h2>
            <ClassicTitleCounter/>
            <Parent1/>



            <h2>Main Container - The END</h2>

        </div>
    )
}

export class ClassicTitleCounter extends React.Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = `You clicked ${this.state.count} times`;

    }

    constructor() {
        super();
        this.state = {
            count:0
        }
    }
    render(){
        return(
            <div>
                <h3>I am classic React title counter - is it possible ? -Yeah</h3>
                <button onClick={() =>
                    this.setState({count: this.state.count + 1})}>
                    Click me
                </button>
            </div>
        )
    }
}

export class Child1 extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        console.log("Child1 DidMount");
        this.subscribe(this.props.id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("Child1 Updated");
        this.unsubscribe(prevProps.id);
        this.subscribe(this.props.id);
        this.test();
    }

    componentWillUnmount() {

        console.log("Child1 Unmounted");
        this.unsubscribe(this.props.id);
    }

    unsubscribe =(id)=>{
        console.log('unsubscribing from id ' + id);
    }

    subscribe =(id)=>{
        console.log('subscribing to id ' + id);
    }

    test(){
        console.log("I am a function...");
    }

    render(){
        return(
            <div>
                <h5>Child 1 </h5>
                <p>Id = {this.props.id}</p>
                <button onClick={this.test}>Test</button>
                <p>It's ok to make function on react just with signature like in Angular - not need the func = ()=>... that U used until today. (bind is for bind function test() - I
                Thinks *** </p>
            </div>
        )
    }
}


export class Parent1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            childId: 1,
            showChild1: true
        }

    }

    componentDidMount() {
        console.log("Component Parent 1 mount");
        setInterval(()=>{
            this.setState({
                childId: Math.floor(Math.random() * Math.floor(100))
            });
        }, 3000);

        setTimeout(()=>{
            this.setState({
                showChild1: false
            })
        },10000);
    }



    render(){
        return(
            <div>
                <h3>Parent1 </h3>
                <p>State id = {this.state.childId}</p>
                { this.state.showChild1 && <Child1 id = {this.state.childId}/>}
            </div>
        )
    }
}