import React from "react";

export function RegularComp1(){
    xmlHttpRequest();
    return(
        <div>
            <p>I am regular functional comp</p>
            <h3>xmlHttpRequest</h3>
            <p>XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh.</p>


        </div>
    )
}

function xmlHttpRequest(){
    console.log("xml tutorial ");
    function reqListener () {
        console.log(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);//also failed because cors.
    oReq.open("GET", "http://www.example.org/example.txt");
    oReq.send();

}