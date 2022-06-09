import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { useStore } from '../context/store.provider'
import { ROUTES } from '../routes/routes'
import AdminInput from './admin/AdminInput'
import MainAdminPage from './admin/MainAdminPage'
import Cart from './user/Cart'
import CartOrderForm from './user/CartOrderForm'
import StoreData from './user/GettingData/StoreData'
// import productsDataForStore from './user/GettingData/productsDataExcel'
import ProductCard from './user/ProductCard'
import MainSearchBar from './user/Search/MainSearchBar'
import './Store.css'
function Store() {
  // const { storeProducts, filteredStoreProducts, handleFilterKeyInput } = useStore()
  // console.log({ storeProducts, filteredStoreProducts, handleFilterKeyInput })


  return (
    <div className='mainPage'>
      <Routes>
        <Route path={ROUTES.ROOT} element={
          <>
            <div className='navbar'>
              <div className='logo'>
                <img src={require(`../assets/images/logo.png`)} alt="logo" />
              </div>
              <MainSearchBar />
              <Cart />
              <AdminInput />
            </div>
            <main>
              <StoreData />
              <ProductCard />
            </main>
          </>
        } />
        <Route path={ROUTES.ORDER_FORM} element={<CartOrderForm />} />
        <Route path={ROUTES.ADMIN_SITE + ROUTES.TRAILING_PATH} element={<MainAdminPage />} />
      </Routes>
      {/* <div className='footer'>
        wase
        maps
        טלפון
        פקס
        מייל
        צור קשר?
      </div> */}
      {/* {productsDataForStore.map(product => <ProductCard keyforProduct={product[0]} name={product[3]} imgUrl={product[5]} cattegory={product[2]} price={product[4]} id={product[0]} />)} */}
    </div>
  )
}

export default Store