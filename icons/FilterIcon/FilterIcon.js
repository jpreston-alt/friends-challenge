import React from "react";
import PropTypes from "prop-types";
import styles from "@styles/globals.module.css";

const FilterIcon = ({ className }) => (
  <svg
    width="19"
    height="21"
    viewBox="0 0 19 21"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 3.5H18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="3" cy="3.5" r="2.25" strokeWidth="1.5" />
    <path
      d="M17 10.5H1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="3"
      cy="3"
      r="2.25"
      transform="matrix(-1 0 0 1 19 7.5)"
      strokeWidth="1.5"
    />
    <path
      d="M2 17.5H18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="3" cy="17.5" r="2.25" strokeWidth="1.5" />
  </svg>
);

FilterIcon.propTypes = {
  className: PropTypes.string,
};

FilterIcon.defaultProps = {
  className: styles.icon_dark,
};

export default FilterIcon;
