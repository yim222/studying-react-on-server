'use strict'

//Here I organize all the components of the app and move them to the root2

class MainView extends React.Component{
  constructor(props){
    super()
    this.msg1 = "Here is my components - Location App";
  }

  render(){
    return <div>
      <h1>{this.msg1}</h1>
    </div>


  }



}

//render it to app
ReactDOM.render(<MainView/>,
document.getElementById("root"));
