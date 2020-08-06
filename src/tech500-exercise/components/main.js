import React from 'react';
import {world} from '../mocks/treeData.js'
import '../style.css'
import {Observable,of, from, interval } from 'rxjs';


export class Main extends React.Component{
  render(){
    return(
      <div className = "main-container">
        <h2>TECH500 Exercise</h2>
        <TreeElement name = "Holon">
            <TreeElement name = "TG"/>
        </TreeElement>
        <TreeList/>
      </div>
    )
  }
}

class TreeElement extends React.Component{
  constructor(props){
    super();
    this.state = {
      checked: true
    }
  }

  componentDidMount(){
    console.log("lingar here ? ");

    let obs1 = new Observable();
    obs1.subscribe(()=>{
      console.log("Hi obs1");
    });
    // let obs2 = interval(5000);
    // obs2.subscribe(()=>{
    //   console.log("Hi obs2");
    // })

    let a = {y:"jj"};
    let a2 = ["a", "c"];
    let gar =[];

    a2["prop1"] = "propVal";
        a2["prop1"] = "propVal2";

    for (let i in a2){
      gar.push(i);
    }
    console.log("gar = ", gar)

    // console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));
    let json1 = '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"yilk","price":4.04},{"name":"rice","price":4.04}]';
    console.log("json1 = ", json1);
    let data1 = JSON.parse(json1);
    console.log("data1 = " , data1);
    console.log("res = ",this.sortByPriceAscending(data1));

    document.body.innerHTML = `
      <div id = "textDiv">
        <p style="font-size: 40px;">Apple</p>
        <p style="font-size: 10px;">Pear</p>
        <span style="font-size: 110px;">mh</span>
      </div>
    `;

    this.scaleFontSize(document.getElementById("textDiv"), 1);
    console.log("document.body.innerHTML  =" ,document.body.innerHTML);
    /***********end************/

  }
  sortByPriceAscending(arr){
    let result = arr.sort(function(a, b) {
      if(a['price'] === b['price']){
        if (a['name'] <  b['name'])   return -1 ;
      }
      return a['price'] - b['price'];
    });
    return JSON.stringify(result);
  }

  scaleFontSize2(parent, scalingFactor) {
    console.log("scaleFontSize here ", parent );
    // const el1 = document.getElementById(parent);

    for (let i = 0; i < parent.children.length; i++) {
      let el = parent.children[i];
      console.log(parent.children[i].tagName);
      console.log(parent.children[i].style.fontSize);
      var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
      console.log("font-size = ", style );
      var res = style.split("px");
      console.log("rees = " , res )


      let newFont =  (res[0] * scalingFactor) + "px";
      parent.children[i].style.fontSize = newFont;


    }
  }

  scaleFontSize(parent, scalingFactor) {

    for (let i = 0; i < parent.children.length; i++) {
      let el = parent.children[i];
      let fontSize = el.style.fontSize;
      fontSize = fontSize.split("px");
      let newFont =  (fontSize[0] * scalingFactor) + "px";
      parent.children[i].style.fontSize = newFont;


    }
  }

  onChange = (ev) => {
    //Assign new value to checkbox
    // this.setState({
    //     checked: !this.state[ev.target.name]
    // });
  }

  render(){
    let isChecked = this.state.checked;
    console.log("isCheck = " , isChecked);//toDelete
    return (
      <div className = "node">
          <input type="checkbox" checked = {isChecked} onChange = {this.onChange} name = "checked"/> <span className="title">{this.props.name}</span>
          <div className = "children">
            {this.props.children}
          </div>
      </div>
    )
  }
}

class TreeList extends React.Component{
  constructor(props){
    super();
    this.treeData = null;
  }
  componentWillMount(){
    this.treeData= world;
  }

  createTree = (el ) => {
    let view = null;
    // console.log("el = " , el );
    view = el.map((item, id) => {

      if (item.children !=null){
        return  <TreeElement key = {id} name = {item.name}> {this.createTree(item.children)} </TreeElement>;

      }
      else{
        return  <TreeElement key = {id} name = {item.name}/>;
      }

    });
    return view;
  }


  render(){
    let tree3 = this.createTree(this.treeData);
    return(
      <div>
        // {tree3}

        <h1>Hi everything OK</h1>
      </div>
    )
  }
}
