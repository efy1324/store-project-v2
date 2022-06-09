import React, { useContext, useEffect} from 'react'
import { storeContext } from '../../context/context'
import './ProductCard.css'
import './GridCard.css';
import './GridCardResponsive.css'
import { useStore } from '../../context/store.provider';
// import CartOrderForm from './CartOrderForm';


function ProductCard() {
  const { setTotalPrice, setNumProducts, storeData, searchData, setSearchData,  setChoosenProducts, choosenProducts } = useContext(storeContext)
  //, handleFilterKeyInput
  const { filteredStoreProducts } = useStore()

  // const {  imgUrl, name, cattegory, price } = SearchData;

  const handleClickAddToCart = (id, category, imgUrl, price, productName) => {
    setNumProducts(prev => prev + 1)
    const allProducts = [...choosenProducts]
    console.log(id, category, imgUrl, price, productName);
    const newProduct = {
      "id": id,
      "category": category,
      "imgUrl": imgUrl,
      "price": price,
      "productName": productName,
      "productAmount": 1
    }
    allProducts.push(newProduct)
    setChoosenProducts(allProducts)
    const numPrice = price.slice(2)
    setTotalPrice(prev => prev + Number(numPrice))
  }
  useEffect(() => {

  }, [searchData])
  // const fillterData = searchData.filter((product) => {
  //   if (value === '') {
  //     return product
  //   }
  //   else {
  //     // console.log(product);
  //     setTimeout(() => {
  //       console.log((Object.values(product).includes(value))) 
  //     }, 500);
  //   }
  // })
  useEffect(() => {
    setTimeout(() => {
      const copiedData = [...storeData]
      setSearchData(copiedData)
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeData])

  return (
    <div className='products-con'>
      {!filteredStoreProducts ? <h1>hello world</h1> : filteredStoreProducts.map(({ id, category, imgUrl, price, productName }) =>
        <div className="container" key={id}>
          <div className="card">
            <div className="imgBx">
              <img src={imgUrl} alt ={productName} />
              <div className="contentBx">
                <h2 className='text-card' >{productName}</h2>
                <div className="size">
                  <h3 className='text-card'>{category}</h3>
                </div><br /><br /><br /><br />
                <div className="color">
                  <h3 className='text-card'>{price}</h3>
                </div>
                <button onClick={() => handleClickAddToCart(id, category, imgUrl, price, productName)}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCard;
  /* {!storeData ? <h1>hello world</h1> : storeData.map(({ id, category, imgUrl, price, productName }) => <ProductCard keyforProduct={id} name={productName} imgUrl={imgUrl} cattegory={category} price={price} id={id} />)*/