/** @format */

import React, { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChanged = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChanged} />
    </form>
  );
};

export default AddCategory;
