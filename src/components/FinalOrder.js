import React, { useEffect, useState } from "react";


const FinalOrder = (props) => {
const [total,setTotal] = useState(0)
const [ingredientCount,setIngredientCount]= useState(0)
const ingredientTotal = ()=>{
setIngredientCount(props.selectedIngredients.length*5)
}
const orderTotal = ()=>{
    if(count === 1){
        setTotal(props.pizzaPrice+ingredientCount)
        
    }else{
        setTotal((props.pizzaPrice+ingredientCount)*count)  
    }

}
function decreaseCount() {
    if (count > 1) {
        setCount(count -1);
    }
}

function addCount() {
    setCount(count +1);
}

const [count, setCount] = useState(1);
   
useEffect(()=> {
ingredientTotal()
orderTotal()
    },[props.ingredientCount,orderTotal])
    const click = (e) => {
        e.preventDefault();
        alert(JSON.stringify(props));
        window.location.replace("/success")
    }
    return (
        <div className="forder">
            <div className="fpiece">
                <span className="decrease" onClick={decreaseCount} style={{cursor:"pointer"}}>-</span>
                <span className="amount">{count}</span>
                <span className="increase" onClick={addCount} style={{cursor:"pointer"}}>+</span>
            </div>
            <div className="fcheck">
                <h4>Sipariş Toplamı</h4>
                <div className="fchoice">
                    <p>Seçimler</p>
                    <span>{ingredientCount}.00₺</span>
                </div>
                <div className="total">
                    <p>Toplam</p>
                    <span>{total}₺</span>
                </div>
                <input type="submit" id="order-button" value="SİPARİŞ VER" onClick={e=> {click(e)}}></input>
            </div>
        </div>
    )
};
export default FinalOrder;