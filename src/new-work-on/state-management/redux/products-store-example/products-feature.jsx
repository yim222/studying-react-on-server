import React from 'react';
import {ProductsList} from "../../render-props-explaining/RenderPropsPoc";
// import {useSelector, useDispatch} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';


export function ProductsFeature(){
    return(
        <div>
            <h2>Products feature </h2>
            <ProductsClassicRedux/>

        </div>
    )
}

export class ProductsListRedux extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let view = this.props.data.map((item, idx) => {
            return (<div key={idx}><span>{item.name}</span> <span>{item.price}</span></div>);

        });

        return (<div className="products-list">

            <h1>Products list</h1>
            {view}


        </div>);
    }

}

function MostExpensiveRedux(props) {

    function max() {
        // let numbers = props.data.map(item=>item.price);
        //         // console.log("numebrs = " + numbers);
        let expensiveItem = {item: "", price: 0};
        for (let i of props.data) {
            console.log("i = ", i);
            if (i.price > expensiveItem.price) {
                expensiveItem = i;
            }
        }
        return expensiveItem;
    }

    return (<div className="most-expensive">
            <h4>Expensive: {max().name} <br/>
                {max().price}</h4>

        </div>
    )

}


class ProductsClassicRedux extends React.Component {

    constructor() {
        super();
        this.interval = null;
        this.seconds = 3;
        this.state = {
            products: useSelector()
        }
        this.data = []
    }

    componentDidMount() {
        this.startTimer();
    }

    dataToArray() {
        this.data = [];
        for (const [key, value] of Object.entries(this.state)) {
            console.log(`${key}: ${value}`);
            this.data.push({name: key, price: value});
        }

    }

    render() {
        this.dataToArray();
        return (
            <div>
                products:
                <p>book = {this.state.book}</p>
                <p>bread = {this.state.bread}</p>
                <ProductsList data={this.data}/>

            </div>
        );
    }

    startTimer() {
        this.interval = setInterval(() => {
                this.setState({
                    book: this.getRandomInt(100),
                    bread: this.getRandomInt(100),
                    shoes: this.getRandomInt(100),
                    candle: this.getRandomInt(100)
                });
                console.log("interval");
            }


            , this.seconds * 3000);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}
