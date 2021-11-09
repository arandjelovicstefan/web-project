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

export const IncrementQty = item => {
   return {
      type: 'INCREMENT_QUANTITY',
      payload: item,
   };
};

export const DecrementQty = item => {
   return {
      type: 'DECREMENT_QUANTITY',
      payload: item,
   };
};
