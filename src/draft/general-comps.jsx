import React, {useState} from "react";
import "./lingar.xml";


export function RegularComp1() {
    xmlHttpRequest();
    /**States*/ //todo model
    const [users, setUsers] = useState([]);
    const [uniqueUser, setUniqueUser] = useState(null);
    console.log("happen comp")


    //states
    // {
    //     "id": 11,
    //     "email": "george.edwards@reqres.in",
    //     "first_name": "George",
    //     "last_name": "Edwards",
    //     "avatar": "https://reqres.in/img/faces/11-image.jpg"
    // }

    const usersList = users.map((item, idx) =>
        <div key={idx}>{item.first_name} - {item.last_name}</div>)


    function xmlHttpRequest() {
        console.log("xml tutorial ");

        function reqListener() {
            console.log("response test = ", this.responseText);
            if (this.status === 200) {
                let data = JSON.parse(oReq.response);

                // setUsers(data.data);
                // setUniqueUser(data[Math.floor(Math.random() * data.length)]); u need probably do it inside promise or something.
                //But it's for another session.
                // console.log("unique user = " , uniqueUser)
                console.log("sazczxcdsa")

            }
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);//also failed because cors.
        let counter = 0;
        oReq.onreadystatechange =  () => {
            // console.log("state change - ", ++counter);
            // console.log("req = ", oReq);
            // console.log(oReq.responseText)

            //onChange - get the items
            if (oReq.status == 200) {
                console.log("response = ", oReq)
                // let data = JSON.parse(oReq.response);
                // setUsers(data.data);//don't use setState here - it's make problems.

            } else {
                console.log("status = " + oReq.status);

            }
        }

        //defining the request
        oReq.open("GET", "https://reqres.in/api/users");
        oReq.send();


        // xhr.onreadystatechange = function () {
        //     // In local files, status is 0 upon success in Mozilla Firefox
        //     if(xhr.readyState === XMLHttpRequest.DONE) {
        //         var status = xhr.status;
        //         if (status === 0 || (status >= 200 && status < 400)) {
        //             // The request has been completed successfully
        //             console.log(xhr.responseText);
        //         } else {
        //             // Oh no! There has been an error with the request!
        //         }
        //     }
        // };
        // oReq.open("GET", "./lingar.xml");
        // oReq.open("GET", "http://www.example.org/example.txt");
        // oReq.responseType = "document";

        // oReq.send();

    }

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
            {usersList}
            {uniqueUser != null &&
            <div>
                <p>Unique user : {uniqueUser.first_name} }</p>}
                <img src={uniqueUser.avatar} width="100" height="100"/>
            </div>
            }
        </div>
    )
}
