import classes from "./Header.module.css";
import { useContext } from "react";
import { CartCtx } from "../../store/cart-ctx";
import { UiCtx } from "../../store/ui-ctx";

const Header: React.FC = () => {
  const cartMgr = useContext(CartCtx);
  const uiCtx = useContext(UiCtx);

  const openCartHandler = () => {
    uiCtx.setShowModal(true);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>MONSTERA</h1>
      <button onClick={openCartHandler} className={classes.cartBtn}>
        CART <span className={classes.span}>{cartMgr.cartQuantity}</span>
      </button>
    </header>
  );
};

export default Header;
