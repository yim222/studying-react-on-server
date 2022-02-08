import React, {useEffect, useState} from "react";
import {RSSViewer} from "./RssViewer1";
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

    let handleDataFromComponent=()=>{
        console.log("This is response ? ")
        // console.log(this.response);


    }


    return (
        <div>
            Draft regular component1
            <p>Try to run the browser with slow-connection</p>

            <p>TO save it - async/sync example </p>
            <button onClick={callSyncXhr}>Sync call (stopping the execution) </button>
            <button onClick={callAsyncXhr}>Async call ( isn't stopping the execution) </button>

            <p>The callback should be shoted from the success function, by applying.
            See the inside code and comments.</p>
            <button onClick={()=>{
                console.log("clicked");
                // loadFile("message.txt", handleData, "New message!\n\n");

                getData(myProxy + cnnUrl, handleData, 12);
            }}>Try request 1 </button>
            <p>Now need to :
            <br/>1- Send the data to the callback. <br/>
                2- Make the data before - XML.
                <br/>   3- Inside the callback parse the XML to object(first do it by your way)
                <br/>    4- Then assign the object to the state
                <br/>    5- Then represent it.
                <br/>   6- Then learn about parsing xml, maybe there is a better way
                <br/>Let's work on another file, due to over code here.

            </p>
            <h4>Get data .</h4>
            <RSSViewer/>


        </div>
    )
}

//From here U need to define the callback with what params. Here by this - xhr availabe
//And its response. -  I don't sure.
function onSuccess(){
    console.log("Request done well.");
    //U must define this at the success for the call back will get the values
    //Its functional programming. It's help U do reverse things.

    //The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
    console.log("this onSuccess = ", this);

    // this.callback.apply(this, this.arguments);
    let arr = ["lingar args"];

    this.callback.apply(this,arr);


}

function onFailure(){

    console.error("Request encountered error.")


}

function getData(url, callback /*, opt_arg1, opt_arg2, ... */) {
    console.log("getData")
    var xhr = new XMLHttpRequest();
    //this callback is custom field, not predefined. U can call it whatever you want.
    xhr.callback = callback;//will send the callback with data

    // The call() method calls a function with a given this value and arguments provided individually.


        xhr.arguments = Array.prototype.slice.call(arguments, 2);//U can add optional args to callback
    xhr.onload = onSuccess;
    xhr.onerror = onFailure;
    xhr.open("GET", url, true);
    xhr.send(null);
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

function xhrSuccess() {
    this.callback.apply(this, this.arguments);
}

function xhrError() {
    console.error(this.statusText);
}

function loadFile(url, callback /*, opt_arg1, opt_arg2, ... */) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.arguments = Array.prototype.slice.call(arguments, 2);
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send(null);
}


loadFile("message.txt", showMessage, "New message!\n\n");



function getData2(url, callback /*, opt_arg1, opt_arg2, ... */) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.arguments = Array.prototype.slice.call(arguments, 2);
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send(null);
}

function showMessage(message) {
    console.log("Some callback")
    console.log(message + this.responseText);
}

//this is the request
function handleData(data){//Notice that the arguments is what U are pass as xhr.arguments.
    // console.log("handle data, " , this.response)

    // this.responseText;
    console.log("Mock call back. Data = " , data);
}

// loadFile("message.txt", showMessage, "New message!\n\n");
