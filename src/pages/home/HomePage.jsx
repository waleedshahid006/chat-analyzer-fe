import React from 'react';
import HeroSectionComp from './heroSection/HeroSectionComp';
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <HeroSectionComp />
    </div>
  )
}

export default HomePage
