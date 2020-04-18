export const addItemToStore = (storeItems, storeItemToAdd) => {
    console.log(storeItemToAdd);
    return [...storeItems, { ...storeItemToAdd}];
};
  
export const removeItemFromStore = (storeItems, storeItemToRemove) => {
    const existingStoreItem = storeItems.find(
      storeItem => storeItem.id === storeItemToRemove.id
    );
  
    if (existingStoreItem.quantity === 1) {
      return storeItems.filter(storeItem => storeItem.id !== storeItemToRemove.id);
    }
  
    return storeItems.map(storeItem =>
      storeItem.id === storeItemToRemove.id
        ? { ...storeItem, quantity: storeItem.quantity - 1 }
        : storeItem
    );
};
  

export const filterItemFromStore = (storeItems, item) =>
    storeItems.filter(storeItem => storeItem.id !== item.id);

  
export const getStoreItemsCount = storeItems =>
    storeItems.reduce(
      (accumalatedQuantity, storeItem) => accumalatedQuantity + storeItem.quantity,
      0
);