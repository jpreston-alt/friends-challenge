import React from "react";
import PropTypes from "prop-types";
import { Text } from "@components";
import styles from "./Checkbox.module.css";

const Checkbox = ({ text, value, checkboxRef }) => (
  <div className={styles.container}>
    <label htmlFor="vehicle1">
      <Text variant="label" className={styles.label}>
        {text}
      </Text>
    </label>
    <input
      type="checkbox"
      id={text}
      name={text}
      value={value}
      className={styles.checkbox}
      ref={checkboxRef}
    />
  </div>
);
Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checkboxRef: PropTypes.func.isRequired,
};

export default Checkbox;
