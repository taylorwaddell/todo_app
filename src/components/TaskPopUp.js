import React from "react";
import "../assets/scss/components/TaskPopUp.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import InputField from "./InputField";

function TaskPopUp({ isEdit = false }) {
  return (
    <>
      <div className="addTask-container">
        <h1>{isEdit ? "Edit" : "Add"} Task</h1>
        <AiFillCloseCircle />
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

export default TaskPopUp;
