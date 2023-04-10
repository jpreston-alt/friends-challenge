import React from "react";
import { Card, Loader } from "@components";
import styles from "./LoaderCard.module.css";

const LoaderCard = () => (
  <Card>
    <div className={styles.container}>
      <div className={styles.row}>
        <Loader size="lg" width="28%" />
        <Loader size="lg" width="10%" gradientDirection="rl" />
      </div>
      <div className={styles.row}>
        <Loader width="33%" />
        <Loader width="15%" gradientDirection="rl" />
      </div>
    </div>
  </Card>
);

export default LoaderCard;
