import React, { useContext, useEffect } from 'react'
import { storeContext } from '../../../context/context'
import { useStore } from '../../../context/store.provider'
// import StoreData from '../GettingData/StoreData'
import './searchBar.css'
// need to be able to free search from the whole storeData and display it, need to remember to clear after that in any change after 0.5 seccond will show the resault (if fillter so to do another state and not touching the main storeData)

function MainSearchBar() {
  const { storeData, searchData, setSearchData, value } = useContext(storeContext)
  const { handleFilterKeyInput } = useStore()
  // const onInputChange = ({ target: { value: inputValue } }) => {
  //   console.log(inputValue);
  //   setValue(inputValue)
  // }

  useEffect(() => {
    if (value === '') {
      setSearchData(storeData)
      console.log(storeData);
    } else {
      const searchByProductName = storeData.filter((product) => {
        return product.productName.includes(value) || product.category.includes(value) || product.id === value

      });
      console.log(value);
      // setSearchData(searchByProductName)
      // const searchByCategory = searchData.filter((product) => {
      //   if (product.category.includes(value)) {
      //     return product
      //   }
      // });
      // setSearchData(searchByCategory)
      // const searchById = searchData.filter((product) => {
      //   //this need to be in setTimeout to wait untill the user will type the whole search
      //   if (product.id === value) {
      //     return product
      //   }
      // });
      setSearchData(searchByProductName)
    }
    // console.log(searchData);
    // console.log(storeData);
  }, [value])
  // useEffect(() => {

  // }, [searchData])


  // need to do some loop that checking insid the whole data if this input inside and the same time deleting from the screen the just the includes ones


  return (
    <div className='search-bar'>
      <label className='search' htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
      <input placeholder='חיפוש מוצרים' onChange={handleFilterKeyInput} type="text" />
    </div>
  )
}

export default MainSearchBar