import React from 'react'

const BtnSumarRestar = () => {
    function increaseValue() {
        const value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value;
      }
      
      function decreaseValue(){
        const value = parseInt(document.getElementById('number').value, 10)
        value = isNaN(value) ? 0 : value
        value < 1 ? value = 1 : ''
        value--
        document.getElementById('number').value = value
      }
    return (
        <div>
            <form>
                <div className="value-button" 
                id="decrease" 
                onclick={decreaseValue} 
                value={decreaseValue}>-</div>
                <input type="number" id="number" value="0" />
                <div className="value-button" 
                id="increase" 
                onclick={increaseValue} 
                value={increaseValue}>+</div>
            </form>
        </div>
    )
}

export default BtnSumarRestar
