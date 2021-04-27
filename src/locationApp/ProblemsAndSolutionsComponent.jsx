import React from "react";

export function ProblemsAndSolutions() {

    return (
        <div >
            <h2>Here introduce some problems with possible solutions (hopefully they have been solved)</h2>
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

    let request2 = new XMLHttpRequest();

    request2.onreadystatechange = () => {
        if (request2.readyState == 4 && request2.status == 200) {
            // let myObj3 = JSON.parse(request2.responseText);
            console.log("lingar res 3");
            console.log(request2);
            console.log("object??")
            console.log(request2.responseText)
            // console.log(myObj3)

        }

    }

    request2.open("GET", proxy + cnn);//fox/ynet/ cnn
    // request2.open("GET",  cnn);//fox/ynet/ cnn

    request2.send();

    return (
        <div className="app-body">
            <h3>
                I have this annoying problem - when I want to get RSS it's blocked by Cors-origin.
            </h3>
            <p>By what I've read until now, I'm understand that this is restriction by browser. You cannot affect it
                from the code directly since it's depend on the response - when the response is returning it's already
                have the problematic
                thing that prevent the browser from get it. This is the content: </p>
            <p>
                Access to XMLHttpRequest at 'http://rss.cnn.com/rss/edition.rss' from origin 'http://localhost:3007' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

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

            <h4>Problem one - not working. </h4>
            <p> see in the code that request 1 not working</p>
        {/*    Todo -
            - Make that the request will have a status.

        */}

        </div>
    )
}