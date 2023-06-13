import React from "react";
import { useProducts } from "../hooks/products";

// interface ErrorMessageProps {
//   error: string
// }

export function ErrorMessage(/*{ error }: ErrorMessageProps*/) {

  const { error } = useProducts()

  return <div className='error'>{error}!</div>
}