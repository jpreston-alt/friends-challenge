import React from "react";
import PropTypes from "prop-types";
import { Text } from "@components";
import styles from "./Chip.module.css";

const Chip = ({ text, color }) => (
  <Text variant="chip" className={styles[color]}>
    {text}
  </Text>
);

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["blue", "green"]).isRequired,
};

export default Chip;
