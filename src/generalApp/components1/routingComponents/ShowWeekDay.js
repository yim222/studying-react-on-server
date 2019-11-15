import React from 'react';
//const queryString = require('query-string');
import QueryParamsParser from 'query-string';

//local Functions
import {getDayOfWeek} from '../../webServices/basicFuntions.js.jsx'
import {MonthDayWeekDay, FormForGetMonthDayWeekDay} from '../ui-comps-1/components1'
//U here !

export class Mediator extends React.Component{
  constructor  (props){
    super();
    this.state = {
      startingMonthDay: null,
      md: null,
      wd : null

    }

  }
  componentDidMount(){

  }
  render(){
    return(
      <div>hi</div>
    )
  }

}

export class  ShowWeekDayByRouteComponent extends React.Component {

  //props - query, startDay, md
  //States - wd

  constructor(props){
    super();
    this.state = {
      wd:null
    };
  }

  componentDidMount(){
    getDayOfWeek(this.props.query).then(response =>{
      console.log("response final  " , response);
      this.setState({
        wd: response
      });
    });
    // document.getElementById("focusMe").focus();
    window.location = '#focusMe';


  }

  /*

  */
  render(){

    return (
      <div id = "focusMe">

        Hi ShowWeekDayByRouteComponent {this.props.md } WD  = {this.state.wd} query = {this.props.query}
        <MonthDayWeekDay startingMonthDay = {this.props.startDay} md = {this.props.md} wd = {this.state.wd}/>

        <FormForGetMonthDayWeekDay/>
      </div>

    );
  }

}

export function ShowWeekDayByRoute ({match,location,history}){
  console.log("ShowWeekDayByRoute")


  //If you want to learn see here (uncomment)
  console.log("If you want to learn see here ");
  // return testMe ({match,location,history});
  //// TODO:

  // 1- extract from the query the startingMonthDay and the md

  //...getting the query string. This defined with the api of location .
  var queryString = location.search;
  console.log(" ...getting the query string -> queryString = location.search; = " , queryString );

  //Parsing it by query-string package.
  //api - https://www.npmjs.com/package/query-string
  console.log("Parsing it by query-string package... ")
  var queryArray = QueryParamsParser.parse(queryString);
  console.log("queryArray = ", queryArray);

  //validate the quer
  console.log("Checking if the query is valid ...  queryArray.length < ? " , queryArray.length );

  if (queryString.length <1   ){
    console.log("There is not valid query params ! ");
    return <h1>null - queries NOT valid </h1>;
  }else{
    console.log("Query params OK ");
  }

  //extracting the values :
  console.log("extracting the values :  ");
  let startingMonthDay, monthDay ;
  startingMonthDay =   queryArray.startingMonthDay;
  monthDay = queryArray.monthDay;
  console.log("startingMonthDay = ", startingMonthDay, "monthDay = " , monthDay);

  // Send the query to backend server and get the answer -- > It happens on the component
  return <ShowWeekDayByRouteComponent md = {monthDay} query = {queryString} startDay = {startingMonthDay}/>
  }

//A learning function....
export function testMe ({match,location,history}){
  console.log("Test route")
  console.log("Test route . match = ", match);

  console.log("Test route . location = ", location);
  //var url = new URL(match);
  //var urlSearchParams = url.searchParams;
  console.log("location.search ? ", location.search)

  if (location.search.length <1   ){
    console.log("There is not valid query params ! ");
  }else{
    console.log("Query params OK ");
  }
  //getting the postfix of queryParams
  var queryString = location.search;
  //var urlSearchParams = url.searchParams;

  //Parsing it by query-string package.
  //api - https://www.npmjs.com/package/query-string
  var params2 = QueryParamsParser.parse(queryString);
  console.log("queryString  = ", queryString);
  console.log("params2  = ", params2);
  console.log("params 2 .monthDay ?  ");
  if (params2.monthDay != null){
    console.log( params2.monthDay);
  }

  //Some more api of react-router
  console.log("history = ", history);
  console.log("THis route = " , this)
  console.log( "query blabla ?  ", QueryParamsParser.parse("?x=2"));

  getDayOfWeek();



  //Now make http-request





  return(
    <div>
      <h1>Hi</h1>
      <MonthDayWeekDay startingMonthDay = {1}
      md = {2}
      wd ={3}
      />
    </div>
  )
}
