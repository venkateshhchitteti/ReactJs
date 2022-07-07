import { useState } from "react";
import  "./orderform.css";



function rwd(props) {
    const [order, setOrder] = useState({
        item: 'Laptop',
        price:30,
        tax:10
    });
    function updateValue(event) {
        console.log(event.target.value);
        setOrder({...order,[event.target.name]:event.target.value});
    }
    function calculateTotal(){
        if(order.tax < 0){
            console.log('-ve tax will not be there')
            return "error";
        }
        if(order.price <0){
            return "no -ve Price"
        }
        return parseInt(order.price) * (1+(order.tax /100));
    }
    return (
        <div>
            <h1>ResponcideForm</h1>
            <p>Somepara...</p>
            <input value={order.item} name='item' onChange={updateValue}></input>
            <input value={order.price} name='price' onChange={updateValue}></input>
            <input  placeholder='tax' min='0' type='number' name='tax' value={order.tax} onChange={updateValue}></input>
            Total:{calculateTotal()}
            <div>
                <h1>{order.item}</h1>
                
            </div>
            <div class="container">
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
      <input value={order.item} name='item' onChange={updateValue}></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
      <input value={order.item} name='item' onChange={updateValue}></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Country</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="India">India</option>
          <option value="Russia">Russia</option>
          <option value="France">France</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Subject</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit">
    </div>
  </form>
</div>
        </div>
    )
}

export default rwd;