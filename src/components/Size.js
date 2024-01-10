import React, { useState } from "react";

const Size = ({size}) => {
  const [pizzaSize, setPizzaSize] = useState()

  const onSizeChanged = (e) => {		    
		setPizzaSize(e.target.value); 
    size(e.target.value);
	}

  return (
    <>
      <div className="size-radio">
        <h4>Boyut Seç <span style={{ color: "red" }}>*</span> </h4>
        <div className="radio-size">
          <input type="radio" id="kucuk" name="size" value={"kucuk"} onChange={onSizeChanged}></input>
          <label htmlFor="kucuk">Küçük</label>
        </div>
        <div className="radio-size">
          <input type="radio" id="orta" name="size" value={"orta"} onChange={onSizeChanged}></input>
          <label htmlFor="orta">Orta</label>
        </div>
        <div className="radio-size">
          <input type="radio" id="buyuk" name="size" value={"buyuk"} onChange={onSizeChanged}></input>
          <label htmlFor="buyuk">Büyük</label>
        </div>
      </div>
    </>
  )
}

export default Size;