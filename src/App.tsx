import React, { useEffect, useState } from 'react';
import {Product} from "./components/product"
import { IProduct } from './modules';
import { useProducts } from './hooks/products';
import { Loader } from './components/loader';
import { ErrorMessage } from './components/errorMessage';
import { Modal } from './components/modal';
import { CreateProduct } from "./components/createProduct";

function App() {

  const {products, loading, error} = useProducts()
  
  return (
    <div className='box'>
      <Modal title="Create new product">
        <CreateProduct/>
      </Modal>
      <div className="div">
        {loading && <Loader/>}
        {error && <ErrorMessage error={error}/>}
        { products.map(product => <Product product = {product} key={product.id} />)}

      </div>
    </div>
  );
}

export default App;