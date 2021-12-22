import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/InputField.scss";

import tagOptions from "./_tagOptions";

function InputField({
  inputType = "",
  fieldName = "",
  placeHolder = "",
  value = "",
  isRequired = true,
  isFocus = false,
  changeHandler,
}) {
  const givenPlaceHolder = placeHolder
    ? `${placeHolder}`
    : inputType === "text"
    ? "Text"
    : inputType === "link" && "dabomb.com";
  const checkIfRequired = isRequired ? "required" : "";
  const checkIfFocus = isFocus ? "autoFocus" : "";

  //RENDER
  return (
    <label htmlFor={fieldName}>
      {inputType === "text" && (
        <input
          className="custom-input"
          type="text"
          placeholder={givenPlaceHolder}
          name={fieldName}
          value={value}
          onChange={(e) => changeHandler(e)}
          required={checkIfRequired}
          autoFocus={checkIfFocus}
        ></input>
      )}
      {inputType === "date" && (
        <input
          className="custom-input"
          type="date"
          name={fieldName}
          value={value}
          onChange={changeHandler}
          autoFocus={checkIfFocus}
        ></input>
      )}
      {inputType === "link" && (
        <input
          className="custom-input"
          type="url"
          placeholder={givenPlaceHolder}
          name={fieldName}
          value={value}
          onChange={changeHandler}
          required={checkIfRequired}
          autoFocus={checkIfFocus}
        ></input>
      )}
      {inputType === "tag" && (
        <select
          className="custom-input"
          name={fieldName}
          value={value}
          autoFocus={checkIfFocus}
          onChange={changeHandler}
          required={checkIfRequired}
        >
          {tagOptions.map((option, i) => (
            <option key={i+1} value={option}>{option}</option>
          ))}
        </select>
      )}
    </label>
  );
}

InputField.propTypes = {
  inputType: PropTypes.oneOf(["text", "date", "link", "tag"]),
  fieldName: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  changeHandler: PropTypes.func,
};

//placeHolder = "", value = "", isRequired = true, changeHandler

export default InputField;
