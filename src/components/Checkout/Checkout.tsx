import CheckOutForm from "../CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import { useContext } from "react";
import { UiCtx } from "../../store/ui-ctx";
import Confirmation from "../Confirmation/Confirmation";

const Checkout: React.FC = () => {
  const uiMgr = useContext(UiCtx);
  return <>{!uiMgr.hasPaid ? <CheckOutForm /> : <Confirmation />}</>;
};

export default Checkout;
