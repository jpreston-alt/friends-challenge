import React from "react";
import styles from "./Text.module.css";
import PropTypes from "prop-types";

const tagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  label: "label",
  chip: "span",
};

const Text = ({ variant, color, children }) => {
  const Tag = tagMap[variant];
  const variantClass = styles[variant];
  const colorClass = styles[`color-${color}`];

  return <Tag className={`${variantClass} ${colorClass}`}>{children}</Tag>;
};

Text.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "body",
    "label",
    "chip",
  ]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "disabled",
    "white",
    "blue",
    "green",
  ]),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  variant: "body",
  color: "primary",
};

export default Text;
