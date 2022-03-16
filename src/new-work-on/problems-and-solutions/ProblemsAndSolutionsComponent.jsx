import React from "react";
const cnnUrl = "http://rss.cnn.com/rss/edition.rss";

export function ProblemsAndSolutions() {

    return (
        <div>
            <h2>Here introduce some problems with possible solutions (hopefully they have been solved)</h2>
            <h3>Pay attention! All here is short and drafti. I only came to share
                some examples and insights. </h3>
            <RssCorsProblem/>
        </div>
    );
}

function RssCorsProblem() {


    /**example*/

    let cnn = "http://rss.cnn.com/rss/edition.rss";
    let ynet = "http://www.ynet.co.il/Integration/StoryRss975.xml";
    let proxy = "https://cors-anywhere.herokuapp.com/";//https://cors-anywhere.herokuapp.com/
    let fox = "http://feeds.foxnews.com/foxnews/national";
    let myProxy = "https://lingar-allow-cors.herokuapp.com/";

    let failedRequest = new XMLHttpRequest();
    let title = "default text";
    failedRequest.onreadystatechange = () => {
        if (failedRequest.readyState == 4 && failedRequest.status == 200) {
            // let myObj3 = JSON.parse(request2.responseText);
            console.log("lingar res 3");
            console.log(failedRequest);
            console.log("object??")
            console.log(failedRequest.responseText);
            // console.log(myObj3)

        }
    }
    //This request possibility will  be  failed , by cors error, or also http error. And maybe others.
    failedRequest.open("GET", cnn);//fox/ynet/ cnn
    // request2.open("GET", proxy +  cnn);//fox/ynet/ cnn -- this will fix it

    failedRequest.send();


    let goodRequest = new XMLHttpRequest();
    goodRequest.responseType = "document";
    let items = "null";//each item has title value
    goodRequest.onload =()=>{
        items = goodRequest.response.getElementsByTagName("title");
        console.log("items = " , items)
        console.log("load - ", goodRequest.response);
        title = items[2];
        console.log("title = " ,  items[2].innerHTML)

    }

    goodRequest.onreadystatechange = () => {
        if (goodRequest.readyState == 4 && goodRequest.status == 200) {
            console.log("good reuqest");
            console.log(goodRequest);
            // console.log(goodRequest.responseText)
            console.log("Response = \n" , goodRequest.response)
            console.log("Response type  = \n" , typeof goodRequest.response)
            // console.log(goodRequest.response[2])
            console.log(goodRequest.response.getElementsByTagName("item"));
            title = goodRequest.response.getElementsByTagName("item")[2].innerHTML;



        }

    }

    //This will be working by using the proxy  https://cors-anywhere.herokuapp.com/
    //in the first time you run it, it will also fail. U need to request temp access. See the docs there and on the web on how
    //to create proxy by your self.
    goodRequest.open("GET", proxy + cnn);//fox/ynet/ cnn
    // request2.open("GET",  cnn);//fox/ynet/ cnn

    goodRequest.send();


    let myOwnProxy = new XMLHttpRequest();
    myOwnProxy.onreadystatechange = () => {
        if (myOwnProxy.readyState == 4 && myOwnProxy.status == 200) {
            // let myObj3 = JSON.parse(request2.responseText);
            console.log("myOwnProxy");
            console.log(myOwnProxy);
            console.log("object??")
            console.log(myOwnProxy.responseText);
            // console.log(myObj3)

        }
    }
    //This request possibility will  be  failed , by cors error, or also http error. And maybe others.
    myOwnProxy.open("GET", myProxy +  cnn);//fox/ynet/ cnn
    // request2.open("GET", proxy +  cnn);//fox/ynet/ cnn -- this will fix it

    myOwnProxy.send();


    return (
        <div className="app-body">
            <h2>CORS and RSS problem</h2>
            <a href="https://github.com/yim222/studying-react-on-server/blob/A-update/src/new-work-on/problems-and-solutions/ProblemsAndSolutionsComponent.jsx">
                Source code</a>
            <p>Title = {title}</p>
            <h3>
                I have this annoying problem - when I want to get RSS it's blocked by Cors-origin.
            </h3>

            <h4>Problem (See below long explanation)</h4>
            <p> open the log and see how failedRequest is failing.</p>
            <p>It's yelling about ??? -CORS!</p>
            <p>request ... has been blocked by CORS policy: ... (see the logs F12) </p>
            <p>This request possibility will be failed , by cors error, or also http error. And maybe others.
            </p>
            <h4>Solution... </h4>
            <p>First U need to go to <a href="https://cors-anywhere.herokuapp.com/"
                                        target="_blank">https://cors-anywhere.herokuapp.com/</a>
                and access temporary access (before doing that - U will get "forbidden error"
                on the goodRequest too. </p>
            <p>See good request - it's working... </p>
            <p>U can see the xml data in the logs. </p>
            <p>This will be working by using the proxy
                https://cors-anywhere.herokuapp.com/
                in the first time you run it, it will also fail. U need to request temp access. See the docs there and
                on the web on how
                to create proxy by your self.</p>


            <h4>Long explanation </h4>
            <p>By what I've read until now, I'm understand that this is restriction by browser. You cannot affect it
                from the code directly since it's depend on the response - when the response is returning it's already
                have the problematic
                thing that prevent the browser from get it. This is the content: </p>
            <p>
                Access to XMLHttpRequest at 'http://rss.cnn.com/rss/edition.rss' from origin 'http://localhost:3007' has
                been blocked by CORS policy: Response to preflight request doesn't pass access control check: No
                'Access-Control-Allow-Origin' header is present on the requested resource.

            </p>

            <p>So the problem is with the <a href="https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request">"preflight
                request"</a>
                <br/>
                CORS = Cross Origin Resource Sharing</p>
            <p>This is from the doc: </p>
            <p>CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that
                determines whether browsers block frontend JavaScript code from accessing responses for cross-origin
                requests.

                The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the
                ability to say they want to opt into allowing cross-origin access to their resources.</p>
            <p>There are some possible workarounds </p>
           <h3>Your Online cors - final summary (todo - organize it) </h3>
            <p>
                Do a clean short summary.<br/>
                If you want to best and quick solution – go on create your own proxy with cors-anywhere.<br/>
                This is a build-in restriction. You have this service that created by someone that fixed it.<br/>
                It’s from security reasons and in many time it’s efficient.<br/>

                But not for public data like RSS.<br/>
                All others solution you can found by 3rd parties aren’t recommended as enexpected things could happen, like happened with cors-anywhere in the recent time (Feb – 21);
                https://github.com/Rob--W/cors-anywhere/issues/301<br/>

                You easily can build proxy by that tutorial:<br/>
                https://observablehq.com/@severo/setup-your-own-cors-proxy<br/>
                From there You just need to prefix the cors request that you want them to work<br/>
                myProxy + cnn.<br/>
                See inside the code.<br/>
                The time you will spend in a little get your hands dirty, with Heroku, will be much shorter then research the problems and find work around
                This solution is good also for http/s problems like I saw in github pages.<br/>
                I want to doc and summary nice, but it’s delay me. In the other way, now it’s hot in my mind.
                Maybe only on the project and later do it as blog article.
                (gather together 3-5 links with description).. write it in context of RSS, to prevenet mis understood.
                <br/>


            </p>
        </div>
    )
}