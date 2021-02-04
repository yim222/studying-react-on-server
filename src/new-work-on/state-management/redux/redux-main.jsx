import React, {useState} from 'react';
import {ProductsFeature} from "./products-store-example/products-feature";

export function ReduxMainView(){

    return(
        <div className="explain">
            <h1>Redux example</h1>
            <a href= "https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow" target= "_blank">from here </a>
            <ProductsFeature/>
        </div>
    )

}