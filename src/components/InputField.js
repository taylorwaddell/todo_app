import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/InputField.scss";

import tagOptions from "./_tagOptions";

function InputField(props) {
  return (
    <label htmlFor={props.fieldName}>
      {props.inputType === "full-name" && (
        <input
          className="custom-input"
          type="text"
          placeholder="Full Name"
          name={props.fieldName}
        ></input>
      )}
      {props.inputType === "date" && (
        <input
          className="custom-input"
          type="date"
          name={props.fieldName}
        ></input>
      )}
      {props.inputType === "link" && (
        <input
          className="custom-input"
          type="url"
          placeholder="dabomb.com"
          name={props.fieldName}
        ></input>
      )}
      {props.inputType === "tag" && (
        <select className="custom-input">
          {tagOptions.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      )}
    </label>
  );
}

InputField.propTypes = {
  inputType: PropTypes.oneOf(["full-name", "date", "link", "tag"]),
  fieldName: PropTypes.string,
};

export default InputField;
