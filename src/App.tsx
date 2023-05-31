import React, { useState } from 'react';
import {Product} from "./components/product"
import {products} from "./data/products"

function App() {
  return (
    <div className="div">
      <Product product={products[0]} />
    </div>
  );
}

export default App;