import React from 'react';
export function getFormValues(e){
  alert("Form called", e);
//console.log("event  = ", e);

}

export class MyForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      input1:"send me ",
      a:"zxczxc"
    }
  }
  fromReactHandleForm = (ev)=>{
    console.log("state ? ", this.state);
    ev.preventDefault();
    // alert("name = " , ev.target.name , " , value = " , ev.target.value)
    alert( this.state.input1 + "???")
  }
  handleChange =(ev)=>{
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }
  render(){
    return(
      <div>
        <h2>React Form</h2>
        <form onSubmit = {this.fromReactHandleForm}>
          <input name = "inputName"   value = {this.state.input1} onChange = {this.handleChange}/>
          <input type = "submit" value =  "send form!!!" />
        </form>
        <h2>Simple form </h2>

        <form action = "/days-list/1" onSubmit ="" method = "get" target = "_blank">
          <input name = "inputS1" />
          <input name = "inputS2" type = "submit" value = "clickMe"/>
          <input name = "inputS3" type = "radio" value = "radio-value " />-radio button
          <input name = "inputS3" type = "radio" value = "radio-value-2 " />-radio button
        </form>
        <h2>React Form - with Submit (on submit is not must it's for define function after the submit. The action is set to where )</h2>
        <form action = {"/days-list/" + this.state.input1} onSubmit = "" target = "_blank">
          <input name = "input1"   value = {this.state.input1} onChange = {this.handleChange}/>
          <input type = "submit" value =  "send form!!!" />
        </form>

        <h2>Form that work with ws-Global  (for relative maybe u need to allow it )</h2>
        <p>The values is locked and this is a problem </p>
        <form action = "http://localhost:8080/ws/testPathParams" onSubmit = "" target = "_blank">
          x - <input name = "x" />
          y - <input name = "y"   />
          a - <input name = "a" type = "number"   />
          b - <input name = "b"  type = "number"  />




          <input type = "submit" value =  "send form!!!" />
        </form>
          <form action = "/days-list/1" onSubmit ="" method = "get" target = "_blank">
            <input name = "inputS1" />
            <input name = "inputS2" type = "submit" value = "clickMe"/>
            <input name = "inputS3" type = "radio" value = "radio-value " />-radio button
            <input name = "inputS3" type = "radio" value = "radio-value-2 " />-radio button
          </form>



      </div>
    )
  }


}
