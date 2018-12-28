import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

//uniform template for input fields

const SelectListGroup = ({
  //function that takes in name, placeholder, value..... and returns an input field given the information
  //This will save time when creating input fields since we will have alot of 'em in this projct
  name,
  value,
  error,
  info,
  options,
  onChange
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error //so class will be form-control unless error exists, then
          //the class will be is-invalid which enables bootstrap to do form validation (highlight imput box in red)
        })}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
