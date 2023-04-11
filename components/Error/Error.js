import React from "react";
import PropTypes from "prop-types";
import { Text } from "@components";
import styles from "./Error.module.css";
import stylesGlobal from "@styles/globals.module.css";

const Error = ({ message }) => (
  <div className={stylesGlobal.center}>
    <Text className={styles.text}>{message}</Text>
  </div>
);

Error.propTypes = { message: PropTypes.string };

Error.defaultProps = { message: "An error occured" };

export default Error;
