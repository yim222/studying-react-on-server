import React from 'react';

//Here I'm doing classic components for comparing with the hooks component.


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