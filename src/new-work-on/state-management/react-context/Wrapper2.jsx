import React from "react";
import {ProductDataContext} from "./ProductsWithContext";
export function Wrapper2(props){
    return <div><OneItem idx = {2}/></div>
}

function OneItem(props){
    return(
        <div>
            <ProductDataContext.Consumer>
                {cValue=><p>item = {cValue[props.idx].name}, price = {cValue[props.idx].price}  </p>}
            </ProductDataContext.Consumer>
        </div>
    )
}