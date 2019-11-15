'use strict'

const element1 = <h1 className = "jsCode">I am element 1 I will be in div "el1"</h1>;
//ReactDOM.render(whatUwantto render, theDomUWantToRender)
ReactDOM.render(element1,document.getElementById("el1"));
var seconds = 15;
const msg1 = "U cant chagne element, it\'s like a fixed frame that u see things through\n"
+"But u can create another and that's the way to change it.<br/> so I'll be go after " + seconds + " and changed";
const fixedMsg = "THink it\'s mean that u can't change the html but the values u can change";

const msg2 = "I am the new message";

const element2 = <h1 className = "jsCode">I am element 1 I will be in div "el1"</h1>;

const element3 = <div className ="jsCode">{msg1}<br/>{fixedMsg}</div>

ReactDOM.render(element3,document.getElementById("el3"));

const element4 = <div className ="jsCode" style = {{color:"red"}}>{msg2}<br/>{fixedMsg}</div>

function changeMessage(){
  ReactDOM.render(element4,document.getElementById("el3"));

}

//make delay
//setInterval( changeMessage, 3000);//don't know why but setInterval not wait with function with ()
//changeMessage() don't wait. U can call anonimous. or from other no-pars fucntion. Interesting.
//SetInterval is repeating u need here setTimout.
setTimeout( changeMessage, seconds * 1000);
//setInterval(tick, 1000);

function tick() {
  const element = (
    <div className = 'jsCode'>
      <h1>That's their example</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('el4'));
}

setInterval(tick, 1000);
