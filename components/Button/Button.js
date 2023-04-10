import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ variant, disabled, children, onClick, className, type }) => {
  let classNames = styles[variant];
  if (className) classNames += ` ${className}`;

  return (
    <button disabled={disabled} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outlined", "text"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
  className: null,
  type: "button",
};

export default Button;
