
class BasicComponent1 extends React.Component{//don't forget the extends

  constructor(props){    super();
    //this.props.par2 = "I am props from the constructor ";
    this.state = {

      a: "I am state a wil be change on 5 seconds",
      b:"I am state b",
      c: 10 //+ this.props.num1 - u can't because the props is yet defined

    };
    this.changeStateA = function(value){
      //this.state.a = value; //wrong
      this.setState({
        a: value
        //cNum: 5 + this.props.num1

      });

    };

    //const multiplyES6 = (x, y) => { return x * y };
    //with function
    this.changeStateC = ()=>{
        this.setState((state, props)=>({

          c : this.state.c+ this.props.num1

        }));
    }


    }



  componentDidMount() {

    setTimeout(
      ()=>{this.changeStateA("new Value")},
      5000
    );

    setTimeout(//instead of   setInterval that repeating
      ()=>{this.changeStateC()},
      5000
    );

  }

  componentWillUnmount() {}



  render(){

    return(//here is the JSX that u want to render (view)
      <div>{/* all need to be inside one div, and this is how u insert comments*/}
      <p>I am Component Class</p>
      <p>this is props1 like par - {this.props.par1}</p>
        <p>u can't define the props in constructor - {this.props.par2}</p>
        <p>I am props num1 as number = {this.props.num1}</p>

        <p>Those are my states : a : {this.state.a }, b : {this.state.b}</p>
        <p>I c state that at first I am adding 5 to props num1. is work ? = {this.state.c + " "}
         No it's not because the props is yet ready. But u can with method that do it just after props is ready<br/>
        like that : see how it's changed. it's <b>setState with function</b> </p>
        <p>this is a way to call function too - should be familiar with that : <br/>
        {"fetchPosts().then(response => {"
    + "this.setState({"
    +   "posts: response.posts"
  +   "});"
+  " });}"}
</p>
<p>3 Rules of component: <br/>
  1-State Updates May Be Asynchronous - That mean if u want to link it with props u should do it with setState as function,
  as u can see in the above c state<br/>
  2- State Updates are Merged - It says that if u change 1 property of state it doesn't change the others.<br/>
  3- The Data Flows Down - It says each component is with its individual state, not affect or affected by other, and u can insert it to other
  component here is example to that too - https://codepen.io/gaearon/pen/zKRqNB?editors=0010 and this is
  the explanation - https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down<br/>
  Any data or UI derived from that state can only affect components “below” them in the tree.
</p>
<p>User-defined means that u declare the DOM as component not as regualr HTML for example - {"<Component1/>"}</p>

<p>In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.</p>
<p>So stateless is functional component that has no state. and stateful is with states </p>


    {/*  <!-- u can't put it here   <button onClick = {this.tick( )}>change state a</button> -->*/}


      </div>


    );


  }

}

//define the element with pars
const element11 = <BasicComponent1 par1 = "I am par1 - props" par2 = "I am par2 - Try to uncomment in the constructor and see that u can't "
num1 = {15}/>;

//rendering it into the HTML
ReactDOM.render(element11,document.getElementById("myBasic1") );
