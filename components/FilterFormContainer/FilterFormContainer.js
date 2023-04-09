import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FilterForm } from "@components";
import { FilterIcon } from "@icons";
import styles from "./FilterFormContainer.module.css";

const FilterFormContainer = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => setShowForm(!showForm);

  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        <Button variant="outlined" onClick={toggleShowForm}>
          <FilterIcon />
        </Button>
        <hr className={styles.separator}></hr>
        <Button variant="text">Clear All</Button>
      </div>
      {showForm ? <FilterForm toggleShowForm={toggleShowForm} /> : <></>}
    </div>
  );
};

FilterFormContainer.propTypes = {};

FilterFormContainer.defaultProps = {};

export default FilterFormContainer;
