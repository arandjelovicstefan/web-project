export const AddItem = item => {
   return {
      type: 'ADD_ITEM',
      payload: item,
   };
};

export const RemoveItem = item => {
   return {
      type: 'REMOVE_ITEM',
      payload: item,
   };
};

export const RemoveAllItems = () => {
   return {
      type: 'REMOVE_ALL_ITEMS',
   };
};
