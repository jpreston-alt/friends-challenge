import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FilterForm } from "@components";
import { FilterIcon } from "@icons";
import styles from "./FilterFormContainer.module.css";

const FilterFormContainer = ({ addFilters, clearFilters, disableClear }) => {
  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => setShowForm(!showForm);

  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        <Button variant="outlined" onClick={toggleShowForm}>
          <FilterIcon />
        </Button>
        <hr className={styles.separator}></hr>
        <Button variant="text" onClick={clearFilters} disabled={disableClear}>
          Clear All
        </Button>
      </div>
      {showForm ? (
        <FilterForm
          toggleShowForm={toggleShowForm}
          addFilters={addFilters}
          clearFilters={clearFilters}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

FilterFormContainer.propTypes = {
  addFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  disableClear: PropTypes.bool.isRequired,
};

export default FilterFormContainer;