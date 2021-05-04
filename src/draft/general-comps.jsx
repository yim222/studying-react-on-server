import React, {useEffect, useState} from "react";
//
//

const cnnUrl = "http://rss.cnn.com/rss/edition.rss";
const myProxy = "https://lingar-allow-cors.herokuapp.com/";

export function RegularComp1() {

    useEffect(()=>{
        console.log("Regular component created... ");
        argumentsAvailable("hii", 5 , 4);
    },[]);

    let callSyncXhr = () =>{
        console.log("Calling sync request ... ");
        syncXhr();

        console.log("Log after request");

    };

    let callAsyncXhr = () =>{
        console.log("Calling Async  request ... ");
        asyncXhr();

        console.log("Log after request");

    };


    return (
        <div>
            Draft regular component1
            <p>Try to run the browser with slow-connection</p>

            <p>TO save it - async/sync example </p>
            <button onClick={callSyncXhr}>Sync call (stopping the execution) </button>
            <button onClick={callAsyncXhr}>Async call ( isn't stopping the execution) </button>

        </div>
    )
}


function getData(url){

}

//Testing if the arbitrary args are available to the function...
function argumentsAvailable(par1){
    console.log("this is the par - ", par1);
    console.log("This are the arbitrary args  : ")
    console.log(arguments);
    console.log("See how U can see the args at the log. It doesn't know what is arbitrary and what not ")
}

function syncXhr(){
    let req1 = new XMLHttpRequest();
    req1.onload = function() {
        if (req1.readyState === 4) {
            if (req1.status === 200) {
                console.log("request done successfully. response = " , req1.response);
            } else {

                console.error("error on the reqeust - " , req1.statusText);
            }
        }
    };
    req1.open("GET",myProxy + cnnUrl, false);
    req1.send(null);

}


function asyncXhr(){
    let req1 = new XMLHttpRequest();
    req1.onload = function() {
        if (req1.readyState === 4) {
            if (req1.status === 200) {
                console.log("request done successfully. response = " , req1.response);
            } else {

                console.error("error on the reqeust - " , req1.statusText);
            }
        }
    };
    req1.open("GET",myProxy + cnnUrl, true);//actually, async is true by default
    req1.send(null);

}

//     xmlHttpRequest();
//     /**States*/ //todo model
//     const [users, setUsers] = useState([]);
//     const [uniqueUser, setUniqueUser] = useState(null);
//     console.log("happen comp")
//
//
//     //states
//     // {
//     //     "id": 11,
//     //     "email": "george.edwards@reqres.in",
//     //     "first_name": "George",
//     //     "last_name": "Edwards",
//     //     "avatar": "https://reqres.in/img/faces/11-image.jpg"
//     // }
//
//     const usersList = users.map((item, idx) =>
//         <div key={idx}>{item.first_name} - {item.last_name}</div>)
//
//
//     function xmlHttpRequest() {
//         console.log("xml tutorial ");
//
//         function reqListener() {
//             console.log("response test = ", this.responseText);
//             if (this.status === 200) {
//                 let data = JSON.parse(oReq.response);
//
//                 // setUsers(data.data);
//                 // setUniqueUser(data[Math.floor(Math.random() * data.length)]); u need probably do it inside promise or something.
//                 //But it's for another session.
//                 // console.log("unique user = " , uniqueUser)
//                 console.log("sazczxcdsa")
//
//             }
//         }
//
//         var oReq = new XMLHttpRequest();
//         oReq.addEventListener("load", reqListener);//also failed because cors.
//         let counter = 0;
//         oReq.onreadystatechange = () => {
//             // console.log("state change - ", ++counter);
//             // console.log("req = ", oReq);
//             // console.log(oReq.responseText)
//
//             //onChange - get the items
//             if (oReq.status == 200) {
//                 console.log("response = ", oReq)
//                 // let data = JSON.parse(oReq.response);
//                 // setUsers(data.data);//don't use setState here - it's make problems.
//
//             } else {
//                 console.log("status = " + oReq.status);
//
//             }
//         }
//
//         //defining the request
//         oReq.open("GET", "https://reqres.in/api/users");
//         oReq.send();
//
//
//         // xhr.onreadystatechange = function () {
//         //     // In local files, status is 0 upon success in Mozilla Firefox
//         //     if(xhr.readyState === XMLHttpRequest.DONE) {
//         //         var status = xhr.status;
//         //         if (status === 0 || (status >= 200 && status < 400)) {
//         //             // The request has been completed successfully
//         //             console.log(xhr.responseText);
//         //         } else {
//         //             // Oh no! There has been an error with the request!
//         //         }
//         //     }
//         // };
//         // oReq.open("GET", "./lingar.xml");
//         // oReq.open("GET", "http://www.example.org/example.txt");
//         // oReq.responseType = "document";
//
//         // oReq.send();
//
//     }
//
//     return (
//         <div>
//             <p>I am regular functional comp</p>
//             <h3>xmlHttpRequest</h3>
//             <p>XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without
//                 having to do a full page refresh.</p>
//             <p>You can use it on regular json. It's not only for XML.</p>
//
//             <h4>Example - getting random data from
//                 <a target="_blank" href={"https://reqres.in/api/users?page=2"}>here</a>
//             </h4>
//             {usersList}
//             {uniqueUser != null &&
//             <div>
//                 <p>Unique user : {uniqueUser.first_name} }</p>}
//                 <img src={uniqueUser.avatar} width="100" height="100"/>
//             </div>
//             }
//
//
//             <p>I insert inside, some basic using of xml requests. XHR. Further data can be found
//                 in <a
//                     href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#analyzing_and_manipulating_the_responsexml_property">such</a>
//                 articles</p>
//             <p>Using with state need a further planning, it's need to be done right, otherwise,
//                 it can be cause infinite rendering and memory problems (U can see inside maybe I commented it) </p>
//         </div>
//     )
// }
//
// const xhrPromise1 = new Promise((xhrRequest1) => {
//     let req = new XMLHttpRequest();
//
//     //Set the request
//     req.open("GET", "https://reqres.in/api/users?page=2");
//
//     //excute it
//     req.send();
//
//     //setting what will be happen when state changed
//     req.onreadystatechange = () => {
//         console.log("Handling request = ", this)
//     };
//     req.open("GET", "https://reqres.in/api/users?page=2");
//
//     req.send();
//
//     req.onreadystatechange = handleChange;//does nothing
//     req.open("GET", "https://reqres.in/api/users?page=2");
//
//     req.send();
//
//
//     req.responseType = "json";
//
//     //setting what will be happen when state changed
//     req.onreadystatechange = () => {
//         console.log("Handling json request = ", req.response)
//     };
//     req.open("GET", "https://reqres.in/api/users?page=2");
//
//     req.send();
//
//
//     req.open("GET", "https://reqre");
//     //defining error handling...
//     req.onerror = () => {
//         console.log("lingar1 error")
//     }
//
//     req.send();
//
//     let req2 = new XMLHttpRequest();
//
//     //Set the request
//     req2.open("GET", "https://reqre");
//     req2.onerror = () => {
//         console.log("lingar2 error")
//     }
//     //excute it
//     req2.send();
//
//     let req3 = new XMLHttpRequest();
//     req3.addEventListener("load", handleProgress)
//     req3.onreadystatechange = () => {
//         console.log("Handling  request3  = ", req3.response)
//         console.log("req3 - response xml = ", req3.responseXML)//will be null, since the data isn't xml.
//
//     };
//     //Set the request
//     req3.open("GET", "https://reqres.in/api/users?page=2");
//     req3.onerror = () => {
//         console.log("lingar3  error")
//     }
//     //You can also add event listner:
//     //excute it
//     req3.send();
//
//
//     var oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", reqListener);
//     oReq.open("GET", "https://reqres.in/api/users?page=2");
//     oReq.send();
//     asyncCalls();
//
//     setTimeout(() => getRss(), 2000);
//
//
// });
// let handleChange = () => {//Form some reason - arrow function not working here.
//     console.log("Handling2 request = ")
// }
//
// function handleProgress() {
//     console.log("Handling progress = this  = ", this)
// }
//
// function reqListener() {
//     console.log("reqListener", this.responseText);
// }
//
// function xhrRequest1(url) {
//
//     //creating the request -
//     let req = new XMLHttpRequest();
//     req.open("GET", url);
//
// }
//
// function asyncCalls() {
//     let req3 = new XMLHttpRequest();
//     req3.onreadystatechange = () => {
//         console.log("Handling  First request  = ", req3.response)
//     };
//     //Set the request
//     req3.open("GET", "https://reqr");
//     req3.onerror = () => {
//         console.log("lingar3  error")
//     }
//     //You can also add event listner:
//     //excute it
//     req3.send();
//     console.log("Then log - not, it's async")
// }
//
// function getRss() {
//
//
//     /**example*/
//
//     let cnn = "http://rss.cnn.com/rss/edition.rss";
//     let ynet = "http://www.ynet.co.il/Integration/StoryRss975.xml";
//     let proxy = "https://cors-anywhere.herokuapp.com/";//https://cors-anywhere.herokuapp.com/
//     let fox = "http://feeds.foxnews.com/foxnews/national";
//
//     let title = "default text";
//
//     //
//     // let failedRequest = new XMLHttpRequest();
//     // failedRequest.onreadystatechange = () => {
//     //     if (failedRequest.readyState == 4 && failedRequest.status == 200) {
//     //         // let myObj3 = JSON.parse(request2.responseText);
//     //         console.log("lingar res 3");
//     //         console.log(failedRequest);
//     //         console.log("object??")
//     //         console.log(failedRequest.responseText);
//     //         // console.log(myObj3)
//     //
//     //     }
//     // }
//     // //This request possibility will  be  failed , by cors error, or also http error. And maybe others.
//     // failedRequest.open("GET", cnn);//fox/ynet/ cnn
//     // // request2.open("GET", proxy +  cnn);//fox/ynet/ cnn -- this will fix it
//     //
//     // failedRequest.send();
//
//
//     let goodRequest = new XMLHttpRequest();
//     goodRequest.responseType = "document";
//     let items = "null";//each item has title value
//     goodRequest.onload = () => {
//         items = goodRequest.response.getElementsByTagName("title");
//         console.log("items = ", items)
//         console.log("load - ", goodRequest.response);
//         console.log("Response json xml - ", goodRequest.responseXML)
//         title = items[2];
//         console.log("title = ", items[2].innerHTML)
//
//     }
//
//     goodRequest.onreadystatechange = () => {
//         if (goodRequest.readyState == 4 && goodRequest.status == 200) {
//             console.log("good reuqest");
//             console.log(goodRequest);
//             // console.log(goodRequest.responseText)
//             console.log("Response = \n", goodRequest.response)
//             console.log("Response type  = \n", typeof goodRequest.response)
//             // console.log(goodRequest.response[2])
//             // console.log(goodRequest.response.getElementsByTagName("item"));
//             // title = goodRequest.response.getElementsByTagName("item")[2].innerHTML;
//             console.log("response xml = ", goodRequest.responseXML)
//
//
//         }
//
//     }
//
//     //This will be working by using the proxy  https://cors-anywhere.herokuapp.com/
//     //in the first time you run it, it will also fail. U need to request temp access. See the docs there and on the web on how
//     //to create proxy by your self.
//     goodRequest.open("GET", proxy + cnn);//fox/ynet/ cnn
//     // request2.open("GET",  cnn);//fox/ynet/ cnn
//
//     goodRequest.send();
//
// }