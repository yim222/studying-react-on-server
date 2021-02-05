import React, {useEffect, useLayoutEffect} from 'react';
import {ProductsList} from "../../render-props-explaining/RenderPropsPoc";
// import {useSelector, useDispatch} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {selectProducts, setProducts} from "./products-slice";


export function ProductsFeature() {
    return (
        <div>
            <h2>Products feature </h2>
            {/*<ProductsClassicRedux/>*/}
            <ProductsFunctionalRedux/>

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

function MostExpensiveRedux() {
    const productsState = useSelector(selectProducts);
    let data = [];
    dataToArray();
    console.log("data = ", data);

    function dataToArray() {
        data = [];
        for (const [key, value] of Object.entries(productsState)) {
            console.log(`${key}: ${value}`);
            data.push({name: key, price: value});
        }
    }

    function max() {
        // let numbers = props.data.map(item=>item.price);
        //         // console.log("numebrs = " + numbers);
        let expensiveItem = {item: "", price: 0};
        for (let i of data) {
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


// class ProductsClassicRedux extends React.Component {
//
//     constructor() {
//         super();
//         this.interval = null;
//         this.seconds = 3;
//         this.state = {
//             // products: useSelector()
//         }
//         this.data = [];
//         // this.data = useSelector(selectProducts);
//         // this.storeData = useSelector(selectProducts);
//         this.dispatch = useDispatch();
//
//     }
//
//     componentDidMount() {
//         this.startTimer();
//     }
//
//     dataToArray() {
//         this.data = [];
//         // for (const [key, value] of Object.entries(this.state)) {
//         //     console.log(`${key}: ${value}`);
//         //     this.data.push({name: key, price: value});
//         // }
//         for (const [key, value] of Object.entries(this.storeData)) {
//             console.log(`${key}: ${value}`);
//             this.data.push({name: key, price: value});
//         }
//
//     }
//
//     render() {
//         this.dataToArray();
//         return (
//             <div>
//                 products:
//                 <p>book = {this.storeData.book}</p>
//                 <p>bread = {this.storeData.bread}</p>
//                 <ProductsList data={this.data}/>
//             </div>
//         );
//     }
//
//     startTimer() {
//         this.interval = setInterval(() => {
//                 this.setState({
//                     book: this.getRandomInt(100),
//                     bread: this.getRandomInt(100),
//                     shoes: this.getRandomInt(100),
//                     candle: this.getRandomInt(100)
//                 });
//                 this.dispatch(setProducts(
//                     {
//                         book: this.getRandomInt(100),
//                         bread: this.getRandomInt(100),
//                         shoes: this.getRandomInt(100),
//                         candle: this.getRandomInt(100)
//                     }
//                 ));
//                 console.log("interval");
//             }
//
//
//             , this.seconds * 3000);
//     }
//
//     getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//     }
// }

function ProductsFunctionalRedux(props) {
    console.log("??")
    useEffect(() => {
        console.log("useEffect")
        startTimer();


    }, []);
    useLayoutEffect(() => {

        console.log("useLayoutEffect ");
        dataToArray();

    }, []);

    //inner functions
    function dataToArray() {
        data = [];
        for (const [key, value] of Object.entries(productsState)) {
            console.log(`${key}: ${value}`);
            data.push({name: key, price: value});
        }

    }

    function startTimer() {
        interval = setInterval(() => {
                // this.setState({
                //     book: this.getRandomInt(100),
                //     bread: this.getRandomInt(100),
                //     shoes: this.getRandomInt(100),
                //     candle: this.getRandomInt(100)
                // });

                dispatch(setProducts(
                    {
                        book: getRandomInt(100),
                        bread: getRandomInt(100),
                        shoes: getRandomInt(100),
                        candle: getRandomInt(100)
                    }
                ));
                console.log("interval, data = ", productsState);
                dataToArray();
            }
            , seconds * 3000);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //fields and logic:
    const dispatch = useDispatch();
    const productsState = useSelector(selectProducts);
    let data = [];
    let interval = null;
    const seconds = 3;


    //invocations
    dataToArray();


    console.log("data = ", data);

    return (
        <div>
            Redux... on built
            <ProductsListRedux data={data}/>
            <MostExpensiveRedux/>
        </div>
    )

}

//clean version
function ProductsFunctionalRedux2() {
    useEffect(() => {
        console.log("useEffect")
        startTimer();
    }, []);

    //inner functions
    function dataToArray() {
        data = [];
        for (const [key, value] of Object.entries(productsState)) {
            console.log(`${key}: ${value}`);
            data.push({name: key, price: value});
        }

    }

    function startTimer() {
        interval = setInterval(() => {
                dispatch(setProducts(
                    {
                        book: getRandomInt(100),
                        bread: getRandomInt(100),
                        shoes: getRandomInt(100),
                        candle: getRandomInt(100)
                    }
                ));
                console.log("interval, data = ", productsState);
                dataToArray();
            }
            , seconds * 3000);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    //fields and logic:
    const dispatch = useDispatch();
    const productsState = useSelector(selectProducts);
    let data = [];
    let interval = null;
    const seconds = 3;
    //invocations
    dataToArray();
    console.log("data = ", data);
    return (
        <div>
            Redux... on built
            <ProductsListRedux data={data}/>
            <MostExpensiveRedux/>
        </div>
    )

}