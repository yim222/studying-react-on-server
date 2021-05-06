import React, {useEffect, useState} from "react";

const cnnUrl = "http://rss.cnn.com/rss/edition.rss";
const myProxy = "https://lingar-allow-cors.herokuapp.com/";

export function RSSViewer() {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        console.log("RSS Viewer created... ");
    }, []);

    const assignData = (data) => {
        setNewsData(data);
    }


    return (
        <div>
            <h2>Rss Viewer</h2>
            <button onClick={() => {
                console.log("clicked");
                // loadFile("message.txt", handleData, "New message!\n\n");

                getData(myProxy + cnnUrl, handleData, 12);
            }}>Try request 1
            </button>

            <button onClick={() => {
                console.log("clicked");
                // loadFile("message.txt", handleData, "New message!\n\n");

                getData(myProxy + cnnUrl, assignData, 12);
            }}>Assign data to state
            </button>
            <h2>Data:</h2>
            <div>
                {newsData.length > 0 ?
                    <div>
                        <p>Here come data </p><p>{newsData[Math.floor(Math.random() * 10)].title}</p>
                        <div>{newsData[Math.floor(Math.random() * 10)].title}</div>
                    </div> :
                    <p>No data</p>}
            </div>

        </div>
    )
}


//From here U need to define the callback with what params. Here by this - xhr availabe
//And its response. -  I don't sure.
function onSuccess() {
    console.log("Request done well.");
    //U must define this at the success for the call back will get the values
    //Its functional programming. It's help U do reverse things.

    //The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
    // console.log("this onSuccess = ", this);

    // this.callback.apply(this, this.arguments);
    let xml = this.responseXML;
    let arr = [xml, "lingar args"];
    console.log("XML = \n", xml)
    let dataObj = xmlToObject(xml);
    console.log("Data object = ", dataObj);
    const data = [dataObj];
    this.callback.apply(this, data);//that's call the callback - u need to pass here a proper object
    //it refer it like arbitrary args. so for example:
    /*

function handleData2(data) {

    console.log("data = " , data);//will show the first element of array
}
this for example will generate a run time error
this.callback.apply(this,12);
     */


}

function onFailure() {

    console.error("Request encountered error:");
    console.error(this.statusText);


}

function handleData() {
    // console.log("Handle data - this = ", this.response);
    console.log("Handle data - this.status  = ", this.status);
}


function handleData2(data) {
    // console.log("Handle data - this = ", this.response);
    console.log("data = ", data)
    console.log("Handle data - this.status  = ", this.status);
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

function xmlToObject(data) {
    let arrayOfData = [];
    //itemObj = {title: ..., description: ...};
    let items = data.getElementsByTagName('item');//this is array so u need to found the first element
    console.log("items = ", items);
    let counter = 0;
    for (let item of items) {
        // console.log("Html = ", item.innerHTML);
        console.log("Loop ", counter++)
        console.log("item = ", item);
        // console.log("item try = ", item.getElementsByTagName("title"));


        let title = item.getElementsByTagName("title")[0].innerHTML;
        //removing cdata garbage
        title = title.trim().replace(/^(\/\/\s*)?<!\[CDATA\[|(\/\/\s*)?\]\]>$/g, '');

        console.log("Title = ", title);
        // console.log(item.getElementsByTagName("description"));
        let description = "no description";
        let innerData = item.getElementsByTagName("description");
        console.log(innerData)
        if (innerData.length > 0) {
            description = item.getElementsByTagName("description")[0].innerHTML;
            //removing cdata garbage
            description = description.trim().replace(/^(\/\/\s*)?<!\[CDATA\[|(\/\/\s*)?\]\]>$/g, '');

        }
        console.log("description = ", description);


        let obj1 = {title: title, description: description};
        arrayOfData.push(obj1);


    }
    return arrayOfData;


}