import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ROUTES, ROUTES_LINKS } from '../../routes/routes';
import ClientsOrders from './ClientsOrders';
import CreateProduct from './CreateProduct';
import CrudProducts from './CrudProducts';
import EditProduct from './EditProduct';
import StoreGraphes from './StoreGraphes';
import '../Store.css'
import MainSearchBar from '../user/Search/MainSearchBar';
import './MainAdminPage.css'
// here need to show the whole products with the search opion that under every card there is buttons edit and delete
// and on the right side there is create this will be open a form that on submit need to creat the element inside the mokeApi
function MainAdminPage() {
  const navigate = useNavigate();
  const onClickGraphes = () => {
    navigate(ROUTES_LINKS.TO_STORE_GRAPHES);
  }
  const onClickOrders = () => {
    navigate(ROUTES_LINKS.TO_CLIENT_ORDERS);
  }
  const onClickCreate = () => {
    navigate(ROUTES_LINKS.TO_CREATE_PRODUCT);
  }
  return (
    <>

      <Routes>
        <Route path={ROUTES.ROOT} element={<>
          <div className='navbar'>
            <MainSearchBar />
            <div className='btns-container'>
            <button onClick={onClickGraphes}><i className="fa-solid fa-chart-line"></i> Data graphes</button>
            <button onClick={onClickOrders}><i className="fa-solid fa-cart-arrow-up"></i> client orders</button>
            <button onClick={onClickCreate}><i className="fa-solid fa-circle-plus"></i> create new product</button>
            </div>
          </div>
          <CrudProducts />
        </>} />
        <Route path={ROUTES.STORE_GRAPHES} element={<StoreGraphes />} />
        <Route path={ROUTES.CLIENT_ORDERS} element={<ClientsOrders />} />
        <Route path={ROUTES.CREATE_PRODUCT} element={<CreateProduct />} />
        <Route path={ROUTES.EDIT_PRODUCT} element={<EditProduct />} />
      </Routes>

    </>
  )
}

export default MainAdminPage;