import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/TaskPopUp.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import InputField from "./InputField";
import Button from "./Button";

function TaskPopUp({ handleClose, isEdit = false }) {
  // const [formFields, setFormFields] = useState({});
  // Create controlled form to allow disabling of submit
  //    if there is no task title.
  return (
    <>
      <div className="popUpBackground">
        <div className="addTask-container">
          <div className="addTask-topBar">
            <h1>{isEdit ? "Edit" : "Add"} Task</h1>
            <div
              className="close-window"
              onClick={handleClose}
            >
              <AiFillCloseCircle />
            </div>
          </div>
          <div className="addTask-inputContainer">
            <InputField inputType="full-name" fieldName="name" placeHolder="task name" />
            <InputField inputType="link" fieldName="link" placeHolder="task link" />
            <InputField inputType="date" fieldName="date" />
            <InputField inputType="tag" fieldName="tag" />
            <Button
              btnText="Add Task"
              btnType="submit"
              classes="bg-success text-dark br-round"
            />
          </div>
        </div>
      </div>
    </>
  );
}

TaskPopUp.propTypes = {
  handleClose: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default TaskPopUp;
