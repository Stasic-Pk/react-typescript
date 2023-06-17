import React, { useState } from "react";

export function CreateProduct() {
  const [value, setValue] = useState("")

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
  }

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
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

      <button type="submit" className="modalButton"> create </button>
    </form>
  )
}
