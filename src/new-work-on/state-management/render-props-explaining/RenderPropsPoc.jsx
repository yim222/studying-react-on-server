import React from 'react';
import './render-props-poc.css';

export class RenderPropsPoc extends React.Component {

    constructor(props) {
        super();

    }

    render() {
        return (
            <div className="explain">
                <h2>State data sharing management in react </h2>
                <p>Render props -
                    <a href="https://reactjs.org/docs/render-props.html" target="_blank">
                        from here
                    </a>
                    {/**
                     Next time :
                     Do the Missions of the poc in the word doc.

                     – 4 products - with prices changing –
                     with
                     1- 1 list uses it,
                     2- and one side bar which show the currently most expensive .

                     **/}
                </p>
                <p><b>TOOD - U need to organize here, and explain what you are showing( in general you want to show that in the classic way you cannot put
                two component one side to another, and get the same data) . </b></p>
                <p>You can compare to previous bracnh how it's much easier to seperate to new other components by
                    renders props
                    vs the classic . </p>
                <p>products classic: </p>
                <ProductsClassic/>
                <ProductsClassic2/>
                <p>Products data with render props</p>


                <ProductsData render={myData => (
                    <div>
                        <ProductsList data={myData}/>

                    </div>)}/>
                <ProductsData render={myData => (
                    <div>
                        <MostExpensive data={myData}/>

                    </div>)}/>
                <h3>two components with render props : </h3>
                <ProductsData
                    render={(data) =>
                        <div>
                            <ProductsList data={data}/>
                            <MostExpensive data={data}/>
                        </div>


                    }/>

            </div>

        )

    }
}

class ProductsData extends React.Component {

    constructor() {
        super();
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
                <p>From this DataComponent the content passed to its children by props.render(data)</p>
                {/*products:*/}
                {/*<p>book = {this.state.book}</p>*/}
                {/*<p>bread = {this.state.bread}</p>*/}
                {/*<ProductsList data={this.data}/>*/}
                {/*<MostExpensive data = {this.data}/>*/}

                {this.props.render(this.data)}

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

export class ProductsList extends React.Component {
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

function MostExpensive(props) {

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

class ProductsClassic extends React.Component {

    constructor() {
        super();
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


class ProductsClassic2 extends React.Component {

    constructor() {
        super();
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
                <MostExpensive data={this.data}/>

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
