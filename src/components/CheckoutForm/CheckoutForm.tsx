import classes from "./CheckoutForm.module.css";

import React, { useState, useContext } from "react";
import { CartCtx } from "../../store/cart-ctx";
import { UiCtx } from "../../store/ui-ctx";

const CheckOutForm = () => {
  const cartMrg = useContext(CartCtx);
  const uiMgr = useContext(UiCtx);
  const [formComplete, setFormComplete] = useState(true);

  // NAME SPLIT BECAUSE OF STRIPE

  const [billingInfo, setBillingInfo] = useState({
    name: "",
  });

  const onBillingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBillingInfo((prev) => {
      return { ...prev, [name]: value };
    });
    setFormComplete(true);
  };

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const onShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShippingInfo((prev) => {
      return { ...prev, [name]: value };
    });
    setFormComplete(true);
  };

  const closeCheckOutHandler = () => {
    uiMgr.setIsCheckingOut(false);
  };

  const payHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (
      billingInfo.name.length > 0 &&
      shippingInfo.address.length > 0 &&
      shippingInfo.city.length > 0 &&
      shippingInfo.state.length > 0 &&
      shippingInfo.zip.length > 0
    ) {
      setFormComplete(true);
      uiMgr.setHasPaid(true);
    } else {
      setFormComplete(false);
    }
  };

  return (
    <form className={classes.form}>
      <p className={classes.pTotal}>
        Total: $<span>{cartMrg.cartTotal}</span>
      </p>
      {formComplete || (
        <p className={classes.pTotal}>Please, completed all fields!</p>
      )}

      <input
        className={classes.cardNumber}
        type="text"
        placeholder="Name"
        name="name"
        value={billingInfo.name}
        onChange={onBillingChange}
      />
      <input
        className={classes.cardNumber}
        type="text"
        placeholder="Shipping address"
        name="address"
        value={shippingInfo.address}
        onChange={onShippingChange}
      />
      <input
        className={classes.cardNumber}
        type="text"
        placeholder="City"
        name="city"
        value={shippingInfo.city}
        onChange={onShippingChange}
      />

      <input
        className={classes.cardNumber}
        type="text"
        placeholder="State"
        name="state"
        value={shippingInfo.state}
        onChange={onShippingChange}
      />
      <input
        className={classes.cardNumber}
        type="text"
        placeholder="Zip"
        name="zip"
        value={shippingInfo.zip}
        onChange={onShippingChange}
      />
      <div className={classes.btnBox}>
        <button onClick={payHandler} className={classes.btn}>
          Submit payment
        </button>
        <button onClick={closeCheckOutHandler} className={classes.btn}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
