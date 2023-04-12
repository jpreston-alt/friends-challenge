import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FilterForm } from "@components";
import { FilterIcon } from "@icons";
import { useClickAway } from "@hooks";
import styles from "./FilterFormContainer.module.css";

const FilterFormContainer = ({
  addFilters,
  clearFilters,
  disableClear,
  filters,
}) => {
  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => setShowForm(!showForm);
  const dropdownEl = useClickAway({ eventHandler: toggleShowForm });
  const filtersSelected = filters.length > 0;

  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        <Button
          variant="outlined"
          onClick={toggleShowForm}
          Icon={FilterIcon}
          className={styles.filter_btn}
          dataArrtibute={{ ["data-filters"]: filtersSelected }}
        >
          {filtersSelected > 0 && filters.length}
        </Button>
        <hr className={styles.separator}></hr>
        <Button variant="text" onClick={clearFilters} disabled={disableClear}>
          Clear All
        </Button>
      </div>
      {showForm && (
        <div ref={dropdownEl}>
          <FilterForm
            toggleShowForm={toggleShowForm}
            addFilters={addFilters}
            filters={filters}
          />
        </div>
      )}
    </div>
  );
};

FilterFormContainer.propTypes = {
  addFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  disableClear: PropTypes.bool.isRequired,
  filters: PropTypes.arrayOf(PropTypes.number),
};

export default FilterFormContainer;
