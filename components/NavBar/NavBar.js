import React from "react";
import PropTypes from "prop-types";
import { Text } from "@components";
import styles from "./NavBar.module.css";

const NavBar = ({ pageName }) => (
  <div className={styles.container}>
    <Text variant="h2">{pageName}</Text>
  </div>
);

NavBar.propTypes = { pageName: PropTypes.string.isRequired };

export default NavBar;
