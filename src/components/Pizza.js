import React, { useState } from "react";

const Pizza = ({pizzaPrice}) => {
    const [price, setPrice] = useState(85.50)
   
    pizzaPrice(price)

    return (
        <>
            <div className="pizza">
                <div className="pizza-info">
                    <h2>Position Absolute Acı Pizza</h2>
                    <h3>{price}0₺</h3>
                    <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluştan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
            </div>
        </>
    )

}

export default Pizza