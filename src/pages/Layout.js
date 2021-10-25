//REACT DEPENDENCIES
import React, { useState } from "react";
// DEPENDENCIES
import "../assets/scss/pages/Layout.scss";
import { sampleTaskList } from "../sample-data/sampleTaskList";
// COMPONENTS
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import TaskPopUp from "../components/TaskPopUp";
import SideBar from "../components/SideBar";

function Layout() {
  //CREATING NEW TASK
  const [tasks, setTasks] = useState([...sampleTaskList]);
  const handleSubmit = (e) => setTasks([...tasks, formFields]);

  //EMPTY TASK FORM
  const initialState = {
    key: tasks.length + 1,
    title: "",
    link: "",
    date: "",
    tag: "",
  };

  //CONTROLLED FORM INPUT
  const [formFields, setFormFields] = useState({ ...initialState });

  //OPEN TASK POP UP
  const [taskPopIsOpen, setTaskPopIsOpen] = useState(false);
  const handleAddClick = (e) => {
    setTaskPopIsOpen((taskPopIsOpen) => !taskPopIsOpen);
  };
  return (
    <div className="layout-container">
      <div className="main-content">
        <SideBar btn1={<AddTaskButton handleClick={handleAddClick} />} />
        <TaskList taskList={tasks} />
      </div>
      {taskPopIsOpen && (
        <TaskPopUp
          handleClose={handleAddClick}
          setFormFields={setFormFields}
          formState={formFields}
          handleSubmit={handleSubmit}
        />
      )}
      {/* {{!taskPopIsOpen && <AddTaskButton handleClick={handleAddClick} />}} */}
    </div>
  );
}

export default Layout;
