import axios from 'axios';
import React, {  useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useStore } from '../../context/store.provider';

function EditProduct(props) {

  const params = useParams()
  const { storeProducts} = useStore()
  // const [productNameValue, setProductNameValue] = useState('')
  // const [categoryValue, setCategoryValue] = useState('')
  // const [imgUrlValue, setImgUrlValue] = useState('')
  // const [priceValue, setPriceValue] = useState('')
  const [product, setProduct] = useState({
    productName: "",
    category:"",
    imgUrl: "",
    price:""
  })

  useLayoutEffect(() => {
    const prod = storeProducts.find(p => p.id === params.id * 1)
    setProduct(prod)
  },[])
  const onChangeName = ({ target: { value } }) => {
    setProduct(prev => ({ ...prev, productName: value }))
  }
  const onChangeCategory = ({ target: { value } }) => {
    setProduct(prev => ({ ...prev, category: value }))
  }
  const onChangeImg = ({ target: { value } }) => {
    setProduct(prev => ({ ...prev, imgUrl: value }))
  }
  const onChangePrice = ({ target: { value } }) => {
    setProduct(prev => ({ ...prev, price: value }))
  }
  // useEffect(() => {
  //   if (!productNameValue === '' && !categoryValue === '') {

  //   }
  // }, [productNameValue, categoryValue])
  const sendProduct = async () => {
    const NewProduct = {
      productName: product.productName,
      category: product.category,
      imgUrl: product.imgUrl,
      price: product.price,
    }
    axios.put('https://cors-anywhere.herokuapp.com/https://apimocha.com/efy1324/store/' + product.id, NewProduct)
  }
console.log(product);
  return (
    <div className='edit-product-form'>
      EditProduct {params.id}
      <input onChange={onChangeName} value={product.productName}  />
      <input onChange={onChangeCategory} value={product.category}  />
      <input onChange={onChangeImg} value={product.imgUrl} />
      <input onChange={onChangePrice} value={product.price}/>
      <button onClick={sendProduct}>Edit product</button>
    </div>
  )
}
//placeholder={name}
//placeholder={category}
//placeholder={imgUrl}
//placeholder={price }
export default EditProduct