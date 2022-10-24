import classes from "./Confirmation.module.css";
import { useContext } from "react";
import { UiCtx } from "../../store/ui-ctx";
import { CartCtx } from "../../store/cart-ctx";

const Confirmation = () => {
  const uiMgr = useContext(UiCtx);
  const cartMgr = useContext(CartCtx);

  const closeCheckOutHandler = () => {
    uiMgr.onReset();
    cartMgr.onReset();
  };

  return (
    <div className={classes.div}>
      <h2 className={classes.h2}>"PAYMENT PROCESSED. THANK YOU."</h2>
      <img
        className={classes.img}
        src="https://raw.githubusercontent.com/Medic1111/MONSTERA-SHOP-MERN-STRIPE/main/client/src/assets/transparent.png"
      />
      <button onClick={closeCheckOutHandler} className={classes.btn}>
        CLOSE
      </button>
    </div>
  );
};

export default Confirmation;
