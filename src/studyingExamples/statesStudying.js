'use strict'

//Learning about states

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Isrel!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>

        <p>As u see this is cannot be change because it's props. but... this </p>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock date = {new Date()}/>,
  document.getElementById('stateA1')
);

class ClockChanged extends React.Component {

  constructor(props){
    super();

    this.explain1 = "I am class with state . \nU define it with constructor with (props)\n Class components should always call the base constructor with props."
    +"\n The state is defined with this.state, and we gave it value at the constructor this.state.date = new Date();";
    this.explain2 = "Lifecycle Methods to a Class - it's mean method that change things. It's the life to be changed and change\n "
    +"But more than that. Life cycle mean that when it's not in life- it's not active, destroy and clean the resources. ";

    this.explain3 = "mounting - the doing new method when it's needed like element that sometimes is rendered and sometime not. So when\n"
    +"It's rendered we create the method (set it) that's mounting (הרכבה ). \n"
    +"Unmounting is the vice versa process - to get down the setting for not create unnecessary power (memory ) wasted and hold for nothing(why the \\n not work??)";

  //  this.state.date = new Date();//won't work

    this.state = {//define it as object

      date: new Date()


    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //do when it's necessary when it's rendered.
  componentDidMount() {//so don't get - u can define methods outside of constructor ? This is API methods  seems like ?
  //u can put it in the constructor too, but like that is the right way .
  this.timerID = setInterval(
    () => this.tick(),
    1000
    );
  }

  //shutdown!
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("clock stopped");
  }

  tick() {
    this.setState({//set state as is sound - contorl in the state
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Changed clock</h1>
        <p>{this.explain1}</p>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>{this.explain2}</p>
        <p>{this.explain3}</p>

        <p>As u see this is cannot be change because it's props. but... this </p>
      </div>
    );
  }
}

ReactDOM.render(
  <ClockChanged />,
  document.getElementById('stateA2')
);

//want to remove it and see if willUn mount happen - not work well - try to do it with button
/*
const seconds2 = 7;
setTimeout(ReactDOM.render(
  <Component2/>,
  document.getElementById('stateA2')
), 8000);
*/
//with butotn it's working. check the console. But get error. Whatever.
function changeDom(){

  ReactDOM.render(
    <Component2/>,
    document.getElementById('stateA2')
  );

}
