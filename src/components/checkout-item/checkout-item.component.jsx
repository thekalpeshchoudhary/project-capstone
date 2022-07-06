import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addItemsToCart, removeItemsFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const clearItem = () => {
    deleteItemFromCart(cartItem);
  };
  const addItemsHandler = () => {
    addItemsToCart(cartItem);
  };
  const removeItemsHandler = () => {
    removeItemsFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemsHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemsHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={clearItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
