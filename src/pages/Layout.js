import React, { useState } from "react";
import "../assets/scss/pages/Layout.scss";
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import TaskPopUp from "../components/TaskPopUp";
import { sampleTaskList } from "../sample-data/tasks";

function Layout() {
  const [taskPopIsOpen, setTaskPopIsOpen] = useState(false);
  const handleAddClick = (e) => setTaskPopIsOpen((taskPopIsOpen) => !taskPopIsOpen);
  return (
    <div className="layout-container">
      <TaskList isCompleted={false} taskList={sampleTaskList} />
      {taskPopIsOpen && <TaskPopUp />}
      {!taskPopIsOpen && <AddTaskButton handleClick={handleAddClick} />}
    </div>
  );
}

export default Layout;
