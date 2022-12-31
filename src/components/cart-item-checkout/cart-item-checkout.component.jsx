import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  Remove,
} from "./cart-item-checkout.styles";

const CartItemCheckout = ({ product }) => {
  const { name, price, quantity, imageUrl } = product;
  const { addItemToCart, removeItemFromCart, dropItemFromCart } =
    useContext(CartContext);

  const addItem = () => addItemToCart(product);
  const removeItem = () => removeItemFromCart(product);
  const dropItem = () => dropItemFromCart(product);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItem}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <Remove onClick={dropItem}>&#10005;</Remove>
    </CheckoutItemContainer>
  );
};

export default CartItemCheckout;
