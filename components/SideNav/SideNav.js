import React from "react";
import { Text, NavMenu } from "@components";
import { ClerkieIcon } from "@icons";
import stylesGlobal from "@styles/globals.module.css";
import styles from "./SideNav.module.css";

const SideNav = () => (
  <div className={styles.container}>
    <div className={styles.title_container}>
      <ClerkieIcon />
      <Text variant="h3" color="white" className={stylesGlobal.m0}>
        Clerkie Challenge
      </Text>
    </div>
    <NavMenu />
  </div>
);

export default SideNav;
