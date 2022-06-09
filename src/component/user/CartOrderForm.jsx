//showing the products and option to increase ot decrease the amount
//
//form for the user to add his detailsand cradit card to do it in deferent component?

//on click submit: showing to the user a massage, sending to the admin order details as one order maby to study about some Api that sending mail to the user and the admin.
import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../../context/context'
import './ProductCard.css'
import './CartOrder.css'
import MainSearchBar from './Search/MainSearchBar'
import { useNavigate } from 'react-router-dom'
// import { ROUTES_LINKS } from '../../routes/routes'
import { useStore } from '../../context/store.provider'
import emailjs from 'emailjs-com'
import { ROUTES_LINKS } from '../../routes/routes'

function CartOrderForm() {

  const Navigate = useNavigate()
  const { clients, setClients,setOrder } = useStore()
  const { choosenProducts, totalPrice, setChoosenProducts, setTotalPrice, setNumProducts } = useContext(storeContext)
  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    number: '',
    Email: ''
  })


  const handleClickAdd = (index, price) => {
    // need to fix how to get the index inside the map
    const newArrProducts = [...choosenProducts]
    newArrProducts[index].productAmount = newArrProducts[index].productAmount + 1;
    setChoosenProducts(newArrProducts)

    // setChoosenProducts(prev => prev[index].productAmount + 1)
    // console.log(price);
    const numPrice = price.slice(2)
    setTotalPrice(prev => prev + Number(numPrice))
    // newArrProducts[index] = newArrProducts[index].productAmount + 1;
    // setChoosenProducts(choosenProducts[index].productAmount + 1)
    // adding numProduct  + 1 and adding the price number to the total price
  }

  const handleClickDelete = (index, price) => {
    // console.log(id);
    const newProducts = [...choosenProducts]
    newProducts.splice(index, 1)
    setChoosenProducts(newProducts)
    // console.log(newProducts);
    // console.log(choosenProducts[index]);
    const numPrice = price.slice(2)
    setTotalPrice(prev => prev - Number(numPrice))
    setNumProducts(prev => prev - 1)
    // const newProducts = choosenProducts.filter(product => !product.id === id)
    // console.log(newProducts);
    // need to remove the product from the cart maby to set state to the list of products and remove this obj
  }
  const handleClickMinus = (index, price) => {
    if (choosenProducts[index].productAmount > 1) {
      const newArrProducts = [...choosenProducts]
      newArrProducts[index].productAmount = newArrProducts[index].productAmount - 1;
      setChoosenProducts(newArrProducts)

      const numPrice = price.slice(2)
      setTotalPrice(prev => prev - Number(numPrice))
    }
    // need to decrese the amount from the same product
  }
  const handleNavigation = () => {
    // need to route back to 
    Navigate(ROUTES_LINKS.TO_STORE);
  }
  const onChangeName = ({ target: { value } }) => {
    setClient(prev => ({ ...prev, firstName: value }))
  }
  const onChangeLastName = ({ target: { value } }) => {
    setClient(prev => ({ ...prev, lastName: value }))
  }
  const onChangeNumber = ({ target: { value } }) => {
    setClient(prev => ({ ...prev, number: value }))
  }
  const onChangeMail = ({ target: { value } }) => {
    setClient(prev => ({ ...prev, Email: value }))
  }
  const handleClickOrder = (e) => {
    e.preventDefault()

    const newClients = []
    const newClient = {
      firstName: client.firstName,
      lastName: client.lastName,
      number: client.number,
      Email: client.Email
    }
    newClients.push(newClient)
    setClients(newClients)
    sendEmail(e)
    setOrder([...choosenProducts])
    setChoosenProducts([])
    setTotalPrice(0)
    setNumProducts(0)

    // need to send all fields of data as object to array that will hold the orders
    // next need to do active order and completed order
    // also need to conect to the api that will send mail
    // the last thing its to show massage to the user your order comlete succesful and you got mail with details, go to a new order
  }
  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_b5iiz0p', 'template_beowocr', e.target, 'Agk1F7ErqUg3L6lOM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }



  useEffect(() => {
    console.log(clients);
  }, [clients])
  // console.log(clients);
  // after submit set the num of product inside cart to 0
  return (
    <div className='cart-order-form-page'>
      <div className='navbar'>
        <div className='logo'>
          <img src={require(`../../assets/images/logo.png`)} alt="logo" />
        </div>
        {/* the function search not working because there is no data in this components */}
        <MainSearchBar />
        <button onClick={handleNavigation}><i className="fa-solid fa-backward"></i><i className="fa-solid fa-store"></i> המשך קנייה</button>
      </div>
      <div className='products-in-cart' >
        {choosenProducts.map(({ id, category, imgUrl, price, productName, productAmount }, index) =>
          <>
            <div className="container" key={id}>
              <div key={id} className="card">
                <div className="imgBx">
                  <img src={imgUrl} alt={productName} />
                  <div className="contentBx">
                    <h2>{productName}</h2>
                    <div className="size">
                      <h3>{category}</h3>
                    </div><br /><br /><br /><br />
                    <div className="color">
                      <h3>{price}</h3>
                    </div>
                    <button onClick={() => handleClickAdd(index, price)}>+ </button>
                    <button onClick={() => handleClickMinus(index, price)}>- </button>
                    <button onClick={() => handleClickDelete(index, price)}>Remove</button>
                    <div id='numProduct'>{productAmount}</div>
                    {/* to bring from awsome font icons of plus minus and Delete */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className='total-price'>total price: {totalPrice} &#8362;</div>
      <div className='form-container'>
        <div className="payment">
          <h3>Payment</h3>
          <label htmlFor="fname">Accepted Cards</label>
          <div className="icon-container">
            <i className="fa-brands fa-cc-visa visa" ></i>
            <i className="fa-brands fa-cc-mastercard mastercard"></i>
            <i className="fa-brands fa-cc-amex amex"></i>
          </div>
          <label htmlFor="cname">Name on Card</label>
          <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
          <label htmlFor="ccnum">Credit card number</label>
          <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
          <label htmlFor="expmonth">Exp Month</label>
          <input type="text" id="expmonth" name="expmonth" placeholder="September" />

          <div className="row">
            <div className="col-50">
              <label htmlFor="expyear">Exp Year</label>
              <input type="text" id="expyear" name="expyear" placeholder="2026" />
            </div>
            <div className="col-50">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="352" />
            </div>
          </div>
        </div>
        <form className='order-form' onSubmit={handleClickOrder}>
          <div className='client-details'>
            <label htmlFor="firstName"><i className="fa-solid fa-user"></i> שם פרטי</label>
            <input onChange={onChangeName} type="text" name='firstName' value={client.firstName} />
            <label htmlFor="firstName">שם משפחה</label>
            <input onChange={onChangeLastName} type="text" name="lastName" value={client.lastName} />
            <label htmlFor="number"> <i className="fa-solid fa-phone"></i>מספר טלפון</label>
            <input onChange={onChangeNumber} name='number' value={client.number} type="phone" placeholder="0504624444" />
            <label htmlFor="Mail"> <i className="fa-solid fa-envelope"></i> מייל</label>
            <input onChange={onChangeMail} type="email" name='subject' value={client.Email} />

          </div>

          <div className='btn-order'>  <button type='submit' >complete your order</button></div>

        </form>
      </div>
    </div>
  )
}

export default CartOrderForm