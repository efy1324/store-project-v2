import axios from 'axios'
import React, {  useState } from 'react'
import './CreatProduct.css'



function CreateProduct() {

  const [productNameValue, setProductNameValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const [imgUrlValue, setImgUrlValue] = useState('')
  const [priceValue, setPriceValue] = useState('')
  const onChangeName = ({ target: { value } }) => {
    setProductNameValue(value)
  }
  const onChangeCategory = ({ target: { value } }) => {
    setCategoryValue(value)
  }
  const onChangeImg = ({ target: { value } }) => {
    setImgUrlValue(value)
  }
  const onChangePrice = ({ target: { value } }) => {
    setPriceValue(value)
  }
  // useEffect(() => {
  //   if (!productNameValue === '' && !categoryValue === '') {}
      
  //   },[productNameValue, categoryValue])

  const NewProduct = {
    productName: productNameValue,
    category: categoryValue,
    imgUrl: imgUrlValue,
    price: priceValue,
  }
  
  const sendProduct = async () => {
    axios.post('https://cors-anywhere.herokuapp.com/https://apimocha.com/efy1324/store', NewProduct)
  }
  const onClickPost = () => {
    sendProduct()
    setProductNameValue('')
    setCategoryValue('')
    setImgUrlValue('')
    setPriceValue('')
}
return (
  <div className='create-product'>
    <h1> creat a new product</h1>
    <input onChange={onChangeName} value={productNameValue} placeholder='productName' />
    <input onChange={onChangeCategory} value={categoryValue} placeholder='category' />
    <input onChange={onChangeImg} value={imgUrlValue} placeholder='imgUrl' />
    <input onChange={onChangePrice} value={priceValue} placeholder='price' />
    <button className='create-btn' onClick={onClickPost}>create product</button>
  </div>
)
}

export default CreateProduct