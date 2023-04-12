import { useState } from "react";

// hook to handle logic for filter form
const useFilterForm = ({ toggleShowForm, addFilters, filters }) => {
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

  return { disableClear, handleClear, onChange, onSubmit, selected };
};

export default useFilterForm;
