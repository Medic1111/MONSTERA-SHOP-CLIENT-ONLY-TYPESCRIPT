import classes from "./Hero.module.css";
const Hero: React.FC = () => {
  return (
    <img
      className={classes.heroPic}
      src={
        "https://raw.githubusercontent.com/Medic1111/MONSTERA-SHOP-MERN-STRIPE/main/client/src/assets/hero.jpg"
      }
    />
  );
};

export default Hero;
