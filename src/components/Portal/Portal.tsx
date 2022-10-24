import React from "react";
import { createPortal } from "react-dom";
import classes from "./Portal.module.css";

const root = document.getElementById("root") as HTMLElement;

const PortalWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <article className={classes.article}>{children}</article>;
};

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      {createPortal(<PortalWrapper>{children}</PortalWrapper>, root)}
    </React.Fragment>
  );
};

export default Portal;
