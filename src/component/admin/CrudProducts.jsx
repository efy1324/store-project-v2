import axios from 'axios'
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useStore } from '../../context/store.provider'
import { ROUTES_LINKS } from '../../routes/routes'
import StoreData from '../user/GettingData/StoreData'
import './CrudProducts.css'

function CrudProducts() {
  const { filteredStoreProducts } = useStore()


  const navigate = useNavigate();
  const onClickEdit = (id) => {    
    navigate(ROUTES_LINKS.TO_EDIT_PRODUCT.replace(':id', id));
  }
  const deleteProduct = async (newProduct) => {
    axios.delete('https://cors-anywhere.herokuapp.com/https://apimocha.com/efy1324/store', newProduct)
  }
  const onClickDelete = (id, index) => {
    const newProduct = StoreData.find(product => product.id === id)
    deleteProduct(newProduct)
  }
  return (
    <div className='main-admin-site'>
      <div className='products-con'>
        {!filteredStoreProducts ? <h1>hello world</h1> : filteredStoreProducts.map(({ id, category, imgUrl, price, productName }, index) =>
          <div className="container" key={id}>
            <div className="card">
              <div className="imgBx">
                <img src={imgUrl} alt ="product" />
                <div className="contentBx">
                  <h2>{productName}</h2>
                  <div className="size">
                    <h3>{category}</h3>
                  </div><br /><br /><br /><br />
                  <div className="color">
                    <h3>{price}</h3>
                  </div>
                  <button className='edit-product' onClick={() => onClickEdit(id)}>Edit </button>
                  <button className='delete-product' onClick={() => onClickDelete(id, index)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
  )
}

export default CrudProducts