import React, { useContext } from "react";
import { CartItemType } from "../../models/cart-items";
import { CartCtx } from "../../store/cart-ctx";
import classes from "./CartItem.module.css";

const CartItem: React.FC<CartItemType> = ({
  id,
  name,
  price,
  quantity,
  src,
}) => {
  const cartMgr = useContext(CartCtx);

  const removeItemHandler = () => {
    cartMgr.setCartItemArr(cartMgr.cartItemArr.filter((obj) => obj.id !== id));
  };

  const subtractItemHandler = () => {
    cartMgr.onSubtractItemQuantity({ id, name, price, quantity, src });
  };

  return (
    <li id={id} className={classes.li}>
      <div className={classes.div}>
        <img className={classes.img} src={src} />
        <h3 className={classes.name}>{name}</h3>
      </div>

      <h3 className={classes.price}>
        ${price} <span className={classes.quantity}>x{quantity}</span>{" "}
        <button onClick={subtractItemHandler} className={classes.removeBtn}>
          ↓
        </button>
        <button onClick={removeItemHandler} className={classes.removeBtn}>
          X
        </button>
      </h3>
    </li>
  );
};

export default CartItem;
