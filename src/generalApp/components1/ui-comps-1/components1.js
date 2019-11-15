import React from 'react';
import {Day} from '../../../locationApp/components3.js'

export class MonthDayWeekDay extends React.Component{

  constructor(props){
    super();

    }
    render(){
      return(
        <div>
          <div>If the month will start on <Day code = {this.props.startingMonthDay}/> <br/>
          month day {this.props.md} will fall on <br/>
          <Day code = {this.props.wd}/>
          </div>
        </div>

      )

    }
}

export function FormForGetMonthDayWeekDay (){
  return(
    <div style = {{paddingBottom:"50px" }}>

      <form action = "/routing-comp/weekBymonthDay" onSubmit ="" method = "get" target = "_blank">
        Starting Month Day : <br/>
        <input name = "startingMonthDay" /><br/>
         Month Day : <br/>
        <input name = "monthDay" /><br/>
        <input type = "submit" value = "clickMe"/>

      </form>


    </div>
  )
}
