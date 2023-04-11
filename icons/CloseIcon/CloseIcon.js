import React from "react";
import styles from "@styles/globals.module.css";

const CloseIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon_dark}
  >
    <path d="M1 1L10 10" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 1L1 10" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default CloseIcon;
