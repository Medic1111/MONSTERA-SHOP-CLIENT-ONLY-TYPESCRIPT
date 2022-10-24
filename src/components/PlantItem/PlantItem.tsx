import Form from "../Form/Form";
import classes from "./PlantItem.module.css";

interface Props {
  id: string;
  src: string;
  name: string;
  description: string;
  price: number;
}

const PlantItem: React.FC<Props> = ({ id, src, name, description, price }) => {
  return (
    <li id={id} className={classes.li}>
      <img className={classes.plantPic} src={src} />
      <div className={classes.txtBox}>
        <h2 className={classes.h2}>{name}</h2>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>${price}</p>
        <Form id={id} name={name} price={price} src={src} />
      </div>
    </li>
  );
};

export default PlantItem;
