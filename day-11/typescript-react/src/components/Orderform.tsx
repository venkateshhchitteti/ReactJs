import * as React from "react";
import { useState } from "react";
import * as ReactDom from "react-dom";
import {Order} from "./Order";

function Orderform() {
    const[order,setOrder]=useState(new Order());
    function save(){
        console.log('saved');
    }
    return (
        <div>This is a order form{order.item}
        <button onClick={save}>Save</button></div>
        
    )
}
export default Orderform;