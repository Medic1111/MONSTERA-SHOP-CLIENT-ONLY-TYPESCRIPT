import Cart from "../Cart/Cart";
import Portal from "../Portal/Portal";
import { useContext } from "react";
import { UiCtx } from "../../store/ui-ctx";
import Checkout from "../Checkout/Checkout";

const Modal: React.FC = () => {
  const uiMgr = useContext(UiCtx);
  return <Portal>{!uiMgr.isCheckingOut ? <Cart /> : <Checkout />}</Portal>;
};

export default Modal;
