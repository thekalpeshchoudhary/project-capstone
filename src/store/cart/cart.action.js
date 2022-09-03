import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utls";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  return cartItems
    .map((cartItem) => {
      if (cartItem.id === cartItemToRemove.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    })
    .filter((cartItem) => {
      return cartItem.quantity > 0;
    });
};

const deleteCartItem = (cartItems, itemToDelete) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== itemToDelete.id;
  });
};

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

export const addItemsToCart = (currentCartItems, itemToAdd) => {
  const newCartItems = addCartItem(currentCartItems, itemToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemsFromCart = (currentCartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(currentCartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItemFromCart = (currentCartItems, product) => {
  const newCartItems = deleteCartItem(currentCartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
