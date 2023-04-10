import React from "react";
import PropTypes from "prop-types";
import styles from "./Loader.module.css";

const Loader = ({ height, width }) => {
  return <div className={styles.container} style={{ height, width }} />;
};

Loader.propTypes = {
  height: PropTypes.oneOf(["sm", "lg"]),
  width: PropTypes.string,
};

Loader.defaultProps = { height: "sm", width: "100%" };

export default Loader;
