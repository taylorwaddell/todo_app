import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/InputField.scss";

import tagOptions from "./_tagOptions";

function InputField({ inputType = "", fieldName = "", placeHolder = "" }) {
  const givenPlaceHolder = placeHolder
    ? `${placeHolder}`
    : inputType === "full-name"
    ? "Full Name"
    : inputType === "link" && "dabomb.com";
  return (
    <label htmlFor={fieldName}>
      {inputType === "full-name" && (
        <input
          className="custom-input"
          type="text"
          placeholder={givenPlaceHolder}
          name={fieldName}
        ></input>
      )}
      {inputType === "date" && (
        <input className="custom-input" type="date" name={fieldName}></input>
      )}
      {inputType === "link" && (
        <input
          className="custom-input"
          type="url"
          placeholder={givenPlaceHolder}
          name={fieldName}
        ></input>
      )}
      {inputType === "tag" && (
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
