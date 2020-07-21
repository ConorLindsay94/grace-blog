import React from "react";
import Img from "gatsby-image";

import styles from "./hero.module.css";

export default ({ data }) => (
  <div className={styles.hero}>
    <h1 className={styles.heroHeadline}>
      <span className={styles.heroHeadlineText}>Home</span>
    </h1>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
  </div>
);
