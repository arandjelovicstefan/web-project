export const AddItemToCart = (cartItems, cartItemToAdd) => {
   const item = cartItems.find(item => item.id === cartItemToAdd.id);

   if (item) {
      return cartItems.map(cartItem => (cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
   }

   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const DeleteItem = (cartItems, itemToRemove) => {
   let copy = [...cartItems];
   let index = copy.findIndex(item => item.id === itemToRemove.id);
   copy.splice(index, 1);
   return copy;
};
