export const AddItemToCart = (cartItems, cartItemToAdd) => {
   const item = cartItems.find(item => item.id === cartItemToAdd.id);

   if (item) {
      return cartItems.map(cartItem => (cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
   }

   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
