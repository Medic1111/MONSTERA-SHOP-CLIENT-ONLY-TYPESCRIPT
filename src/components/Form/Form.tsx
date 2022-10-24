import { useState, useContext } from "react";
import { CartCtx } from "../../store/cart-ctx";
import { UiCtx } from "../../store/ui-ctx";
import classes from "./Form.module.css";

interface Props {
  id: string;
  name: string;
  price: number;
  src: string;
}

const Form: React.FC<Props> = ({ id, name, price, src }) => {
  const cartMgr = useContext(CartCtx);
  const uiMgr = useContext(UiCtx);

  const [userInput, setUserInput] = useState(1);

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newItem = {
      id,
      name,
      price,
      quantity: Number(userInput),
      src,
    };

    cartMgr.onAddItem(newItem);
    uiMgr.setShowModal(true);

    setUserInput(1);
  };

  return (
    <form className={classes.form}>
      <input
        onChange={(e) => setUserInput(Number(e.target.value))}
        id="quantity"
        name="quantity"
        value={userInput}
        className={classes.input}
        type="number"
        placeholder="Qty"
      />
      <button onClick={addToCartHandler} className={classes.btn}>
        ADD
      </button>
    </form>
  );
};

export default Form;
