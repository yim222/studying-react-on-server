import React, { Component } from 'react';
import {Location, EventsHandling, ConditionalRendering, CheckHour} from './components'
//For readability convience I seperated this to more part - important that it's work with Components.js and vice versa
//part2

export class ShowLists extends React.Component{


  constructor (props){
    super();
    this.list1 = [1,2,3];

    this.showList1 = this.list1.map((item) =>

     <li>I am item #{item}</li>

   );

   this.prodcuts = [
     {name: "Bisli", price : 2 },
      {name: "Bamba", price : 4 },


   ]

  }

  showList(listN){



  }

  render(){


    return  <div className = "explain">
        <h1>List And Keys</h1>
        <a href = "https://reactjs.org/docs/lists-and-keys.html" target = "_blank">
        All about it
        </a>
      <p>This is simple JS code to show list : <br/>
        list1 = {this.list1}
        {
          //numbers.map((number) => number * 2);
          this.list1.map((item) =>

           item * 4 +"hi "


        )

        }

        <br/>
        This is list of elements
        <ul>{this.showList1 }</ul>


      </p>
      <p>Ok great u need it for the locations list </p>

      <p>Here is Component that represent list and get a props</p>

      <ListComponent1 list = {this.prodcuts} />
      <p>Key is the id of the element . it's important to use it, U can use index if u don't have ready key,
      But it's not recommended for list that the order can be changed. (so what I need do and how I'm access this? ) <br/>
      Also, keep putting that in the map itself not in other place
      - It's not can be accessed in component if u want it pass it as props . not sure. It's a ey word, don't use it
      in props .


      </p>
      <p>Here I list the above item with embedded Js code (unlike above that is a variable)</p>
      {this.list1.map((item) =>item * 4 +"hi embeded ")}
      <h1><u>important to remeber :</u> <br/>
        regular setState <br/></h1>
        <pre>{""
      +  "this.setState("

      +  "  {"
      +  "    myPropOfState:\n this.propsOrOtherAcceptAbleValue"

    +    "  }"

    +    ");"}
      </pre>
      <h1>In function : </h1><pre>
      {"this.setState((state, props)=>({"

  +    "  location :  this.props.location"

  +  "}));"}
</pre>

<h2>Important too - in function u need 2 things : <br/>
1- Bind it<br/>
2- make in that proper setState
</h2>
      </div>

  }



}


function ListComponent1 (props){

  const listItems = props.list;

  const view = listItems.map((item1) =>
    <li className = "productStyle1" key ={item1.toString()}>Product name = {item1.name}, price = {item1.price} Sheqels
    itemToString ={item1.toString()} </li>

  );
/* - example
const listItems2 = listItems.map((number) =>
    <li>{number}</li>
  );
*/


  return (
    <ul>{view}</ul>

  )

}

export class Forms extends React.Component{

  constructor(props){
    super();

    this.state = {val1 : "initial val",
  val2: 0 ,val3 : 40,
  textarea1 : "I am default of textarea text"
  };
      //general fields
      this.viewVar = this.state.val3;
      this.viewVar2 = this.state.val3;
      this.displayTextarea1 = this.state.textarea1;
      this.stableVar = "I am stable not just changed after regular type\n. If u want- do submit!!!"

    this.assignValue = this.assignValue.bind(this);
    //this.handleSubmit.bind(this);
    this.doForm1 = this.doForm1.bind(this);
    this.doForm1Input = this.doForm1Input.bind(this);
    this.doTextArea = this.doTextArea.bind(this);
    this.doTextAreaSubmit = this.doTextAreaSubmit.bind(this);



  }

  //method to assign value from input to the vars
  assignValue(event){
    this.setState({val1: event.target.value});
    //this.setState({val1: event.target.value});
 }

 doForm1(event){
   //this.setState({val2: event.target.value});
   this.setState({val3: this.state.val2})
   event.preventDefault();//prevent .. .do the default action of form... ?
 }

 doForm1Input(event){
   this.setState({val2: event.target.value})

 }


  handleSubmit(event) {
   alert('A name was submitted: ' + this.state.value);
   event.preventDefault();
 }

 doTextArea(eventi){

   this.setState({
     textarea1 : eventi.target.value

   });

 }

 doTextAreaSubmit(eventi){
   //alert(eventi.target.value);//u need to give it the value of the textarea not of this event that's undefin

   this.setState({
     //textarea1 : eventi.target.value

   });

   this.stableVar = this.state.textarea1;

   eventi.preventDefault();


 }

  render(){

    this.viewVar2 = this.state.val3;

    var renderDisplayStateTextarea1 = this.state.textarea1;
    return <div className = "explain">
      <h1>Form explain</h1>

      <a href = "https://reactjs.org/docs/forms.html" target ="_blank">From Here  </a>
      <p>This is "single source of truth" method, not sure what it is</p>

      <input type = "text" value = {this.state.val1} onChange = {this.assignValue}/>
      <br/>

      the val1 : {this.state.val1}

      <h2>Cool - U can now change data of components.</h2>

      <form onSubmit = {this.doForm1}>
        Form 1<br/>
        <input type = "text" value = {this.state.val2} onChange ={this.doForm1Input}/ >
        <h3>U must add onchange it's the method working - it's will be read only</h3>
        <input type ="submit" value = "Submit" onSubmit = {this.doForm1}/ >
      </form>
      affected from input  - {this.state.val2}<br/>
      affected from submit   - {this.state.val3}<br/>
      <p>The following not work becaue it's not in render.</p>
      I am the var2 that affected from the above form - {this.viewVar}<br/>
      <p>This will work : </p>
      I am the var2 that affected from the above form - {this.viewVar2}<br/>
      <p>U must make that just one form - element is update the specific value <br/>
      If u do twos it's do erro<br/>
    Not sure not cleared. Think that only one method allowed to update.<br/>
  Anyway - u nust do it onchange handler . every change must be handled.  </p>


  <h2>Text Area -- Just here below </h2>
<form onSubmit = {this.doTextAreaSubmit}>

  <textarea value = {this.state.textarea1} onChange = {this.doTextArea}/>

  <p>This is the represent field of state.textarea1 = <br/> {this.displayTextarea1}/<br/> This won't be changed becaue it's not rendered,
  So it's just created once and don't changed (rendered ) with the view (the page u see)
</p>
  <p>THis is the direct state.textarea1 = <br/> {this.state.textarea1}</p>

  <p> However - this is rendered represent of state.textarea1 , and this is changing all along = <br/>
    {renderDisplayStateTextarea1}
  </p>
  <p>And here will be stable var that changed only after submit :<br/> {this.stableVar} </p>
  <p>U must prevent defalut n submit if u want to work on the same page. because submit default is sending something and do refresh<br/>
  And don't know why but it's not work if I remove the setState from the function although it's not needed/ </p>

  <input type = "submit" value = "submit !" />

</form>



  <InnerSelected/>
  <p>About the file input u have doc in uncontrolled components. </p>
    </div>

  }

}


class InnerSelected extends React.Component{

  constructor(props){
    super()
    this.state = {
      choosenMood : "I don't know how I feel yet "

    }
    this.changeMood = this.changeMood.bind(this);


  }

  changeMood(e){
    this.setState({
      choosenMood: e.target.value
    });

  }

  render(){
    var initialMood = "hopeVal";




    return <div className = "explain">

      <h2>Little on select Tag</h2>
      <label>
        U can be in
        <select value ={initialMood} onChange = {this.changeMood}>
          <option value = "happinessVal" >Happiness</option>
          <option value = "faithVal" >Faith</option>
          <option value = "enjoyingVal" >Enjoyin</option>
          <option value = "hopeVal" >Hope</option>


        </select>
        all day


      </label>
      <p>What a king U R. U have choosed to be in {this.state.choosenMood} all day</p>
      <p>Now let's try with array - no it's not can list automatically but u define it with multiple choices </p>


      <label>
        U can be in
        <select value ={["happinessVal", "enjoyingVal"]} onChange = {this.changeMood} multiple ={true}
          >
          <option value = "happinessVal" >Happiness</option>
          <option value = "faithVal" >Faith</option>
          <option value = "enjoyingVal" >Enjoyin</option>
          <option value = "hopeVal" >Hope</option>


        </select>
        all day


      </label>
      <p>It's didnt change well because u need to create it another handler. With array. need to know about target and how to pull,
      from it the array values</p>







    </div>
  }
}


export class MultipleInputs extends React.Component{

  constructor(props){
    super();
    this.state = {
      input1: "nothing",
      input2: "nothing2",
      stateProp1: "Default of stateProp1",
      isNull: null,
      val3: "initVal3",
      val4 :"initVal4"

    }
    this.changeVars = this.changeVars.bind(this);
    this.setStateWithObj = this.setStateWithObj.bind(this);
    this.switchNull = this.switchNull.bind(this);
    this.changeMe1 = this.changeMe1.bind(this);
    this.changeVal3 = this.changeVal3.bind(this);
    this.changeVal4 = this.changeVal4.bind(this);


  }

  changeVars(e){

    const name = e.target.name;
    //alert(name);
    const value = e.target.value;
    //alert(value);

    this.setState({

      [name]: value
    })

    /* Don't work well
    if (e.target.name === "input1"){

      this.setState({
        input1Val : e.target.value
      });

    }
    else if (e.target.name === "input2"){

      this.setState({
        input2Val : e.target.value
      });

    }
    */
  }

  setStateWithObj(){

    const justObj = {

      stateProp1: "I am new value of stateProp1"

    }

    this.setState(justObj);


  }
  switchNull(ev){

    this.state.isNull !=null ? alert ("not null") :  alert("NULL")


  }

  changeMe1(e){
    this.setState({

      isNull: e.target.value
    })

  }

  changeVal3(e){
    this.setState({
      val3: e.target.value
    });

  }
  changeVal4(e){
    this.setState({
      val4: e.target.value
    });

  }


  render(){




    return <div className ="explain" >

      <h1>Working with multiple input - ID by name... Just here </h1>

      <div>
        input:<input type= "text" value = {this.state.input1Val} onChange = {this.changeVars} name = "input1"/>
         input:<input type = "text" value = {this.state.input1Val} onChange = {this.changeVars}  name = "input2"/>

         <p>value = {'{"text"}'} - won't work u must connect it to JS apparently </p>

         <h2>Here u can see how it's change in one function two inputs, according to condition identifcation by name but it's not work well</h2>
         <p> this.state.input1Val = { this.state.input1 }</p>
         <p> this.state.input2Val = { this.state.input2 }</p>
         <h2>Now it's work and I understand. U need to equal the states properties according the name and then assign the value .
           Don't know if with if/else it's work</h2>
         <p>If I do two inputs with same function and other value, the second is stuck</p>
         <a href = "https://reactjs.org/docs/forms.html#handling-multiple-inputs">example??</a>

         <p>Checking how to add just object to the state see here : stateProp1 = {this.state.stateProp1}</p>

         <button onClick = {this.setStateWithObj}>Change stateProp1</button>
         <p>Work! setState() automatically merges a partial state into the current state,</p>

         <h2>Need to know how and if I need to use ReactDOM in such practice of work</h2>

         <h2>Null input</h2>
         <input value={this.state.isNull} onChange = {this.changeMe1} />
         <button onClick = {this.switchNull}>switch null</button>

         <h3>There is an <a href = "https://reactjs.org/docs/forms.html#alternatives-to-controlled-components">
         alternative</a> to controlled inputs </h3>
         <p>And as always - there are solution ,frame work and other bullshit - https://reactjs.org/docs/forms.html#fully-fledged-solutions</p>
         <p>The idea in the "controlled inputs" is that when u do onChange to the state of the value on input it's always be that. other
           wise it's be mess because u try to change it to something else but the value of that not changed</p>

           <p>that's the reason that this will work : </p><br/>
            <input value = {this.state.val3} onChange = {this.changeVal3}/><br/>
           and this not :
           <br/>
           <input value = {this.state.val3} onChange = {this.changeVal4}/>
           becaue here I define the change to chnage something else, so the value isn't changed and it's seems stuck .

           <p>state.val3 - {this.state.val3} state.val4 - {this.state.val4}</p>

           <p>Try to change (temporary for future studying) the value of the second input to those who is changed (val4)
             and see how it's work </p>
             <p>This won't work too - becaue that react always rendering, and this return the input to the defined value</p>
              <input value = "I am inner value that always rendered. u cannot change me " onChange = {this.changeVal4}/>
             <p>WHy it's called controlled input ? __________________________ Because u contorl it from the inside component, <br/>
             Unlike uncontrolled that controlled from outside actions. <br/>
             Single Source of truth - that's mean, that the data if UI component (like input) will be rendered (get its data) only from one
             source of the code, not more.<br/>
             U can see hrer more : https://stackoverflow.com/questions/47182888/what-does-the-single-source-of-truth-mean    </p>


      </div>


    </div>
  }


}

export class LocalStorage extends React.Component{

  constructor(props){
    super()




    //get the events from the localStorage
    //this.eventsData = localStorage.getItem("socialEventsData");
    //console.log(localStorage.getItem("socialEventsData")[0]);

    this.eventsData = JSON.parse(localStorage.getItem('socialEventsData'));
    //console.log(data2);

    //state
    this.state = {

        location: "Insert Location",
        time: "Insert Time",
        price: 0

    }

    //bind fucntions
    this.saveEventData = this.saveEventData.bind(this);
    this.changeState = this.changeState.bind(this);
    this.displaySocialEvents = this.displaySocialEvents.bind(this);
    this.saveEventData2 = this.saveEventData2.bind(this);
    this.removeAll = this.removeAll.bind (this);

    //initial set to the eventsData arry:

    if (this.eventsData == null){//empty

      //create it as array
      this.eventsData = [];
      let evData = {
        location: "Holon",
        time: "20:00",
        price: 100,
        submitted: false


      }
      this.saveEventData(evData);
      evData = {
        location: "PT",
        time: "14:00",
        price: 500


      }
      this.saveEventData(evData);
    }


  }

  //save data to array

  saveEventData(evData){

    this.eventsData.push(evData);
    console.log("data = \n " );

    for(let obj1 of this.eventsData){

      console.log (obj1.location);
    }
    //saving to localStorage
    //localStorage.setItem(evData.location, evData);
    localStorage.setItem('socialEventsData', JSON.stringify(this.eventsData));
  }

  saveEventData2(ev){
    ev.preventDefault();
    const evData = {
      location: this.state.location,
      time: this.state.time,
      price: this.state.price

    }

    this.saveEventData(evData);
    this.setState({submited: true});//for do rendering
  //  alert(ev.target.value); - undefinde
    //this.eventsData.push(evData);
    //console.log("data = \n " );

  //  for(let obj1 of this.eventsData){

    //  console.log (obj1.location);
  //  }
  }

  displaySocialEvents(){
    //this.eventsData

    return this.eventsData.map((sEvent) =>
    <SocialEvent location = {sEvent.location} time = {sEvent.time} price = {sEvent.price}  />

  );






  }

  changeState(ev){
    const name = ev.target.name;
    this.setState({
      //this.setState({ someProperty: { ...this.state.someProperty, flag: false} });


        [name]: ev.target.value
        //...this.state.someProperty[ev.target.name], flag : ev.target.value


    })

  }

  //clearAll
  removeAll(ev){

    localStorage.clear();
    //this.setState({submitted: true});
    this.eventsData =[];
    this.setState({submited: true});//alert("work?");

  }
  render(){

    return <div className ="explain">

      <h1>Local Storage</h1>
      <h2>Here I show how to save data and get from the Local browser storage</h2>
      <p><a href = "https://www.taniarascia.com/how-to-use-local-storage-with-javascript/"> Good Reference (U can get inspirition to writing blog)</a></p>
      <h2>4 functions:</h2>
      <pre style = {{textAlign : 'left', padding: '50px'}}>

        setItem()	Add key and value to local storage<br/>
        getItem()	Retrieve a value by the key<br/>
        removeItem()	Remove an item by key<br/>
        clear()	Clear all storage<br/>
      </pre>
      <p>This is my Component : </p>
      <SocialEvent location = "Somewhere" time = "10:00" price = {50}  />

      <u>todo:</u><br/>

      1- save data of new event<br/> - Done -localy
      2- Display the data of all location<br/> - done
      3- Save it with the localStorage <br/>

      <p>1- save data of new event</p>

      <h3>All Social Events :</h3>

      {this.displaySocialEvents()}

      <button onClick = {this.removeAll}>CLEAR ALL</button>

      <form onSubmit = {this.saveEventData2}>
        <p>Insert new event</p>
        Location: <input type ="text" value = {this.state.location} name = "location" onChange = {this.changeState}/>
        <br/>
        Time :  <input type ="text" value = {this.state.time} name = "time" onChange = {this.changeState} />
        <br/>
        Price : <input type ="number" value = {this.state.number} name = "price" onChange = {this.changeState}/>
                <br/> <input type ="number"  /><b/>
                <input type = "submit" value = "submit"/>
      </form>



      <p>this.state.location undefined ?? : {this.state.location} </p>
      <p>Important - if u want to render after submit only - so make the function out of the
      render (otherwise it will be renderd in each state change) and in the submit make update to the state (u can do a field like isSubmitted)
      see here what I did for create new event </p>
      <p>Insight! u need to touch the state for force the page to be rendered again ... see at the save2 fucntion</p>

      <p>If u want to use in objcets from localStorage u need to do it with json. see inside.<br/>
      and about generated Id's see in the locationApp. See installation is very easy uuid.
       </p>


    </div>
  }


}

//User-defined Component
function SocialEvent (props){


  return(<div style = {{border : "solid 2px pink", width : "75%"}}>
    <h3>Event Details : </h3>

    <p>Location : {props.location} || Time :{props.time } || Price: {props.price} Shekels ||</p>



  </div>

  );

}

export class GenerateIDS extends React.Component{


  render(){

  return <div className = "explain">
    <h2>Need todo : explain about the generated ID's (keys)</h2>


  </div>}

}
