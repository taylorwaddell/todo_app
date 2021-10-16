import React from "react";
import "../assets/scss/components/TaskPopUp";

function TaskPopUp({ taskType = "Add" }) {
  return (
    <>
      <div className="addTask-container">
          <h1>{taskType} Task</h1>
          <div className="addTask-inputContainer">
              {/**
               * task name (req)
               * link
               * date
               * tag
               * submit
               */}
          </div>
      </div>
    </>
  );
}

export default TaskPopUp;
