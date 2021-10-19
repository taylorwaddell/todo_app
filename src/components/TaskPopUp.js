import React from "react";
import "../assets/scss/components/TaskPopUp";
import InputField from "./InputField";

function TaskPopUp({ taskType = "Add" }) {
  return (
    <>
      <div className="addTask-container">
        <h1>{taskType} Task</h1>
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
