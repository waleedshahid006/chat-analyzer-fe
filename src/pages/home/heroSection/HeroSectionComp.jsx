import React from "react";
import styles from "./HeroSection.module.css";

const HeroSectionComp = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div style={{ display: "flex" }}>
            <h1> Who is more </h1>
            <h1> interested </h1>
          </div>
          <div >
            <p>
            Learn about the state of your relationship from your SoMe chats.
            </p>
            <p>
            Learn about the state of your relationship from your SoMe chats.
            </p>
            <p>
            Learn about the state of your relationship from your SoMe chats.
            </p>
            <p>
            Learn about the state of your relationship from your SoMe chats.
            </p>
            <p>
            Learn about the state of your relationship from your SoMe chats.
            </p>
          </div>
          <div>
            {/* img */}
          </div>
        </div>

      </div>

      <div className={styles.rightContent}></div>
    </div>
  );
};

export default HeroSectionComp;
