import * as React from "react";
import * as ReactDom from "react-dom";
import { useState } from 'react';
import { Order } from "./Order";
function OrderForm() {
    const [order, setOrder] = React.useState(new Order())
    function save() {
        console.log("checking");
    }
    const update = (event: any) => {
        const order = new Order();
        order.price = event.target.value;
        setOrder(order);
        console.log(order.price)

    }
    return (
        <div className="container mb-3 px-4">
            <label className="my-3">This is the OrderForm:</label> <span className="badge rounded-pill bg-info text-dark">{order.item}</span>
            <input type='number' placeholder='Price' onChange={update} className="form-control mb-3 "  value={order.price} />
            <button onClick={save} className={"btn btn-primary"}>Save</button>
        </div>
    )
}
export default OrderForm;