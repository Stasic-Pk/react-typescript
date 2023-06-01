import React, { FC } from "react";
import { useState } from "react";
import { IProduct } from "../modules";
import { title } from "process";
import { count } from "console";

interface productProps {
  product: IProduct
}

export const Product: FC<{product: IProduct, age: number}> = ({age, product}) => {
  const[details, setDetails] = useState(false)
  const[button, setButton] = useState("show")
  
  function buttonTitle() {
    if (details == false) {
      setButton("hide")
      setDetails(true)
    } else {
      setButton("show")
      setDetails(false)
    }
  }

  return (
    <div>	
      {product.title} <br/>
      <img src={product.image} className="productImage"/> <br/>
      {product.price} <br/>
      <button onClick={() => buttonTitle()}>
        {button} description
      </button>
      {details && <div> {product.description} </div>}
      {/* {product.description} */}
    </div>
  )
}