import React from "react";
import PropTypes from "prop-types";
import { Text, ClerkieIcon } from "@components";
import stylesGlobal from "@styles/globals.module.css";
import styles from "./SideNav.module.css";

const SideNav = ({ pageName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <ClerkieIcon />
        <Text variant="h3" color="white" className={stylesGlobal.m0}>
          Clerkie Challenge
        </Text>
      </div>
    </div>
  );
};

SideNav.propTypes = { pageName: PropTypes.string.isRequired };

export default SideNav;
