import React from 'react'
import { useState } from 'react'

const Calculator = () => {
   function handleInputChange(){
       console.log('handleInputChange clicked')
   }
   function showchange(x){
    document.getElementById("slidervalue").innerHTML=x;
   }
    function handleChange(event) {
    this.setState({value: event.target.value});
  }
    return (
        <div>
            <h1>Loan Calculator</h1>
            <form>
            <div>
                <div>
                <label>Amount: </label>
                <input
                type ='range'
                name='amount'
                min="0"
                max="1000000"
                step="1"
                width="400"
                placeholder='Loan amount'
                onchange={this.handleChange}
                />
               <span id="slidervalue"></span> 
                </div>
                <div>
                <label>Interest: </label>
                <input
                type ='range'
                name='interest'
                placeholder='Interest'
                />
                </div>
                <input
                type ='text'
                name='amount'
                placeholder='Loan amount'
                value=''               />
                <input
                type ='range'
                name='amount'
                placeholder='Loan amount'
                value=''
                onChange={handleInputChange}
                />
                <input type ='submit'/>
             </div>
            </form>
        </div>
   )
}

export default Calculator;