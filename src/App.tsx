import React, { useState } from 'react';
import {Product} from "./components/product"
import {products} from "./data/products"

function App() {
  return (
    <div className="div">
      <Product product={products[1]} age={2} />
    </div>
  );
}

export default App;