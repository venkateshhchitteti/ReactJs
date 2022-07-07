import { useState } from "react";
import  "./orderform.css";



function OrderForm(props) {
    const [order, setOrder] = useState({
        item: 'Laptop',
        price:30,
        tax:10
    });
    function updateValue(event) {
        console.log(event.target.value);
        setOrder({...order,[event.target.name]:event.target.value});
    }
    return (
        <div>
            <h1>order form</h1>
            <input value={order.item} name='item' onChange={updateValue}></input>
            <input value={order.price} name='price' onChange={updateValue}></input>
            <input  placeholder='tax' min='0' type='number' name='tax' value={order.tax} onChange={updateValue}></input>
            
        </div>
    )
}

export default OrderForm;