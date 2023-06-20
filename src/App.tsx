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
  const [modal, setModal] = useState(false)
  
  return (
    
    <div className='box'>
      { !loading && <button className='modalOn' onClick={() => setModal(!modal)}> create product </button> }
      {modal && <Modal title="Create new product">
        <CreateProduct onCreate={() => setModal(false)} />
      </Modal>}
      <div className="div">
        { loading && <Loader/> }
        { error && <ErrorMessage error={error}/> }
        { products.map(product => <Product product = {product} key={product.id} />) }
      </div>
    </div>
  );
}

export default App;