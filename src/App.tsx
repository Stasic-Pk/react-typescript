import React, { useState } from 'react';
import {Product} from "./components/product"
import {products} from "./data/products"

function App() {
  return (
    <div className='box'>
      <div className="div">
        { products.map(product => <Product product = {product} key={product.id} />)}

        {/* <Product product={products[0]} />
        <Product product={products[1]} /> */}
      </div>
    </div>
  );
}

export default App;