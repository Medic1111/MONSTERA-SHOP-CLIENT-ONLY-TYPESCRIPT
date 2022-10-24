import React from "react";
import classes from "./PlantListWrapper.module.css";

const PlantListWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main>
      <ul className={classes.ul}>{children}</ul>
    </main>
  );
};

export default PlantListWrapper;
