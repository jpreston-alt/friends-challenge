import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Text, Checkbox } from "@components";
import { CloseIcon } from "@icons";
import { friendLevelsArr } from "@mocks/friend-levels";
import styles from "./FilterForm.module.css";

const FilterForm = ({ toggleShowForm, addFilters, filters }) => {
  const [selected, setSelected] = useState(filters);
  const disableClear = selected.length === 0;
  const handleClear = () => setSelected([]);

  const onChange = (event) => {
    const value = Number(event.target.value);
    let tempSelected = [...selected];
    if (selected.includes(value)) {
      const index = tempSelected.indexOf(value);
      tempSelected.splice(index, 1);
    } else {
      tempSelected.push(value);
    }

    setSelected(tempSelected);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addFilters(selected);
    toggleShowForm();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <div className={styles.title_item_1}>
          <Button variant="text" onClick={handleClear} disabled={disableClear}>
            Clear All
          </Button>
        </div>
        <div className={styles.title_item_2}>
          <Text variant="h3">Filter</Text>
        </div>
        <div className={styles.title_item_3}>
          <Button variant="text" onClick={toggleShowForm}>
            <CloseIcon />
          </Button>
        </div>
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
  filters: PropTypes.arrayOf(PropTypes.number),
};

export default FilterForm;
