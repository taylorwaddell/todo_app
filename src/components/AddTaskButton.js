import React from "react";
import "../assets/scss/components/AddTaskButton.scss";
import { PropTypes } from "prop-types";

const AddTaskButton = ({ handleClick }) => (
  <span className="addTaskButton" onClick={handleClick}>
    +
  </span>
);

AddTaskButton.propTypes = {
  handleClick: PropTypes.func,
};

export default AddTaskButton;
