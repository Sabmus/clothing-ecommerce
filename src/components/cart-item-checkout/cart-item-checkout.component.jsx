import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  dropItemFromCart,
} from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, quantity, imageUrl } = product;

  const addItem = () => dispatch(addItemToCart(cartItems, product));
  const removeItem = () => dispatch(removeItemFromCart(cartItems, product));
  const dropItem = () => dispatch(dropItemFromCart(cartItems, product));

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
