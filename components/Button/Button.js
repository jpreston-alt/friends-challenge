import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  variant,
  disabled,
  children,
  onClick,
  className,
  type,
  Icon,
}) => {
  let classNames = styles[variant];
  if (className) classNames += ` ${className}`;

  return (
    <button
      disabled={disabled}
      className={classNames}
      onClick={onClick}
      type={type}
    >
      {Icon && <Icon className={styles.icon} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outlined", "text"]),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
  Icon: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
  className: null,
  type: "button",
  Icon: null,
  children: null,
};

export default Button;
