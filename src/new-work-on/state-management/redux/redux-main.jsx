import React from 'react';
import {ProductsFeature} from "./products-store-example/products-feature";

export function ReduxMainView(){

    return(
        <div className="explain">
            <h1>Redux example</h1>
            <a href= "https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow" target= "_blank">from here </a>
            <p>You can see here a simple example of how two components, using and updating the same data from two separated places.</p>
            <p>You have the products list that show other prices each n seconds, and the "most expensive" that show
            the current most expensive product. </p>
            <ProductsFeature/>
        </div>
    )

}