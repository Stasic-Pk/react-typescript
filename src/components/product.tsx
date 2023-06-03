import React, { FC } from "react";
import { useState } from "react";
import { IProduct } from "../modules";

interface productProps {
  product: IProduct
}

export const Product: FC<{product: IProduct}> = ({product}) => {
  const[details, setDetails] = useState(false)
  
  const buttonClassName = details ? " bgHide " : "bgShow"
  const buttonClasses = ["button", buttonClassName]

  return (
    <div className="product">	
      {product.title} <br/>

      <img src={product.image} className="productImage"/> <br/>
      {product.price} <br/>

      <button className={buttonClasses.join(" ")} onClick={() => setDetails(prev => !prev)}>
        {details ? "hide details" : "show details"}
      </button>
      <div className="marginBottom"> { details && <div> {product.description} </div> } </div>
    </div>
  )
}