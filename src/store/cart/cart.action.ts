import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utls";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
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

const deleteCartItem = (
  cartItems: CartItem[],
  itemToDelete: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== itemToDelete.id;
  });
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
});

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);
export const addItemsToCart = (
  currentCartItems: CartItem[],
  itemToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(currentCartItems, itemToAdd);
  return setCartItems(newCartItems);
};

export const removeItemsFromCart = (
  currentCartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(currentCartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const deleteItemFromCart = (
  currentCartItems: CartItem[],
  product: CartItem
) => {
  const newCartItems = deleteCartItem(currentCartItems, product);
  return setCartItems(newCartItems);
};
