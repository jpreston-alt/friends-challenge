import React from "react";
import PropTypes from "prop-types";
import styles from "./Loader.module.css";

const heightMap = {
  sm: "14px",
  lg: "18px",
};

const Loader = ({ size, width, gradientDirection }) => {
  const className = styles[`gradient-${gradientDirection}`];
  return (
    <span className={className} style={{ height: heightMap[size], width }} />
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  width: PropTypes.string,
  gradientDirection: PropTypes.oneOf(["lr", "rl"]),
};

Loader.defaultProps = { size: "sm", width: "100%", gradientDirection: "lr" };

export default Loader;
