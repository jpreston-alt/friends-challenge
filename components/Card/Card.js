import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ children, className }) => {
  let classNames = styles.container;
  if (className) classNames += ` ${className}`;

  return <div className={classNames}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: null,
};

export default Card;
