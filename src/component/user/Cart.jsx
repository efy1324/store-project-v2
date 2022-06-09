//showing num of products and total price, and icon of cart
// onClick need to route to CartOrderForm component
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { storeContext } from '../../context/context';
import { ROUTES_LINKS } from '../../routes/routes';
import './Cart.css'
function Cart() {
  // const location = useLocation();
  const navigate = useNavigate();
  const { numProducts } = useContext(storeContext)

  const handleNavigation = () => {
    console.log("clicked")
    navigate(ROUTES_LINKS.TO_ORDER_FORM);
  }



  return (
    <button className='cart' onClick={handleNavigation}>
      <i className="fa-solid fa-cart-plus">{numProducts}</i>
    </button>
  )
}

export default Cart