import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/TaskPopUp.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import InputField from "./InputField";
import Button from "./Button";

function TaskPopUp({ handleClose, isEdit = false }) {
  const initialState = {
    title: "",
    link: "",
    date: "",
    tag: "",
  };

  const [formFields, setFormFields] = useState({ ...initialState });
  const handleFormChange =
    ({ target }) => 
    setFormFields({ ...formFields, [target.name]: target.value });
  return (
    <>
      <div className="popUpBackground">
        <div className="addTask-container">
          <div className="addTask-topBar">
            <div className="close-window" onClick={handleClose}>
              <AiFillCloseCircle className="text-danger AiFillCloseCircle" />
            </div>
          </div>
          <div className="addTask-inputContainer">
            <h1>{isEdit ? "Edit" : "Add"} Task</h1>
            <InputField
              inputType="text"
              fieldName="title"
              placeHolder="task name"
              value={formFields.title}
              isRequired={true}
              changeHandler={handleFormChange}
            />
            <InputField
              inputType="link"
              fieldName="link"
              placeHolder="task link"
              value={formFields.link}
              isRequired={true}
              changeHandler={handleFormChange}
            />
            <InputField
              inputType="date"
              fieldName="date"
              value={formFields.date}
              isRequired={true}
              changeHandler={handleFormChange}
            />
            <InputField
              inputType="tag"
              fieldName="tag"
              value={formFields.tag}
              isRequired={true}
              changeHandler={handleFormChange}
            />
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
