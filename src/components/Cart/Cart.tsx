import React, { useContext } from "react";
import { CartCtx } from "../../store/cart-ctx";
import { UiCtx } from "../../store/ui-ctx";
import CartList from "../CartList/CartList";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartMgr = useContext(CartCtx);
  const uiMgr = useContext(UiCtx);

  const closeCartModalHandler = () => {
    uiMgr.setShowModal(false);
  };

  const openCheckOutHandler = () => {
    uiMgr.setIsCheckingOut(true);
  };

  return (
    <React.Fragment>
      <div className={classes.div}>
        <h1 className={classes.h1}>MONSTERA</h1>
        <CartList />
        <p className={classes.total}>
          Total:<span>${cartMgr.cartTotal}</span>
        </p>
        {cartMgr.cartTotal !== 0 && (
          <button onClick={openCheckOutHandler} className={classes.btn}>
            Check out
          </button>
        )}
        <button onClick={closeCartModalHandler} className={classes.btn}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
