import React, { useEffect, useState } from 'react';
import {Product} from "./components/product"
import { useProducts } from './hooks/products';
import { Loader } from './components/loader';
import { ErrorMessage } from './components/errorMessage';
import { Modal } from './components/modal';
import { CreateProduct } from "./components/createProduct";
import { IProduct } from './modules';

function App() {
  const {products, loading, error, addProduct} = useProducts()
  const [modal, setModal] = useState(false)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }
  
  return (
    <div className='box'>
      { !loading && <button className='modalOn' onClick={() => setModal(!modal)}> create product </button> }
      {modal && <Modal title="Create new product">
        <CreateProduct onCreate={createHandler} />
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