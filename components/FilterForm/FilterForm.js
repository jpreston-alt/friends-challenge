import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Text, Checkbox } from "@components";
import { CloseIcon } from "@icons";
import { friendLevelsArr } from "@mocks/friend-levels";
import styles from "./FilterForm.module.css";

const FilterForm = ({ toggleShowForm, addFilters }) => {
  const [selected, setSelected] = useState([]);
  const disableClear = selected.length === 0;
  const handleClear = () => setSelected([]);

  const onChange = (event) => {
    const value = Number(event.target.value);

    // TODO clean this up
    let tempSelected = [...selected];
    if (selected.includes(value)) {
      tempSelected = tempSelected.filter((el) => el !== value);
    } else {
      tempSelected.push(value);
    }

    setSelected([value]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addFilters(selected);
    toggleShowForm();
  };

  return (
    <div className={styles.container} data-popover="up">
      <div className={styles.title_container}>
        <Button variant="text" onClick={handleClear} disabled={disableClear}>
          Clear All
        </Button>
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
              checked={selected.includes(el.level)}
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

FilterForm.propTypes = {
  toggleShowForm: PropTypes.func.isRequired,
  addFilters: PropTypes.func.isRequired,
};

export default FilterForm;
