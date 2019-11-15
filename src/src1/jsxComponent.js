'use strict'


class JsxComponent extends React.Component{
  render(){

    return (


      <div><h3>I am JSX outer component</h3>
      <p>I comes from JSX component that resides in /src,
      and when u change the file, u need to run the compieler as
      described
      <a href ='https://reactjs.org/docs/add-react-to-a-website.html#run-jsx-preprocessor'>HERE</a>
      how to make it on the project that generated with regular react ? well it's a question
      </p>
      <p className = 'question'>Don't know how to make the npx compiler to specific path</p>
      <h1> and remember to write when u want to define CSS class - "className" not class becaue it's generate errors</h1>
      </div>


    );

  { /*//this is the jsx syntax instead the line below .
    //  return e2('h1', null, 'I am with syntax thatt generate html'); */}
  }
  /*
  eturn e(//display <button>
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Like'
  );*/

}
let domContainer3 = document.querySelector('#jsxComponent2');
ReactDOM.render(<JsxComponent />, domContainer3);
