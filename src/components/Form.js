import React, { useState } from "react";
import Size from "./Size";
import ExtraIngredients from "./ExtraIngredients";
import DoughType from "./DoughType";
import Note from "./Note";
import FinalOrder from "./FinalOrder";

const Form = (props) => {

const [ingredientCount, setIngredientCount] = useState(0);
const [ingredients, setIngredients] = useState([]);
const [pizzaSize, setPizzaSize] = useState();
const [doughType, setDoughType] = useState();
const [orderNote, setOrderNote] = useState();
/* const [totalPrice, setTotalPrice] = useState(); */

const updateCount = (count) => setIngredientCount(count);
const updateIngredientCount = (selectedIngredients) => setIngredients(selectedIngredients);
const updateNote = (note) => setOrderNote(note);
const updateSize = (size) => setPizzaSize(size);
const updateDoughType = (type) => setDoughType(type);



    return (
        <form id="pizza-form">
    <div className="pattern">
        <Size size={updateSize}></Size>
     <DoughType doughType={updateDoughType}></DoughType>
    </div>
    <ExtraIngredients ingredientCount={updateCount} selectedIngredients={ingredients}></ExtraIngredients>
    <Note orderNote={updateNote}></Note>
    <FinalOrder pizzaPrice={props.pizzaPrice} selectedIngredients={ingredients} selectedSize={pizzaSize} selectedType={doughType} note={orderNote}></FinalOrder>
</form>
    )
}
export default Form