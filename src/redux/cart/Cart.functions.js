export const AddItemToCart = (cartItems, cartItemToAdd) => {
   const item = cartItems.find(item => item.id === cartItemToAdd.id);

   if (item) {
      return cartItems.map(cartItem =>
         cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
   }

   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const DeleteItem = (cartItems, itemToRemove) => {
   return cartItems.filter(item => item.id !== itemToRemove.id);
};

export const Quantity = (cartItems, cartItemToModify, plusMinus) => {
   let copy = [...cartItems];
   let findItem = copy.find(item => item.id === cartItemToModify.id);
   if (findItem.quantity === 1 && plusMinus === 'minus') {
      copy = copy.filter(item => item.id !== cartItemToModify.id);
   } else {
      if (plusMinus === 'minus') findItem.quantity -= 1;
      if (plusMinus === 'plus') findItem.quantity += 1;
   }
   return copy;
};
