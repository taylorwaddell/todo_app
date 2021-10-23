import React, { useState } from "react";
import "../assets/scss/pages/Layout.scss";
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import TaskPopUp from "../components/TaskPopUp";
import { sampleTaskList } from "../sample-data/sampleTaskList";

function Layout() {
  const initialState = {
    title: "",
    link: "",
    date: "",
    tag: "",
  };
  const [formFields, setFormFields] = useState({ ...initialState });
  const handleFormChange = ({ target }) => {
    setFormFields({ ...formFields, [target.name]: target.value });
  };

  const [tasks, setTasks] = useState([...sampleTaskList]);
  const handleSubmit = (e) => {
    console.log(formFields);
    setTasks([...tasks, formFields]);
  };

  const [taskPopIsOpen, setTaskPopIsOpen] = useState(false);
  const handleAddClick = (e) => {
    setTaskPopIsOpen((taskPopIsOpen) => !taskPopIsOpen);
  };
  return (
    <div className="layout-container">
      <TaskList isCompleted={false} taskList={tasks} />
      {taskPopIsOpen && (
        <TaskPopUp
          handleClose={handleAddClick}
          handleFormChange={handleFormChange}
          formState={formFields}
          handleSubmit={handleSubmit}
        />
      )}
      {!taskPopIsOpen && <AddTaskButton handleClick={handleAddClick} />}
    </div>
  );
}

export default Layout;
