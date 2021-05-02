import React, {useEffect} from "react";

export function XHRQuickBrief() {
    console.log("xml tutorial ");
    useEffect(()=>{
        console.log("Happen once ")
        runXhr1();
        runXhr2();


    },[]);


    return (
        <div>
            <p>I am regular functional comp</p>
            <h3>xmlHttpRequest</h3>
            <p>XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without
                having to do a full page refresh.</p>
            <p>You can use it on regular json. It's not only for XML.</p>

            <h4>Example - getting random data from
                <a target="_blank" href={"https://reqres.in/api/users?page=2"}>here</a>
            </h4>
            {/*{usersList}*/}
            {/*{uniqueUser != null &&*/}
            <div>
                {/*<p>Unique user : {uniqueUser.first_name} }</p>}*/}
                {/*<img src={uniqueUser.avatar} width="100" height="100"/>*/}
            </div>
            }


            <p>I insert inside, some basic using of xml requests. XHR. Further data can be found
                in <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#analyzing_and_manipulating_the_responsexml_property">such</a>
                articles</p>
            <p>Using with state need a further planning, it's need to be done right, otherwise,
                it can be cause infinite rendering and memory problems (U can see inside maybe I commented it) </p>

            <p>
                Some notes:
                about the onerror event - The XMLHttpRequestEventTarget.onerror is the function called when an
                XMLHttpRequest transaction fails due to an error.

                It's important to note that this is only called if there's an error at the network level. If the error
                only exists at the application level (e.g. an HTTP error code is sent), this method will not be called.
                <br/>
                Notice - common mistake is to defined action inside listeners. Search inside the code
                for the phrase: "defining mistakenly inside lisetner."
                <br/>


            </p>

        </div>
    );

}

function runXhr2() {
    console.log("runXhr2 - rss (xml) example ");
    let cnn = "http://rss.cnn.com/rss/edition.rss";
    let ynet = "http://www.ynet.co.il/Integration/StoryRss975.xml";
    let proxy = "https://cors-anywhere.herokuapp.com/";//https://cors-anywhere.herokuapp.com/
    let fox = "http://feeds.foxnews.com/foxnews/national";
    let counter = 0;

    let title = "default text";

    //let's run xhr for getting rss - notice -
    //U should open https://cors-anywhere.herokuapp.com/ and access temporary access for it will be work well
    let rssXhr1 = new XMLHttpRequest();
    //defining call back to error situation
    rssXhr1.onerror = function () {

        console.error("lingar - there is error\n maybe it's because cors same origin" +
            "restrictions. U need to use proxy for access rss from localhost. ");


    };

    //Here we adding listenr from the onload event
    rssXhr1.onload = () => {

        console.log("load rssXhr1- event adding listner ", rssXhr1.response);
        reqListener();

    }

    //defining proper onchange
    rssXhr1.onreadystatechange = function(){
        console.log("rssxhr1 changed #" + counter++ )  ;
        if(rssXhr1.status === 200){
            console.log("Request is well ");

            //when I didn't defined the response type to xml
            if(rssXhr1.responseType !== "document"){
                console.log("response type = ", rssXhr1.responseType);
                console.log("The actual response - ", rssXhr1. response);
                console.log("See it as xml - " , rssXhr1.responseXML);
                console.log("From here U can take it and parse. See inside the comments "
                    +"some idea's");

               let items = rssXhr1.responseXML.getElementsByTagName("item");
                console.log("items = " , items);
                console.log(items[1].innerHTML)
            }else {//this is document type and will come as xml
                console.log("this is document type and will come as xml -  ");
                console.log(rssXhr1.response);

            }
        }
        //it's not status 200
        else {
            console.log("Status isn't 200. ");
            console.warn("Maybe u need to request access here : https://cors-anywhere.herokuapp.com/ (see comments)");
        }
    };


    console.log("First let's send directly to rss. See the error ");


    // rssXhr1.responseType = "document";


    console.log("1- without proxy: ");
    rssXhr1.open("GET",  cnn);//fox/ynet/ cnn
    rssXhr1.send();

    console.log("2- with proxy (on the first time U will get error and U need to request access ... ");




    //This will be working by using the proxy  https://cors-anywhere.herokuapp.com/
    //in the first time you run it, it will also fail. U need to request temp access. See the docs there and on the web on how
    //to create proxy by your self.
    rssXhr1.open("GET", proxy + cnn);//fox/ynet/ cnn
    // rssXhr1.open("GET",  cnn);//fox/ynet/ cnn

}

//This function will be served as listner to all request.
function reqListener() {
    console.log("response general listener  = ", this);
    console.log("URl = " + this.responseURL);
    console.log("Status  = ", this.status);
    if (this.status === 200) {
        console.log("The status is good, this is the response : ", this.response)
        //U can try such things inside the component, but it's need to be done properly:

        // setUsers(data.data);//if you want to affect the state you can use this, but it will generate problems, and there
        //is other way to do it(need to be figured out).
        // setUniqueUser(data[Math.floor(Math.random() * data.length)]); u need probably do it inside promise or something.


    }
}


//good request to json.
function runXhr1() {
    console.log("runXhr1 - Running 1 - good request to fake json server - https://reqres.in/api/users");


    let req1 = new XMLHttpRequest();
    req1.addEventListener("load", reqListener);// Here we adding listner to each load of the request .
    let counter = 0;
    req1.onreadystatechange = () => {
        console.log("This onreadystatechange is also like event for the request - ", req1);
        //onChange - get the items
        if (req1.status == 200) {
            console.log("status good. Request object  = \n", req1)
            console.log(" status = ", req1.status);
            console.log(" request response - \n", req1.response);
            console.log("U have also other things, like response - xml/json/text/ See the docs. ")

            console.log("Parsing the response from Json to Object. ")
            let data = JSON.parse(req1.responseText);
            console.log("This is the object - \n", data );
            console.table(data.data);
            // setUsers(data.data);//don't use setState here - it's make problems.

        } else {
            console.log("status is other then expected= " + req1.status);

        }
        //THis is another way to check and handle the status
        // In local files, status is 0 upon success in Mozilla Firefox
        if (req1.readyState === XMLHttpRequest.DONE) {
            console.log("Another way to handle request - check if req1.readyState === XMLHttpRequest.DONE")
            const status = req1.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                console.log("status === 0 || (status >= 200 && status < 400)");
            } else {
                console.log("status === 0 || (status >= 200 && status < 400).\n " +
                    "Oh no! There has been an error with the request!");
            }
        }
        //Notice - common mistake is to defined action inside listeners
        //for example at first this was here and the request didn't executed.
        //With proper programming you should write organize

        // //Here we defining the request. There are more optional params and it's possible to add body/headers etc things that https requests use.
        //defining mistakenly inside listener.
        // req1.open("GET", "https://reqres.in/api/users");
        // console.log("here...")
        // req1.send();//This is the execution of the request.

    }


    //The bottom code cause the freezing

    //Here we defining the request. There are more optional params and it's possible to add body/headers etc things that https requests use.
    req1.open("GET", "https://reqres.in/api/users");
    console.log("here...")
    req1.send();//This is the execution of the request.

    console.log("Here U can see how to define error handling. ")
    let xmlhttp = new XMLHttpRequest(),
        method = 'GET',
        url = 'https://developer.mozilla.org/';

    xmlhttp.open(method, url, true);
    xmlhttp.onerror = function () {
        console.log("** An error occurred during the transaction");
        return;
    };
    xmlhttp.send();

    console.log("We can define the response type, if we know it's json. ");
    let req2 = new XMLHttpRequest();
    req2.responseType = "json";
    req2.onreadystatechange = function(){
        // console.log("req2 change...");
        if (req2.status == 200) {
            console.log("status good. Request object  = \n", req2)
            console.log("The request parse the json to object ... ");
            console.log(req2.response);

        } else {
            console.log("status is other then expected= " + req1.status);

        }
    }

    req2.open("GET", "https://reqres.in/api/users");
    req2.send();//This is the execution of the request.
}



function getRss() {


    /**example*/

    let cnn = "http://rss.cnn.com/rss/edition.rss";
    let ynet = "http://www.ynet.co.il/Integration/StoryRss975.xml";
    let proxy = "https://cors-anywhere.herokuapp.com/";//https://cors-anywhere.herokuapp.com/
    let fox = "http://feeds.foxnews.com/foxnews/national";

    let title = "default text";

    //
    // let failedRequest = new XMLHttpRequest();
    // failedRequest.onreadystatechange = () => {
    //     if (failedRequest.readyState == 4 && failedRequest.status == 200) {
    //         // let myObj3 = JSON.parse(request2.responseText);
    //         console.log("lingar res 3");
    //         console.log(failedRequest);
    //         console.log("object??")
    //         console.log(failedRequest.responseText);
    //         // console.log(myObj3)
    //
    //     }
    // }
    // //This request possibility will  be  failed , by cors error, or also http error. And maybe others.
    // failedRequest.open("GET", cnn);//fox/ynet/ cnn
    // // request2.open("GET", proxy +  cnn);//fox/ynet/ cnn -- this will fix it
    //
    // failedRequest.send();


    let goodRequest = new XMLHttpRequest();
    goodRequest.responseType = "document";
    let items = "null";//each item has title value
    goodRequest.onload = () => {
        // items = goodRequest.response.getElementsByTagName("title");
        // console.log("items = ", items)
        // console.log("load - ", goodRequest.response);
        // console.log("Response json xml - ", goodRequest.responseXML)
        // title = items[2];
        // console.log("title = ", items[2].innerHTML)

    }

    goodRequest.onreadystatechange = () => {
        if (goodRequest.readyState == 4 && goodRequest.status == 200) {
            console.log("good reuqest");
            console.log(goodRequest);
            // console.log(goodRequest.responseText)
            console.log("Response = \n", goodRequest.response)
            console.log("Response type  = \n", typeof goodRequest.response)
            // console.log(goodRequest.response[2])
            // console.log(goodRequest.response.getElementsByTagName("item"));
            // title = goodRequest.response.getElementsByTagName("item")[2].innerHTML;
            console.log("response xml = ", goodRequest.responseXML)


        }
        //WOn't be called if the response is error. Will be called if the network trancsaction didn't statrted
        goodRequest.onerror = function () {
            console.log("goodRequest Error, maybe U need to request access here :  https://cors-anywhere.herokuapp.com/")
        }

    }

    //This will be working by using the proxy  https://cors-anywhere.herokuapp.com/
    //in the first time you run it, it will also fail. U need to request temp access. See the docs there and on the web on how
    //to create proxy by your self.
    // goodRequest.open("GET", proxy + cnn);//fox/ynet/ cnn
    goodRequest.open("GET", cnn);//fox/ynet/ cnn -- > This will cause network error - cors. Uncomment for try it.

    goodRequest.send();

}