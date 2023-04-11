import React from "react";
import styles from "@styles/globals.module.css";

const HomeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon_light}
  >
    <rect
      x="4.43984"
      y="4.43984"
      width="15.12"
      height="15.12"
      rx="1.32"
      strokeWidth="1.2"
    />
    <path d="M5 10.75L19 10.75" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M9.75 11L9.75 19" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default HomeIcon;
