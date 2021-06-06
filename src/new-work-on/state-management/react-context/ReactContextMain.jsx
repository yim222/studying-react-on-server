import React from "react";

export class ReactContextMain extends React.Component{

    render(){
     return(
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

class ChangeNumbers extends React.Component{
    constructor(){
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
    changeNumber = ()=>{
        this.setState({
                    number: Math.floor(Math.random() * 100)
        });
    }


    render(){
        return(
            <div>
                <h3>SImple example </h3>
                <p>Here I have a number that will be changed and always I want that the children
                component will be synchronzied with it, without pass it directly ( but from inside the component) . </p>
                <button onClick={this.changeNumber}>Change number </button>
                <NumberContext.Provider value={this.state.number}>
                    <ShowNum1/>
                    <ShowNum2/>

                </NumberContext.Provider>

            </div>
        )
    }

}

class ShowNum1 extends React.Component{
    render(){
        return(
            <p>Show num1 the num = {this.context + ""}</p>
        )
    }
}


class ShowNum2 extends React.Component{
    render(){
        return(
            <p>Show num2 the num ={this.context + ""}  </p>
        )
    }
}
ShowNum1.contextType = NumberContext;

ShowNum2.contextType = NumberContext;

