import { createContext, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  dropItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  TOOGLE_CART_OPEN: "TOOGLE_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOOGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const addCartItem = (cartItems, productToAdd) => {
  const itemExist = cartItems.some((item) => item.id === productToAdd.id);

  if (itemExist) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const cartItem = cartItems.find((item) => item.id === productToRemove.id);

  if (cartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const dropItem = (cartItems, productToDrop) => {
  return cartItems.filter((item) => item.id !== productToDrop.id);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const updateCartItems = (newCartItems) => {
    const itemCount = newCartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    const itemTotal = newCartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    const newCart = {
      cartItems: newCartItems,
      cartCount: itemCount,
      cartTotal: itemTotal,
    };

    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCart });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItems(newCartItems);
  };

  const dropItemFromCart = (productToDrop) => {
    const newCartItems = dropItem(cartItems, productToDrop);
    updateCartItems(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_ACTION_TYPES.TOOGLE_CART_OPEN, payload: bool });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    dropItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
