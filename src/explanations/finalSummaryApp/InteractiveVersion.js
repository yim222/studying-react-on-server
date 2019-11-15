import React from 'react';

export class InteractiveVersion extends React.Component{


  render(){

    return(
      <div>
        <h2>App Interactive Version</h2>
        <h2>The Products list : </h2>
        <ProductsListBox />

        <p>*****************************************</p>
        Doing in bottom-up way. <br/>
        test produce line : <br/>
        <ProductLine name = "milk" price = "6" stocked = {false}/><br/>
        test CategoryNameLine : <br/>
        <CategoryNameLine name = "food"/><br/>

          test Products List  : <br/>
          <ProductsList/><br/>
          test search bar :<br/>
          <SearchBar/>


      </div>
    )
  }
}

const dataMock = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

//From bottom to up
//Product line
function ProductLine(props){

  return(
    <span>
      {
        props.stocked? <span className = "col-sm-6">{props.name} </span>
         : <span style = {{color: "red"}} className = "col-sm-6" >{props.name} </span>

      }
      <span className = "col-sm-6">|| {props.price}</span>
    </span>
  )
}

//Category Name line
function CategoryNameLine(props){

  return (
    <span className = "col-sm-12">
      <b>{props.name}</b>

    </span>
  )
}

function ProductsList(props){
  const notFiltered = dataMock;
  //let data = dataMock;



  //filter the data mock before display it
  //const result = words.filter(element => /*only that true with that:*/ word.length > 6);

  let data = notFiltered; /*.filter(product => {
    product.name.includes("ball");
  });*/
  //alert(notFiltered[0].name.includes("ball"))
  //alert(props.searchText);
  data = notFiltered .filter(product => {
    return product.name.includes(props.searchText);
  });

  if(props.onlyStocked){
    data = data .filter(product => {
      return product.stocked;
    });
  }


  //display it
  let currentCategory = "";
  let rows = [];
  //Do for each element:
  data.forEach(function(element){
  //  console.log("hi");
  //  console.log(element)
    //Save the category - if it's new - produce line of category and Assign it.  . if not do nothing.

    if (currentCategory !== element.category){
      currentCategory = element.category;
      rows.push(<div><CategoryNameLine name = {currentCategory}/></div>);
    }
    //put Product line
    rows.push(<div><ProductLine name = {element.name}
    price = {element.price}
    stocked = {element.stocked} /></div>);




  });

  return(
    <div id = "productsList">
      <span>Name|</span><span>|Price </span>
      {
        rows
      }

    </div>


  )
}

function SearchBar(props){

  return(
    <div>
      <input placeholder = "Search..." onChange = {props.onChange} value = {props.searchText}/><br/>
      <input type = "checkbox" value = {props.onlyStocked} onChange = {props.checkboxOnChange}/>Only show products in stock
    </div>
  )
}
class ProductsListBox extends React.Component{
  constructor(props){
    super();
    this.state = {
      searchText : "ball",
      onlyStocked: false
    }
  }
  searchBarOnChange = (ev) =>{
    ///console.log("???")
    this.setState({
      searchText:ev.target.value
    });
  }
  checkboxOnChange = (ev) =>{
    //console.log("Work ? " + ev.target.checked)
    this.setState({
      onlyStocked: ev.target.checked
    });
  }
  render(){
    const data ="a";
    return(
      <div id = "productsListBox">
        x = {this.state.searchText} y ={this.state.onlyStocked+""}
        <SearchBar searchText = {this.state.searchText} onChange = {this.searchBarOnChange}
        checkboxOnChange = {this.checkboxOnChange} onlyStocked = {this.state.onlyStocked}/>
        <ProductsList
        
          searchText = {this.state.searchText}
          onlyStocked = {this.state.onlyStocked}
        />


      </div>
    )
  }

}
