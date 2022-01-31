/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChanged = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChanged} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};

export default AddCategory;
