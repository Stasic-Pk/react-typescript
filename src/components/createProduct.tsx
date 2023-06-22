import React, { useState } from "react";
import { IProduct } from "../modules";
import axios from "axios";
import { ErrorMessage } from "./errorMessage";
import { Interface } from "readline";

const productData: IProduct = {
  title: "",
  price: 404,
  description: "404",
  image: "404",
  category: "404",
  rating: {
    rate: 404,
    count: 404,
  }
}

interface createProductProps {
  onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: createProductProps) {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const submitHandler = async (event: React.FormEvent) => {
    setError("")
    event.preventDefault()

    if (value.trim().length === 0) {
      setError("please enter valid title")
      return
    }

    productData.title = value

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

    onCreate(response.data)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text"
        className="input"
        placeholder="Enter product title"
        value={value}
        onChange={changeHandler}
      />

      <button type="submit" className="modalButton" > create </button>

      { error && <ErrorMessage error={error} /> }
    </form>
  )
}
