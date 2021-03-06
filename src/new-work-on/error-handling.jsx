import React from 'react';
import error from './assets/error.png';
import './new-work-on-style.css';
import {externalSideEffectFunc} from "./service";

/**
 Some explain on error handling in react .
 **/

/**
 * Main component
 * @param props
 * @constructor
 */
export function ErrorHandlingMain(props){
    let arr1 = ['apple', 'banana'];
    let errorArr = ['one element only '];

    let validData = [['ggg','a'], ['uuu','c'],['xxx','d']];
    let inValidData = [['ggg','a'], undefined ,['xxx','d']];
    sideEffectFunc("something ")


    return(

        <div>
            <h1>Error Handling explanations (and common mistakes) </h1>
            <p>Sometime the things get into error and we should know how to handle it </p>
            <p>For example I have component on my app that if the data arrived from the server corrupted,
            even if it's only one of many good items, all the app fall down. </p>
            <p>Important tip - when the screen out to error view and u want to return to the last
            viewed screen press ESC (or u have an x also to close the error. Sometimes,
            it's just layout for development mode, as will explained next ). </p>

            <img src= {error} alt = 'error image'/>

            <p>So let's inspect that. </p>
            <h2>Simple error</h2>
            <p>Here I will generate simple error . For it's work U need to un/comment the right data array </p>
            <p>This is simple element that shows the second element that sent to it. If U defined it undefined
            or null it will generate error </p>
            <Element data = {{name:null}} arr = {[]}/>





            <h2>Error boundary</h2>
            <p>After quick search you can found that
               <a href = "https://reactjs.org/docs/error-boundaries.html" target={'_blank'}> error-boundary </a>
                functionality of React.<br/>
            Live demo : https://codepen.io/gaearon/pen/wqvxGa?editors=0010</p>

            <p>This is the notes about that : </p>
            Note

            Error boundaries do not catch errors for:

            Event handlers (learn more)
            Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
            Server side rendering
            Errors thrown in the error boundary itself (rather than its children)

            <h3>The container - without handling - try to pass it the invalid data  </h3>

            <h2>Container WITHOUT Handle</h2>

            <ContainerWithoutHandle arr = {inValidData}/>

            <h2>Container WITH Handle</h2>

            <ContainerWithHandle arr = {validData}/>

            <GeneralErrorHandling>

                <Element data = {{name:'trying'}} arr = {null}/>

            </GeneralErrorHandling>

            <p>It will work only on children. That's mean the element that it's wrap. Not what inside the render view. <br/>
            That's the reason that container with handle won't supply the work . Notice that.  </p>

            <h2> static getDerivedStateFromError() vs  componentDidCatch(error, errorInfo)</h2>
            <p>This two functions makes the component available to get error notice. What to do with that - is up to you.  </p>
            <p>At the examples in tutorial he is doing changes to the states.  You can add in the body of those functions
            Everything U need for implement what you need. </p>
            <p>So what's the difference ?  </p>

            <h3>static getDerivedStateFromError(error)</h3>
            <p>the set state is the returned value it's happen before component did catch , U don't get the error info,
            see here https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror,
            "Note

                getDerivedStateFromError() is called during the “render” phase, so side-effects are not permitted. For those use cases, use componentDidCatch() instead."


            </p>

            <h3>componentDidCatch(error, errorInfo)</h3>
            <p>It's support side effects (yet get good example). Actually U can also affect the render
            from here, but it's depcrated (bad practice) as u see here from the docs. </p>
            <p>"Note

                In the event of an error, you can render a fallback UI with componentDidCatch()
                by calling setState, but this will be deprecated in a future release. Use static
                getDerivedStateFromError() to handle fallback rendering instead."
            see here the api
                https://reactjs.org/docs/react-component.html#componentdidcatch
            </p>

            <p>Here are deeper discussion about that :
                https://github.com/reactjs/reactjs.org/pull/1223#discussion_r223124167
                https://stackoverflow.com/a/52963191/9727918
            </p>
            <p>In general those the major things. Render - handling recommended from getDerived,
            log and side effects handling - recommended from component did catch </p>

            <p>Sometimes at development it's hide it with the error sometimes not. Didn't figured it out and it's and how to run
                at production at all
            are subjects to other discussion
             <br/>
             In short way : u need to build  like explained here:
                It’s work like charm (U need to serve it from the library like u do npm start) .
                https://stackoverflow.com/a/49209041/9727918
                But don’t recognize the proxy – right- proxies won’t work on production
                https://stackoverflow.com/a/52881317/9727918
                For further learning :
                https://medium.com/@samratshaw/test-react-production-build-locally-434907be9e49
                https://create-react-app.dev/docs/deployment/ - official


            </p>

            <h2>Handling events handlers errors (Event Handlers)</h2>
            <p> from https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers :
                <br/>
                Error boundaries do not catch errors inside event handlers.

                React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.
<br/>
U need to use the regular try/catch for that. 

            </p>
            <div>
                See this element and see how you click it's generate error even with the errorBoundary
                (but works... - if the error is affecting rendering. If the out of
                scope of rendering the boundaries wont help ):
                <GeneralErrorHandling>
                    <ElementUnHandledEvent data = {{name:"lingar"}} arr = {[]}/>
                </GeneralErrorHandling>
            </div>

            <div>
                This element is with handling  -
                see how you click it's generate error evenand handle this:
                <GeneralErrorHandling>
                    <ElementHandledEvent data = {{name:"lingar"}} arr = {[]}/>
                </GeneralErrorHandling>
            </div>

            <div>
                See that official for new behavior on default errors
                https://reactjs.org/docs/error-boundaries.html#new-behavior-for-uncaught-errors

            </div>


            <h2>Common mistakes : </h2>
            <ul>
                <li>U forgot to implement the functions with the states. </li>
                <li>U forgot to make the condition at the render </li>
                <li>U are wrapping  whole list, instead of wrapping each element (inside the loop/map)</li>
                <li>Define the handling inside the problematic component, instead of do it from parent (parent is the wrapping component,
                not what inside render, not extending (which anyway not recommended at react) not other thing - so keep it in mind) . </li>
                <li>It's work but hidden by the overlays ... see here. .. to run in production see here .... </li>


            </ul>

        </div>
    )
}


class  Element extends React.Component{

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                I am simple element . Name : {this.props.data.name+""}
                <br/>
                Array second element: {this.props.arr[1]+""}
                <br/>

            </div>
        )
    }


}

class ContainerWithoutHandle extends React.Component{


    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }


    render() {
        let elements = this.props.arr.map((e,index)=>{
            return( <div >

                <GeneralErrorHandling>

                    <Element data={{name: 'generated-by-list'}} arr={e} key={index.toString()}/>

                </GeneralErrorHandling>
            </div>)
        });

        return(

            <div className= "container">
                {elements}
            </div>
        )
    }


}


class ContainerWithHandle extends React.Component{


    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log("Error handler happen ? ")
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if(this.state.hasError){
            return <h2>There is problem</h2>;
        }

        let elements = this.props.arr.map((e,index)=>{
            return <Element data={{name: 'generated-by-list'}} arr={e} key={index.toString()}/>
        });

        return(

            <div className= "container">

                {elements}
            </div>
        )
    }


}

class GeneralErrorHandling extends React.Component{
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null, hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log("getDerivedStateFromError  GeneralErrorHandling happen ? ", error );
        // this.setState({
        //     hasError:true
        // });
        //u cannot set state - that's will generate error
        // this.setState({
        //     error: error
        //
        // });
        sideEffectFunc(error);
        externalVar = "kkk";
        console.log(externalVar);
        externalSideEffectFunc(error);
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch  GeneralErrorHandling happen ? ")
        console.log('error : ', error , "error-info ", errorInfo);

        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
        // logComponentStackToMyService(errorInfo);
    }

    render() {
        let errorview = (<div>Nothing to show</div>);
        if(this.state.error){
            errorview  = <div>Component did catch {this.state.error + " " } error info = {this.state.errorInfo+""}</div>;
        }
        if ( this.state.hasError) {
            // Error path
            console.log("There is  Error ? ")
            return (
                <div style = {{backgroundColor: 'red', color: 'white', border: '2px solid white',display: 'inline-block', padding: '10px'}}>
                    <p >General error on this component </p>
                    {errorview}

                </div>
            );
        }
        // Normally, just render children
        console.log(" not Error ? ")

        return this.props.children;
    }

}

class  ElementUnHandledEvent extends React.Component{

    constructor(props) {
        super(props);

        this.state ={
            name: props.data.name,
            arr: props.arr,
            doError:false
        }

    }

    generateError = ()=>{
        console.log("Generating errors");
        // this.setState({//this affects rendering so it's will do catch
        //     arr:null
        // })
        throw new Error('I crashed!');//this not affect rendering so it won't be catch


    }

    render() {


        return (
            <div className={'container'}>
                <h4>Here I am showing how to handle events error - that's shouldn't work with error boundaries .</h4>
                I am  element . Name : {this.state.name+""}
                <br/>
                Array second element: {this.state.arr[1]+""}
                <br/>
                <button onClick={this.generateError}>Generate error </button>

            </div>
        )
    }


}

class  ElementHandledEvent extends React.Component{

    constructor(props) {
        super(props);

        this.state ={
            name: props.data.name,
            arr: props.arr,
            doError:false,
            customErr: false
        }

    }

    generateError = ()=>{
        console.log("Generating errors");
        // this.setState({//this affects rendering so it's will do catch
        //     arr:null
        // })
        throw new Error('I crashed!');//this not affect rendering so it won't be catch


    }
    handleClick =() =>{
        try{
            this.generateError();
        }catch (e) {
            console.log("Error happened - ", e);
            this.setState({
                customErr: true
            });
        }
    }

    render() {

        if(this.state.customErr){
            return (
                <div style = {{backgroundColor: 'pink', color: 'yellow', border: '2px solid white',display: 'inline-block', padding: '10px'}}>
                    <p >Event error on this component </p>


                </div>
            );
        }
        return (
            <div className={'container'}>
                <h4>Here I am showing how to handle events error - that's shouldn't work with error boundaries .</h4>
                I am  element . Name : {this.state.name+""}
                <br/>
                Array second element: {this.state.arr[1]+""}
                <br/>
                <button onClick={this.handleClick}>Generate error with handling </button>

            </div>
        )
    }


}



function sideEffectFunc(data){
    console.log("I am sideEffectFunc(data) that shows from out params.. ")
    console.log("data = ", data);
}
let externalVar = "defalut value";