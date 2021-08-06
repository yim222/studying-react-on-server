import React, {useEffect, useState} from "react";

// This function takes a component...
export function doAlert(WrappedComponent, func1, par) {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            // this.state = {
            //     data: selectData(DataSource, props)
            // };
        }

        componentDidMount() {
            // ... that takes care of the subscription...
            // DataSource.addChangeListener(this.handleChange);
            func1();

        }

        componentWillUnmount() {
            // DataSource.removeChangeListener(this.handleChange);
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log("did update?")
            func1();

        }

        handleChange() {
            alert(par);
            // this.setState({
            //     data: selectData(DataSource, this.props)
            // });
        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            // return <WrappedComponent data={this.state.data} {...this.props}/>;
            return <WrappedComponent func = {this.handleChange}/>;

        }
    };
}


export function getList(WrappedComponent, propName) {
    // ...and returns another component...
    return function (){
        const [data, setData] = useState([]);


        useEffect(()=>{
            setData(mockData[propName])

        });
        return <WrappedComponent data = {data}/>;


    }
}


const mockData = {
    names: ["Avraham", "Izhak", "Yaakov"],
    cities: ["Jerusalem", "Ariel", "Holon"]
};