import  React, {Component} from 'react';

class ItemsTry2 extends React.Component{

  constructor(props){
    super()
    this.state = {
      currentId: 0,
      newVal: "default",
      makeRender: false

    }

    this.itemsList = [
      "Hammer", "ABC", "DFG"

    ];

    //bind functions
    this.changeValue = this.changeValue.bind(this);

    this.saveDataToParent = this.saveDataToParent.bind(this);
    this.handlChildChange = this.handlChildChange.bind(this);
    this.handlChildChange = this.handlChildChange.bind(this);

  }

  changeValue(id2, newVal2){

    this.setState ({
      currentId: id2,
      newVal: newVal2
    });
    this.itemsList[this.state.currentId]  = this.state.newVal;

      this.setState ({makeRender: true});


  }

  handlChildChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    //this.props.data2[name] = value;
    this.setState({
      [name]: value
    });


  }
  //
  saveDataToParent(){

  //  alert(this.itemsList[this.state.currentId] + " " + this.state.currentId);
    this.itemsList[this.state.currentId]  = this.state.newVal;
    this.setState ({makeRender: true});


  }
  render(){

    return <div>

      <h2>I am ItemsTry2</h2>

      <p>
        1- Do the innerComp make changes by inputs index and new Value
       </p>
       <p> This is my list:<br/>

        {this.itemsList[0]},<br/>{this.itemsList[1]},<br/>{this.itemsList[2]}<br/>
       </p>

       <p>parent states : id : {this.state.currentId} ,  newVal : {this.state.newVal}</p>
       {this.itemsList[2] = "ppp"}
       <button onClick = {()=>  this.changeValue(2, 222)}
       > test   changeValue </button>


       <p>child element</p>
       <Inputs1 data2 = {
        this.state

       } handleChange2 = {this.handlChildChange}
       saveDataToParent = {this.saveDataToParent}
       />

    </div>
  }

}

class Inputs1 extends React.Component{
  constructor (props){
    super()

    this.state = {
      currentId: -10 ,
      newVal: "NA - states"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOld = this.handleChangeOld.bind(this);
  }

  handleChange(event){

    //this.props.onTemperatureChange(e.target.value);


    const name = event.target.name;
    const value = event.target.value;
    //this.props.data2[name] = value;
    //this.setState({
    //  [name]: value
  //  });
    this.props.handleChange2(event);
  }


  handleChangeOld(event){
    //alert("??");
    //this.props.onTemperatureChange(e.target.value);


    const name = event.target.name;
    const value = event.target.value;
    //this.props.data2[name] = value;
    this.setState({
      [name]: value
    });
    //this.props.handleChange2(event);
  }


  render(){


  return <div>
    <h3> I am child I will pass those inputs to parent</h3>

    input id: <input type = "text"
    value = {this.props.data2.currentId}
    name = "currentId"
    onChange = {this.handleChange}
    /> <br/>
    input new value: <input type = "text"
    value = {this.props.data2.newVal}
    name = "newVal"
    onChange = {this.handleChange}
    />

    <button onClick = {this.props.saveDataToParent}
    >
    Save</button>

    <div>
      <h1>Trying that onChange is inner just the saving out</h1>
      <h2>Answer - u can create inner onChange but it's useless because u want the parent know about the value so u must conncet it
      to its own onChange(of the parent)</h2>
      input id: <input type = "text"
      value = {this.state.currentId}
      name = "currentId"
      onChange = {this.handleChangeOld}
      /> <br/>
      input new value: <input type = "text"
      value = {this.state.newVal}
      name = "newVal"
      onChange = {this.handleChangeOld}
      />

      <button onClick = {this.props.saveDataToParent}
      >
      Save</button>
    </div>


  </div>
  }
}





export default ItemsTry2;
