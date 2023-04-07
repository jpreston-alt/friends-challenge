import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ variant, disabled, children, onClick }) => {
  const className = styles[variant];

  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outlined", "text"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
};

export default Button;
