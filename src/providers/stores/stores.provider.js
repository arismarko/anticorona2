import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToStore,
} from './stores.utils';

export const StoreContext = createContext({
  storeItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromStore: () => {},
  storeItemsCount: 0
});

const StoreProvider = ({ children }) => {
  const [storeItems, setStoreItems] = useState([]);
  const [storeItemsCount, setStoreItemsCount] = useState(0);

  const addItem = item =>  {
    return setStoreItems(addItemToStore(storeItems, item));
  }

  const removeItem = item => setStoreItems(removeItemFromStore(storeItems, item));
  const clearItemFromStore = item => setStoreItems(filterItemFromStore(item));


  return (
    <StoreContext.Provider
      value={{
        storeItems,
        addItem,
        removeItem,
        clearItemFromStore,
        storeItemsCount
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;