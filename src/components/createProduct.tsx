import React from "react";

export function CreateProduct() {
  return (
    <form>
      <input type="text" className="input" placeholder="Enter product title"/>

      <button type="submit" className="button"> create </button>
    </form>
  )
}
