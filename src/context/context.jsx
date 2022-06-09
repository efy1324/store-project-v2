import React, { useState, createContext } from 'react'


export const storeContext = createContext()

function ContextProvider({ children }) {
const [numProducts,setNumProducts] = useState(0)
const [choosenProducts,setChoosenProducts] = useState([])
const [choosenProductPrice,setChoosenProductPrice] = useState("")
const [choosenProductCategory,setChoosenProductCategory] = useState("")
const [userInput,setUserInput] = useState("")
const [adminInput,setAdminInput] = useState("")
const [storeData, setStoreData] = useState([])
const [searchData, setSearchData] = useState([]);
const [value, setValue] = useState("");
const [totalPrice, setTotalPrice]= useState(0)

  // here all states of the store app

  return (
    <storeContext.Provider value={{
      numProducts,setNumProducts,choosenProducts,setChoosenProducts,choosenProductPrice,setChoosenProductPrice,choosenProductCategory,setChoosenProductCategory,userInput,setUserInput,adminInput,setAdminInput,storeData, setStoreData,searchData, setSearchData,value, setValue,totalPrice, setTotalPrice
    }}>
      {children}
    </storeContext.Provider>
  );
}

export default ContextProvider