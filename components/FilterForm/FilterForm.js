import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Text, Checkbox } from "@components";
import { CloseIcon } from "@icons";
import { friendLevelsArr } from "@mocks/friend-levels";
import styles from "./FilterForm.module.css";

const FilterForm = ({ toggleShowForm }) => {
  const [filters, setFilters] = useState([]);

  const onChange = (event) => {
    const { value } = event.target;
    let newState = [...filters];
    if (filters.includes(value)) {
      newState = newState.filter((el) => el !== value);
    } else {
      newState.push(value);
    }

    setFilters(newState);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(filters);
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
              onChange={onChange}
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

FilterForm.propTypes = {};

FilterForm.defaultProps = {};

export default FilterForm;
