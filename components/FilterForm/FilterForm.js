import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Button, Text, Checkbox } from "@components";
import { CloseIcon } from "@icons";
import { friendLevelsArr } from "@mocks/friend-levels";
import styles from "./FilterForm.module.css";

const FilterForm = ({ toggleShowForm, addFilters }) => {
  const checkboxRefs = {
    1: useRef(),
    2: useRef(),
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const checkedLevels = friendLevelsArr.filter(
      (f) => checkboxRefs[f.level].current.checked === true
    );
    const filters = checkedLevels.map((l) => l.level);
    addFilters(filters);
    toggleShowForm();
  };

  return (
    <div className={styles.container} data-popover="up">
      <div className={styles.title_container}>
        <Button variant="text">Clear All</Button>
        <Text variant="h3" className={styles.title}>
          Filter
        </Text>
        <Button variant="text" onClick={toggleShowForm}>
          <CloseIcon />
        </Button>
      </div>
      <Text variant="h5" color="secondary" className={styles.form_title}>
        Friend Status
      </Text>
      <div className={styles.form_container}>
        <form onSubmit={onSubmit}>
          {friendLevelsArr.map((el) => (
            <Checkbox
              key={el.text}
              text={el.text}
              value={el.level}
              checkboxRef={checkboxRefs[el.level]}
            />
          ))}
          <Button className={styles.submit_btn} type="submit">
            Apply
          </Button>
        </form>
      </div>
    </div>
  );
};

FilterForm.propTypes = {
  toggleShowForm: PropTypes.func.isRequired,
  addFilters: PropTypes.func.isRequired,
};

export default FilterForm;
