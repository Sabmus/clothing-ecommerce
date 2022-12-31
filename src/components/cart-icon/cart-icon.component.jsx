import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShopIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toogleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toogleCartOpen}>
      <ShopIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
