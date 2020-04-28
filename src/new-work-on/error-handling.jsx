import React from 'react';
/**
 Some explain on error handling in react .
 **/

/**
 * Main component
 * @param props
 * @constructor
 */
export function ErrorHandlingMain(props){
    return(

        <div>
            <h1>Error Handling explanations</h1>
            <p>Sometime the things get into error and we should know how to handle it </p>
            <p>For example I have component on my app that if the data arrived from the server corrupted,
            even if it's only one of many good items, all the app fall down. </p>

            <img src= 'assets/error.png' alt = 'error image'/>
        </div>
    )
}