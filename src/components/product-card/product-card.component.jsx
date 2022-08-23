import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { addItemsToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemsToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverter} onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
