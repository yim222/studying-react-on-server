import React from 'react';
import {world} from '../mocks/treeData.js'
import '../style.css'

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

  onChange = (ev) => {
    //Assign new value to checkbox
    this.setState({
        checked: !this.state[ev.target.name]
    });
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
        {tree3}
      </div>
    )
  }
}
