import React from "react";
import {Wrapper2} from "./Wrapper2";
//TODO - clean here what's not needed
export class ProductsWithContext extends React.Component {

    constructor() {
        super();
        // startTimer();

        this.interval = null;
        this.seconds = 3;
        this.state = {
            book: 0,
            bread: 0,
            shoes: 0,
            candle: 0
        }
        this.data = []
    }

    componentDidMount() {
        this.startTimer();
    }
    componentWillUnmount() {
        console.log("Shutting down interval: ");
        clearInterval(this.interval);
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


            , this.seconds * 1000);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
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
                <h2>React Context Demonstartation. </h2>
                <p>Like in render props I want simply show two component - which
                    get the same data from above.
                    list of products, and most expensive </p>
                <h3>U can see that you cannot use context outside of render, and
                    u need to wrap
                    the function view with it's provider. (unlike class that You
                    can do it from outside...) - Solution - you can use
                    useContext hook</h3>
                <p>U need to define it as state from this parent.</p>
                <ProductDataContext.Provider value={this.data}>
                    <ProductsListCompContext/>
                    <MostExpensiveCompContext/>
                    <Wrapper/>
                    <Wrapper2/>
                </ProductDataContext.Provider>


            </div>
        )
    }
}

let products = {
    book: 0,
    bread: 0,
    shoes: 0,
    candle: 0
}

const productsToArray = (products) => {
    let data = [];
    for (const [key, value] of Object.entries(products)) {
        console.log(`${key}: ${value}`);
        data.push({name: key, price: value});
    }
    return data;
}

let productsData = productsToArray(products);
export const ProductDataContext = React.createContext(productsData);

function startTimer() {

    let interval = setInterval(() => {
            products = {
                book: getRandomInt(100),
                bread: getRandomInt(100),
                shoes: getRandomInt(100),
                candle: getRandomInt(100)
            };
            productsData = productsToArray(products);
        }


        , 3000);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export class ProductsListCompContext extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let view = this.context.map((item, idx) => {
            return (<div key={idx}><span>{item.name}</span>
                <span>{item.price}</span></div>);

        });

        return (<div className="products-list">

            <h1>Products list</h1>
            {view}


        </div>);
    }

}


class MostExpensiveCompContext extends React.Component {

    max = () => {
        // let numbers = props.data.map(item=>item.price);
        //         // console.log("numebrs = " + numbers);
        let expensiveItem = {item: "", price: 0};
        for (let i of this.context) {
            console.log("i = ", i);
            if (i.price > expensiveItem.price) {
                expensiveItem = i;
            }
        }
        return expensiveItem;
    }

    render() {
        return (<div className="most-expensive">


                <h4>Expensive: {this.max().name} <br/>
                    {this.max().price}</h4>

            </div>
        )
    }

}

function Wrapper(props) {
    return <div><OneItem idx={2}/></div>
}

function OneItem(props) {
    return (
        <div>
            <ProductDataContext.Consumer>
                {cValue => <p>item = {cValue[props.idx].name}, price
                    = {cValue[props.idx].price}  </p>}
            </ProductDataContext.Consumer>
        </div>
    )
}

ProductsListCompContext.contextType = ProductDataContext;
MostExpensiveCompContext.contextType = ProductDataContext;
