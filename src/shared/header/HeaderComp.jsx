import React from "react";
import styles from "./Header.module.css";
import logo from "../../asset/header/logo.png";

const HeaderComp = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.rightContent}>
        <h2>
          Home
        </h2>
        <h2>
          About
        </h2>
        <h2>
          FAQS
        </h2>
        <h2>
          Privacy
        </h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
