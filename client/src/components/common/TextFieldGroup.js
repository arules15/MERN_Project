import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

//uniform template for input fields

const TextFieldGroup = ({
  //function that takes in name, placeholder, value..... and returns an input field given the information
  //This will save time when creating input fields since we will have alot of 'em in this projct
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error //so class will be form-control unless error exists, then
          //the class will be is-invalid which enables bootstrap to do form validation (highlight imput box in red)
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string.isRequired
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
