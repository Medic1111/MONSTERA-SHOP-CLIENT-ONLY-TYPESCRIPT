import classes from "./CartList.module.css";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartCtx } from "../../store/cart-ctx";

const CartList: React.FC = () => {
  const cartMgr = useContext(CartCtx);

  return (
    <ul className={classes.ul}>
      {cartMgr.cartItemArr.map((obj, index) => {
        return (
          <CartItem
            key={`cartItem_${index}`}
            id={obj.id}
            name={obj.name}
            price={obj.price}
            quantity={obj.quantity}
            src={obj.src}
          />
        );
      })}
    </ul>
  );
};

export default CartList;
