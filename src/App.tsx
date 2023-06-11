import React, { useEffect, useState } from 'react';
import {Product} from "./components/product"
import { IProduct } from './modules';
import { useProducts } from './hooks/products';

function App() {

  const {products, loading, error} = useProducts()

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