import React from "react";
import PropTypes from "prop-types";
import { Text } from "@components";
import styles from "./Checkbox.module.css";

const Checkbox = ({ text, value, checked, onChange }) => (
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
      checked={checked}
      onChange={onChange}
    />
  </div>
);
Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
