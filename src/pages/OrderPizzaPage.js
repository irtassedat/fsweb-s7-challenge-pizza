import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Pizza from "../components/Pizza";
import Form from "../components/Form";

const OrderPizzaPage = (props) => {
  const [price,setPrice] = useState(0);
  const selectedPrice =(p)=>{
    setPrice(p)
  }
  useEffect(()=>{

  },[])
    return (
        <div className="order-page">
        <div className="order-page-content">
          <Header></Header>
          <Pizza pizzaPrice={selectedPrice}></Pizza>
          <Form pizzaPrice={price}></Form>
        </div>
      </div>
    )
}

export default OrderPizzaPage;