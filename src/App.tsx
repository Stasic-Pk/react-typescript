import React, { useEffect, useState } from 'react';
import {Product} from "./components/product"
import axios, { AxiosError } from 'axios';
import { IProduct } from './modules';

function App() {
  const [products, setProducts] = useState<IProduct[]>( [])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products?limit=15")
      setProducts(response.data)
      setLoading(false)
    } catch (e: unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='box'>
      <div className="div">
        {loading && <h1 className='load'>Loading!</h1>}
        {error && <div className='error'>{error}!</div>}
        { products.map(product => <Product product = {product} key={product.id} />)}

        {/* <Product product={products[0]} />
        <Product product={products[1]} /> */}
      </div>
    </div>
  );
}

export default App;