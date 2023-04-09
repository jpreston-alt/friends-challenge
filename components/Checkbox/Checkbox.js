import React from "react";
import PropTypes from "prop-types";
import { Text } from "@components";
import styles from "./Checkbox.module.css";

const Checkbox = ({ text, value, onChange }) => {
  return (
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
        onChange={onChange}
      />
    </div>
  );
};

Checkbox.propTypes = {};

Checkbox.defaultProps = {};

export default Checkbox;
