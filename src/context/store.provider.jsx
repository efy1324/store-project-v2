import React, { useContext, useEffect, useState } from 'react';
import { readData } from '../component/user/GettingData/firebase';

const StoreContextTemplate = {
  storeProducts: [],
  filteredStoreProducts: [],
  handleFilterKeyInput: () => {},
};

const StoreContext = React.createContext(StoreContextTemplate);

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
  const [storeProducts, setStoreProducts] = useState([]);
  const [filteredStoreProducts, setFilteredStoreProducts] = useState([]);
  const [filterKey, setFilterKey] = useState('');
  const [order, setOrder] = useState([
    {
      id: '',
      category: 'מוצרי חשמל',
      imgUrl: 'כלבו אפרת',
      price: '120',
      productName: 'נורת לד לסוכה מוגן מים',
      productAmount: '2',
    },
    {
      id: '',
      category: 'מוצרי חשמל',
      imgUrl: 'כלבו אפרת',
      price: '180',
      productName: 'פלטת שבת 4 סירים',
      productAmount: '1',
    },
  ]);
  const [clients, setClients] = useState([
    {
      firstName: 'אפרים',
      lastName: 'לוי',
      number: '404404',
      Email: 'leviefraim@gmail.com',
    },
  ]);

  useEffect(() => {
    function fetchStoreProducts() {
      // const URL = 'https://cors-anywhere.herokuapp.com/https://apimocha.com/efy1324/store'
      // const { data: storeProductsData } = await axios.get(URL)
      // setStoreProducts(storeProductsData)
      readData((data) => {
        if (data) {
          setStoreProducts(data);
        } else {
          console.log('something worng!');
        }
      });
    }

    fetchStoreProducts();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setFilteredStoreProducts(
        storeProducts.filter(
          (product) => product.productName.includes(filterKey) || product.category.includes(filterKey) || product.id === filterKey
        )
      );
    }, 2000);

    return () => clearTimeout(id);
  }, [filterKey, storeProducts]);

  const handleFilterKeyInput = ({ target: { value } }) => setFilterKey(value);

  return (
    <StoreContext.Provider value={{ storeProducts, filteredStoreProducts, handleFilterKeyInput, setClients, clients, order, setOrder }}>
      {children}
    </StoreContext.Provider>
  );
};
