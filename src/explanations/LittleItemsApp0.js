import React from 'react';

//Little example app for learning related things.
 export class LittleAppExample extends React.Component{//need to be able to export

  constructor(props){
    super();

    //uuid reminder
    this.idGenerator =  require('uuid/v1');

    this.id1 = this.idGenerator();
    this.id2 = this.idGenerator();


  }

  //If stateful u must those ?:

  componentDidMount(){
  }

  componentWillUnmount(){


  }

  render(){
    let data1 = {
      price: 1, name: "ddd", size : 60
    }
    let data2 = {
      price: 2, name: "GGG", size : 80
    }
    return <div className ="explain">
      <h1>I am little example app of items</h1>

        <h2>The App descriptions</h2>
      <ol>
        <li>....</li>

        <li>... </li>

      </ol>
      <h3>Studying from here https://reactjs.org/docs/lifting-state-up.html, <br/>
      This is their example :
      </h3>

      First simple -

      <Calculator/>
      Fahrenheit - this other scale , like Celsius , for measure temperatures

      <Calculator2/>

      <h2>This is my example : </h2>
      first - id's
      <p>id1 = {this.id1}<br/> id2 = {this.id2}<br/>
      is id1 === id2 ? {(this.id1===this.id2) ? "yes" : "not"}
      <br/> this is the code : <br/>
      //uuid reminder<br/>
      const idGenerator =  require('uuid/v1');

      this.id1 = idGenerator();
      this.id2 = idGenerator();
      </p>
      <p>
        do component with 3 properties. + id. item. price, name, size. <br/>
        then make “items” that can update it. with 3 items.
      </p>
      THis is one item :
      <Item1 id = {this.idGenerator()} itemData = {data1}
      />
      This is Items Components

      <Items itemsData = {itemsData1}/>

      <Item2 id = {this.idGenerator()} itemData = {data2}/>

      <h2>More insights</h2>
      <ol>
        <li>The idea is to connect the value u want to lift up with the props of parent, and the
        function too</li>

        <li>U can use "react developers tool" - an extension of the browser, there u can search the component u want to check it. <br/>
        Suggested to learn it deeply in the future.  </li>

      </ol>
    </div>

  }
}


//their example :
function BoilingIndicator(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}


//the calculator :
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);//registing the function
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <p>The fieldset tag wrap all nice in frame</p>
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            value={temperature}
            onChange={this.handleChange} />

          <BoilingIndicator
            celsius={parseFloat(temperature)} />

      </fieldset>
      </div>
    );
  }
}

//We are trying to add Fahrenheit option too
//See how he use outer Class fields(vars)
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    //this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);

  }

  render() {

  // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>(I am title in legend tag) Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator2 extends React.Component {

  constructor(props) {
    super(props);
    //v1 - this.handleChange = this.handleChange.bind(this);//registing the function
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);//for handling the Celius case
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);//For handlig the Fahrenheit case
    this.state = {temperature: '', scale: 'c'};//default


  }
  /*v1
  handleChange(e) {
    this.setState({temperature: e.target.value});
  }
  */
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    //manipluating the temperature according to the scale type
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <h3>This is the upgraded calculator2</h3>
        <TemperatureInput scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}  />
        < TemperatureInput scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}  />
        <BoilingIndicator
          celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

//Convrtor functions:
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
 }


 class Item1 extends React.Component{

   constructor(props){
     super();
     this.state = {
       price: 0,
       name: "NA",
       size: 0,
       toRender: false

     }

      this.onChange1 = this.onChange1.bind(this);
      this.saveData = this.saveData.bind(this);

     this.itemData = {  };

   }

     onChange1(ev){
       const name = ev.target.name;

       this.setState({

         [name]: ev.target.value

       });

     }

     saveData(ev){

       ev.preventDefault()

       this.itemData = {
         price : this.state.price,
         name: this.state.name,
         size: this.state.size
      }
      this.setState({toRender: true});



     }

     //set the initial state
     componentDidMount(){

       ///this.setState((state, props)=>({  location :  this.props.location}));
       this.setState((state,props)=>({

         price: props.itemData.price,
         name: props.itemData.name,
         size: props.itemData.size

       }));

       this.itemData = {
         price :  this.props.itemData.price,
         name:  this.props.itemData.name,
         size:  this.props.itemData.size
      }

      this.setState({
        toRender:true
      });

     }

     componentWillUnmount(){


     }




   render(){

     return <div style ={{border: 'solid black'}}>
      <h4>Item 1</h4>

      <p>
        price = {this.itemData.price}<br/>
        name = {this.itemData.name}<br/>
        size = {this.itemData.size}<br/>

        id = {this.props.id}
      </p>

      <h2>change me </h2>

      <form onSubmit = {this.saveData}>
        price:
        <input value = {this.state.price}  name ='price' onChange = {this.onChange1}/>

        name:
        <input value = {this.state.name}  name ='name' onChange = {this.onChange1}/>

        size:
        <input value = {this.state.size}  name ='size' onChange = {this.onChange1}/>

        <br/>
        <input type = "submit" value = "save" />

      </form>
     </div>
   }
 }


 class Items extends React.Component{
   constructor(props){
     super()

     //stock of the items
     this.itemsList = {};
     this.library = {};
      this.library2 = {};

     this.idGenerator = require('uuid/v1');// require('uuid/v1');


     this.displayItems = this.displayItems.bind(this);
     this.displayOuterLibrary  = this.displayOuterLibrary.bind(this);
     this.state = {
       doRender : false
     }

   }

   displayItems(){
     {/*
     this.list1 = [1,2,3];

     this.showList1 = this.list1.map((item) =>

      <li>I am item #{item}</li>);

      //

      var result = arr.reduce(function(map, obj) {
    map[obj.key] = obj.val;
    return map;
}, {});
      */}
    const arr = this.props.itemsData;
    var itemsList2 = arr.reduce(function(map, obj) {
    map[obj.id] = obj;
    console.log("I am reduce + " + obj.name);
    return map;
    }, {});
    //itemsList2.map(()=>console.log("hi") );

    console.log(arr);
    console.log(itemsList2);

    //itemsList2.map((itemData,index )=>
    //  {console.log("hi" + index);}
  //  );


    this.itemsList = this.props.itemsData;
    console.log("item = " + this.itemsList[0].price)
    let id1 = 0;
    //let id3 = require('uuid/v1');
    let currentId = 0;
    return this.itemsList.reduce((map,itemData )=>
      <div>

      map[itemData.id] = itemData;
      console.log("I am reduce + " + itemData.name);


      <Item1 id = {itemData.id/* before - currentId =  id3()*/}  itemData = {itemData} />

      </div>
    );  /*
    this.showList1 = this.list1.map((item) =>

     <li>I am item #{item}</li>

   );
   */
     }
     displayOuterLibrary(){
       /*
       var arr = [
    { key: 'foo', val: 'bar' },
    { key: 'hello', val: 'world' }
];

var result = new Map(arr.map(i => [i.key, i.val]));
*/

       this.library = this.itemsList.map((itemData )=>
         <div key = {itemData.id}>


         <p>name : {itemData.name},price: {itemData.price}, size: {itemData.size}, id: {itemData.id}</p>

         </div>
       );

      this.library2 = new Map(this.library.map(item => [item.id, item.name]));
      //result = arr.reduce((map, obj) => (map[obj.key] = obj.val, map), {});
        console.log ("this.library:");
        console.log (this.library);
       return this.library;
       /*
       return  this.itemsList.map((itemData )=>
         <div>

         <p>name : {itemData.name},price: {itemData.price}, size: {itemData.size}, id: {itemData.id}</p>

         </div>
       );
       */


     }

     changeValue(arr, id, newVal){

       //var foundIndex = arr.findIndex(x => x.id == item.id);
       var foundIndex = arr.findIndex(function(el){

        return el.key === id;
       });
       //arr[foundIndex].name = " new name1";

       return foundIndex;

     }

     //function for handle data from the component
     onChange1(ev){
       const name = ev.target.name;

       /*
       this.setState({

         [name]: ev.target.value

       });
       */
       //this.props.onChange1(ev);

     }


    render(){

      //draft map
      let map1 = new Map([
          [ 1, 'one' ],
          [ 2, 'two' ],
          [ 3, 'three' ], // trailing comma is ignored
      ]);
      console.log (map1.keys());console.log("test");


      let map12 = new Map([
          [ 1, 'one' ],
          [ 2, 'two' ],
          [ 3, 'three' ], // trailing comma is ignored
      ]);

      console.log(map12  + " = map12 " + map12.get(1));
      map12.set(1, "ONE ONE");
      console.log(map12  + " = map12 " + map12.get(1));
      let arr23 = [["1", "ten"], ["2", "20"], ["3", "30"]];

          var arr = [
        { key: 'foo', val: 'bar' },
        { key: 'hello', val: 'world' }
      ];

      var result = arr.reduce(function(map, obj) {
          map[obj.key] = obj.val;
          return map;
      }, {});

      console.log(result);



      //result.get('foo');
// { foo: 'bar', hello: 'world' }

      //let map11 = arr23.map()
      let arr222 = [1,2,3];

      var x = arr222.findIndex(function(el){
        return el===2;
      });
      console.log(x + " = x");
      return <div>
      <p style = {{textAlign: 'left'}}>This is important to do the list correct : <br/>

      {"this.showList1 = this.list1.map((item) =>"}
      <br/>
      {" <Item1 id = {12} itemData = {itemData} />"}<br/>

    {" );"}

      -and see inside if u want to mix JS pure u only need to wrap all with div tag .
      </p>
      <h1>I am Items</h1>
      {this.displayItems()}
      <h2>"This is the library of the products:" </h2>
      {this.displayOuterLibrary()}
      <h3> U can see here the problem. The outer library doesn't get the changes of the item .
      <br/> Now I will do an similar item, but one that can affect the items (parent) component</h3>
      <p>This is the library[] 0 index : </p>
      {this.library[0]}
      <p>gets? </p>
      <span>{this.library[0].key}</span>



      {itemsData1[2].id}?
      <p>library : </p>
      {this.library}


      <p>trying found index: <br/>
        {this.changeValue(this.library, "e0c786b2-189f-11e9-8e70-9571e8645e0d", "u")}
      </p>
      





      </div>

    }






 }


//Global material
//MOCK
const itemsData1 = [

  {
    price: 10,
    name: "Shoes",
    size: 30,
    id: "c4a70e60-189f-11e9-af23-bb15534753dc"
  },
  {
    price: 6,
    name: "Milk",
    size: 25,
    id: "d779a111-189f-11e9-9555-279c52f8a35f"
  },
  {
    price: 500,
    name: "Smartphone",
    size: 10,
    id: "e0c786b2-189f-11e9-8e70-9571e8645e0d"
  }


];


class Item2 extends React.Component{

  constructor(props){
    super();
    this.state = {
      price: 0,
      name: "NA",
      size: 0,
      toRender: false

    }

     this.onChange1 = this.onChange1.bind(this);
     this.saveData = this.saveData.bind(this);

    this.itemData = {  };

  }

    onChange1(ev){
      const name = ev.target.name;

      this.setState({

        [name]: ev.target.value

      });



    }

    saveData(ev){

      ev.preventDefault()

      /*
      this.props.itemData = {
        price : this.state.price,
        name: this.state.name,
        size: this.state.size
      };
      */

      this.itemData = {
        price : this.state.price,
        name: this.state.name,
        size: this.state.size
     }

     //this.itemData =this.props.itemData ;
     this.setState({toRender: true});



    }

    //set the initial state
    componentDidMount(){

      ///this.setState((state, props)=>({  location :  this.props.location}));
      this.setState((state,props)=>({

        price: props.itemData.price,
        name: props.itemData.name,
        size: props.itemData.size

      }));

      this.itemData = {
        price :  this.props.itemData.price,
        name:  this.props.itemData.name,
        size:  this.props.itemData.size
     }

     this.setState({
       toRender:true
     });

    }

    componentWillUnmount(){


    }




  render(){

    return <div style ={{border: 'solid black'}}>
     <h4>Item 2</h4>

     <p>
       price = {this.itemData.price}<br/>
       name = {this.itemData.name}<br/>
       size = {this.itemData.size}<br/>

       id = {this.props.id}
     </p>

     <h2>change me </h2>

     <form onSubmit = {this.saveData}>
       price:
       <input value = {this.state.price}  name ='price' onChange = {this.onChange1}/>

       name:
       <input value = {this.state.name}  name ='name' onChange = {this.onChange1}/>

       size:
       <input value = {this.state.size}  name ='size' onChange = {this.onChange1}/>

       <br/>
       <input type = "submit" value = "save" />

     </form>
    </div>
  }
}
