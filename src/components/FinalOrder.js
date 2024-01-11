import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';



const FinalOrder = (props) => {
const history = useHistory();
const [errorMessage, setErrorMessage] = useState("");
const [successMessage, setSuccessMessage] = useState("");

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
    ingredientTotal();
    orderTotal();
         },[props.ingredientCount,orderTotal])
        const click = (e) => {
            e.preventDefault();
            const formData = {
                pizzaPrice: props.pizzaPrice,
                selectedIngredients: props.selectedIngredients,
                selectedSize : props.selectedSize,
                selectedType : props.selectedType,
                note: props.note,
            };
            axios.post("https://reqres.in/api/users", formData)
                .then(response => {
                    //sucsess
                    console.log("sucsess: ", response.data);
                    setSuccessMessage("Sipariş başarıyla gönderildi!");
                    console.log("Success message set");
                    setTimeout(() => {
                        history.push("/success");
                    }, 2000);    
                })
                .catch(error => {
                    //error
                    console.error("error", error);
                    setErrorMessage("Bir hata oluştu, lütfen formu yeniden gönderin.");
                });

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
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    )
};
export default FinalOrder;