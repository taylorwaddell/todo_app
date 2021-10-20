import React from "react";
import "../assets/scss/components/AddTaskButton.scss";
import { MdAddCircle } from "react-icons/md";
import { PropTypes } from "prop-types";

const AddTaskButton = ({ handleClick }) => (
  <span className="addTaskButton" onClick={handleClick}>
    <MdAddCircle size={42} />
  </span>
);

AddTaskButton.propTypes = {
  handleClick: PropTypes.func,
};

export default AddTaskButton;
