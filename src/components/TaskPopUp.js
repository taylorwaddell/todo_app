import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/TaskPopUp.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import InputField from "./InputField";

function TaskPopUp({ handleClose, isEdit=false }) {
  return (
    <>
      <div className="addTask-container">
        <div className="addTask-topBar">
          <h1>{isEdit ? "Edit" : "Add"} Task</h1>
          <AiFillCloseCircle />
        </div>
        <div className="addTask-inputContainer">
          <InputField inputType="full-name" fieldName="name" />
          <InputField inputType="link" fieldName="link" />
          <InputField inputType="date" fieldName="date" />
          <InputField inputType="tag" fieldName="tag" />
        </div>
      </div>
    </>
  );
}

TaskPopUp.propTypes = {
  handleClose: PropTypes.func,
  isEdit: PropTypes.bool,
}

export default TaskPopUp;
