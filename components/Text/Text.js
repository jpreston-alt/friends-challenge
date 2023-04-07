import React from "react";
import styles from "./Text.module.css";

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

const Text = ({ variant = "body", color = "primary", children }) => {
  const Tag = tagMap[variant];
  const variantClass = styles[variant];
  const colorClass = styles[`color-${color}`];

  return <Tag className={`${variantClass} ${colorClass}`}>{children}</Tag>;
};

export default Text;
