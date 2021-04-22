import React from "react";

function httpGet(theUrl) {
    let xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        // xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false);
    xmlhttp.send();
}

export function RegularComp1() {

    console.log("Hi Lingar ");
    let data = null;
    // let RSS_URL = "https://medium.com/feed/@alexroan/";//"https://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=motor";
    // const RSS_URL = `https://codepen.io/picks/feed/`;
    // let RSS_URL = "http://www.ynet.co.il/Integration/StoryRss975.xml";
    let RSS_URL = "http://social-events222.com/";

    // fetch( RSS_URL).then((res)=> {
    //     data = res;
    //     // console.log("data = " + data.json());
    //     console.log(data);
    //
    //
    //
    //
    //
    // });
    //
    // fetch(RSS_URL)
    //     .then(response => response.text())
    //     .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    //     .then(data => console.log(data));

    // httpGet(RSS_URL);

    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            var myObj = JSON.parse(request.responseText);
            for (var i = 0; i < 1; i++) {
                console.log("item = " + myObj.items[i].title);
                // this.setState({
                //     recentBlogPost: {
                //         name: myObj.items[i].title,
                //         url: myObj.items[i].link
                //     }
                // });
            }
        }
    }
    request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.codecarrot.net%2Ffeed.xml&order_dir=desc&count=30", true);
    request.send();

    let request2 = new XMLHttpRequest();

    // request2.withCredentials = true;
    console.log(request2)
    // console.log(request2.responseText)

    let cnn = "http://rss.cnn.com/rss/edition.rss";
    let ynet = "http://www.ynet.co.il/Integration/StoryRss975.xml";
    let proxy = "https://cors-anywhere.herokuapp.com/";
    request2.open("GET", proxy + cnn);
    request2.send();
    console.log("kk?")

    request2.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            let myObj3 = JSON.parse(request2.responseText);
            console.log("resoonse");
            console.log(request2);
            console.log("object??")
            console.log(myObj3)
            // for (var i = 0; i < 1; i ++) {
            //     console.log("item = " + myObj.items[i].title);
            //     // this.setState({
            //     //     recentBlogPost: {
            //     //         name: myObj.items[i].title,
            //     //         url: myObj.items[i].link
            //     //     }
            //     // });
            // }
        }

    }
    // let myObj4 = JSON.parse(request2.responseText);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", proxy + cnn, true);

//Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            console.log("happen?", xhr.responseText)
        }
    }
    xhr.send();


    return (
        <div>
            <p>I am regular functional comp</p>
        </div>
    )
}