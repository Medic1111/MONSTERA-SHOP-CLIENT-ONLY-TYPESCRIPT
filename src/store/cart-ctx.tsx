import React, { createContext, useState } from "react";
import { CartItemType } from "../models/cart-items";

interface Value {
  cartItemArr: CartItemType[];
  setCartItemArr: React.Dispatch<React.SetStateAction<CartItemType[] | []>>;
  onAddItem: (obj: CartItemType) => void;
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  onSubtractItemQuantity: (obj: CartItemType) => void;
  onReset: () => void;
}

export const CartCtx = createContext<Value>({
  cartItemArr: [],
  setCartItemArr: () => {},
  onAddItem: (obj) => {},
  cartQuantity: 1,
  setCartQuantity: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
  onSubtractItemQuantity: () => {},
  onReset: () => {},
});

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItemsArr, setCartItemsArr] = useState<CartItemType[] | []>([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const onAddItem = (obj: CartItemType) => {
    const alreadyInCart = cartItemsArr.find((item) => item.id === obj.id);
    if (alreadyInCart) {
      alreadyInCart.quantity += obj.quantity;
    } else {
      setCartItemsArr((prev) => {
        return [...prev, obj];
      });
    }
    setCartQuantity((prev) => prev + obj.quantity);
    setCartTotal((prev) => {
      return prev + obj.quantity * obj.price;
    });
  };

  const onSubtractItemQuantity = (obj: CartItemType) => {
    const subFrom = cartItemsArr.find((item) => item.id === obj.id);
    if (subFrom) {
      if (subFrom.quantity <= 1) {
        setCartItemsArr(cartItemsArr.filter((objRet) => objRet.id !== obj.id));
      } else {
        subFrom.quantity--;
      }
    }

    setCartQuantity((prev) => prev - obj.quantity);
    setCartTotal((prev) => {
      return prev - obj.price;
    });
  };

  const onReset = () => {
    setCartItemsArr([]);
    setCartQuantity(0);
    setCartTotal(0);
  };

  return (
    <CartCtx.Provider
      value={{
        cartItemArr: cartItemsArr,
        setCartItemArr: setCartItemsArr,
        onAddItem: onAddItem,
        cartQuantity: cartQuantity,
        setCartQuantity: setCartQuantity,
        cartTotal: cartTotal,
        setCartTotal: setCartTotal,
        onSubtractItemQuantity: onSubtractItemQuantity,
        onReset: onReset,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
