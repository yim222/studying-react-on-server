

export function  getDayOfWeek(query){
  console.log("lingar - good method - getDayOfWeek(query)")//  it  show but U have atesting methods that make confuse. Consider remove them and do cleaner doc
  console.log("WS - getDayOfWeek(query), query = " , query ) ;




  console.log("If U want to learn about Web request - uncomment below")
  learnWSRequests();
    return  fetch('/ws/weekBymonthDay'+query)
          .then(myResponse => {
            console.log("response = ", myResponse);
            return myResponse.text();
          })//.text()
          .then(result  => {
       console.log("result = ", result);
       return   result;
     });
}

export function learnWSRequests(){
    // fetch('api/multiPropNames/' + this.propId)
    console.log("ws - getDayOfWeek")

    //
    fetch('/ws/weekBymonthDay?startingMonthDay=4&monthDay=23')//If u don't do it with /at start
    //It will derive on the routing so
    // fetch('ws/weekBymonthDay?startingMonthDay=4&monthDay=23')
    //will  come : http://localhost:3000/routing-comp/ws/weekBymonthDay?startingMonthDay=4&monthD
    //Maybe it because it like that defined on the setup proxy

          .then(myResponse => {
            console.log("response = ", myResponse);
            return myResponse.text();
          })//.text()
          .then(arrivedData => {
       console.log("arrivedData = ", arrivedData);
        });


    //Another test->http://localhost:8080/ws/basicTest
    fetch('/ws/basicTest')
      .then(myResponse => {
        console.log("response = ", myResponse);
        return myResponse.text();
      })//.text()
      .then(arrivedData => {
   console.log("arrivedData = ", arrivedData);
    });

    //Now I'll do the work.
    ///First - valid the params .



}
