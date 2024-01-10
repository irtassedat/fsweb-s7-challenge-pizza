import React, { useEffect, useState } from "react";

const ExtraIngredients = (props) => {
    console.log(props);
    const [extraIngredient, setExtraIngredient] = useState(0);
    const [ingredients, setIngredients] = useState([]);

    const handleChange = (event) => {
        if (ingredients.length < 10) {
            if (event.target.checked) {
                setExtraIngredient(extraIngredient + 1);
                setIngredients([...ingredients, event.target.name]);
                props.ingredientCount(extraIngredient);
                props.selectedIngredients.push([...ingredients, event.target.name]);
            } else {
                setExtraIngredient(extraIngredient - 1);
                setIngredients(ingredients.filter(a => a !== event.target.name));
                props.ingredientCount(extraIngredient);
                props.selectedIngredients.pop([...ingredients, event.target.name]);
            }
        } else {
            event.target.checked = false;
        }
    }

    const ingreedientListFirstColumn = [
        {
            "name": "Pepperoni",
            "value": "Pepperoni"
        },
        {
            "name": "Sosis",
            "value": "Sosis"
        },
        {
            "name": "Kanada Jambonu",
            "value": "Kanada-Jambonu"
        },
        {
            "name": "Tavuk Izgara",
            "value": "Tavuk-Izgara"
        },
        {
            "name": "Soğan",
            "value": "Sogan"
        }
        
    ]
    const ingredientListSecondColumn = [
        {
            "name": "Domates",
            "value": "Domates"
        },
        {
            "name": "Mısır",
            "value": "Misir"
        },
        {
            "name": "Sucuk",
            "value": "Sucuk1"
        },
        {
            "name": "Jalapeno",
            "value": "Jalapeno"
        },
        {
            "name": "Sarımsak",
            "value": "Sarimsak"
        }
        
    ]
    const ingredientListThirdColumn = [
        {
            "name": "Biber",
            "value": "Biber"
        },
        {
            "name": "Sucuk",
            "value": "Sucuk2"
        },
        {
            "name": "Ananas",
            "value": "Ananas"
        },
        {
            "name": "Kabak",
            "value": "Kabak"
        },
        
    ]
    useEffect(()=>{

    },[])

    return (
        <div className="additionalmat">
            <h4>Ek Malzemeler</h4>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="additionalmat-inputs">
                <div className="additionalmat-column">
                    {ingreedientListFirstColumn.map((ingredient) =>
                        <div className="malzemeler-checkbox">
                            <input type="checkbox" id={ingredient.value} name={ingredient.value} onChange={handleChange}></input>
                            <label htmlFor={ingredient.value}>{ingredient.name}</label>
                        </div>
                    )}
                </div>
                <div className="additionalmat-column">
                    {ingredientListSecondColumn.map((ingredient) =>
                        <div className="malzemeler-checkbox">
                            <input type="checkbox" id={ingredient.value} name={ingredient.value} onChange={handleChange}></input>
                            <label htmlFor={ingredient.value}>{ingredient.name}</label>
                        </div>
                    )}
                </div>
                <div className="additionalmat-column">
                    {ingredientListThirdColumn.map((ingredient) =>
                        <div className="malzemeler-checkbox">
                            <input type="checkbox" id={ingredient.value} name={ingredient.value} onChange={handleChange}></input>
                            <label htmlFor={ingredient.value}>{ingredient.name}</label>
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    )
}
export default ExtraIngredients