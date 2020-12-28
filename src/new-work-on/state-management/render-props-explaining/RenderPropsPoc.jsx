import React from 'react';

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
                <p>products: </p>
                <ProductsData/>

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
    }
    componentDidMount() {
        this.startTimer();
    }

    render() {
        return (
            <div>
                products:
                <p>book = {this.state.book}</p>
                <p>bread = {this.state.bread}</p>

            </div>
        );
    }

    startTimer() {
        this.interval = setInterval(()=>{
                this.setState({
                    book: this.getRandomInt(100),
                    bread: this.getRandomInt(100),
                    shoes: this.getRandomInt(100),
                    candle: this.getRandomInt(100)
                });
                console.log("interval");
        }



        ,this.seconds * 1000);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }


}