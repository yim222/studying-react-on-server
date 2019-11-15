'use strict'

//here u can put consts..

const element2 = <p className ='jsCode' >I am element const- need to be written outside the class</p>;
const element3 = (
  <h3 className="jsCode">
    I am element in react - with just jsx code.
    Babel compiles JSX down to React.createElement() calls.
    so it's like the other element in react code
  </h3>
);

const element4 = React.createElement(
  'p',
  {className: 'jsCode'},
  'I am element in react - with actuall react code search element4. <br/> anyway - we are elements of the page.'
  +'U need to decide if u want to create element in the code of the class as vars or in the direct html code.  .'
);
class JsxComponent extends React.Component{
  constructor(){
    super()

    this.var1 = "I am var1 from outside ";
    this.styleAttribute ={color: 'white', backgroundColor: 'blue'}
      this.class1 ="jsCode";
      const bracketVar = ( <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>);
    this.func1 = function(){

      console.log("Hi I am func1 ");
      return "Hi I am func1";
    }

    this.sum = function(x,z){

      return x + " + " + z + " = " + (x+z);
    }

  }
  render(){

    return (


      <div><h3>I am JSX outer component var1  = {this.var1}</h3>
      <p>I comes from JSX component that resides in /src,
      and when u change the file, u need to run the compieler as
      described
      <a href ='https://reactjs.org/docs/add-react-to-a-website.html#run-jsx-preprocessor'>HERE</a>
      how to make it on the project that generated with regular react ? well it's a question
      </p>
      <p className = 'question'>Don't know how to make the npx compiler to specific path</p>
      <h1> and remember to write when u want to define CSS class - "className" not class becaue it's generate errors</h1>


      <h1>The things u should know : </h1>
      <ul>
        <li>
          U can insert expression of JS (JS syntax ) in the code with <span className = "jsCode">{'{ JS Syntax }'}</span>
        <br/>
      for example (check the code inside):<br/>
    <h2><span className = "jsCode">{

      this.var1

    }</span></h2>
        <p>I am function -<span className = "jsCode"> {this.func1()}</span></p>
        <p>More fucntion - <span className = "jsCode">{this.sum ( 29, 89)}</span></p>
        <p>Those are example for inserting functon inside the tags . </p>
        <p className = {this.class1}>U can insert js code as attribute as u this element get the class name </p>
        <p style = {this.styleAttribute}>in style  attribute it's little differnet see here as u see in this element white on blue<br/>
        U need to define it in JS as object not as string - that's the code : <br/>
        this.styleAttribute ={"{color: 'white', backgroundColor: 'blue'}"}<br/>and in full tag :
        {'const element4 = <div className ="jsCode" style = {{color:"red"}}>{msg2}<br/>{fixedMsg}</div>"'}


      </p>
        </li>
        <li>
          <p>Close single tags
            - U must close in JSX code single tag (even it's work on regular HTML), like {"<br>"} won't work u need to
              do it {"<br/>"}<br/>
                check it in the  br here
          </p>

        </li>
        <li>
          <p>Also - if you want to insert code of js as string, u need to put it inside curely brackets,<br></br>
          and enclose it with "" like that's code:<br/>
          {"{\"{it's been hard even to explain this }\"}"}
          </p>
        </li>

        <li>
          <h2>
            convention and syntax rules:


          </h2>

          <p>The convention in the code is like react with camelCase not with - , <br/>
          U need to write "className" instead of just class, and in the properties also backgroundColor not background-color
        </p>

        </li>
        <li>
          <p>
            <a href ="https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks" target = "_blank">
            JSX prevents attacks - see here - didn't checked it</a>

          </p>

        </li>
        <li>
          {element2}

        </li>

        <li>
          Element as var (const) in JSX code that compiled automatically :
          {element3}
          VS
        </li>

        <li>
          Element as var of react actuall code .
          {element4}

        </li>



      </ul>

      </div>

    );
  }


  /*//this is the jsx syntax instead the line below .
    //  return e2('h1', null, 'I am with syntax thatt generate html');
    /*
    eturn e(//display <button>
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );

    */
}
//end of class



let domContainer3 = document.querySelector('#jsxStudying');
ReactDOM.render(<JsxComponent />, domContainer3);
