import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-item-checkout.styles.scss";

const CartItemCheckout = ({ product }) => {
  const { name, price, quantity, imageUrl } = product;
  const { addItemToCart, removeItemFromCart, dropItemFromCart } =
    useContext(CartContext);

  const addItem = () => addItemToCart(product);
  const removeItem = () => removeItemFromCart(product);
  const dropItem = () => dropItemFromCart(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={dropItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CartItemCheckout;
