//REACT DEPENDENCIES
import React, { useState } from "react";
// DEPENDENCIES
import "../assets/scss/pages/Layout.scss";
// COMPONENTS
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import TaskPopUp from "../components/TaskPopUp";
import SideBar from "../components/SideBar";

function Layout() {
  //CREATING NEW TASK
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (e) =>
    setTasks((crrntTasks) => [
      ...crrntTasks,
      {
        id: formFields.id,
        title: formFields.title,
        link: formFields.link,
        date: formFields.date,
        tag: formFields.tag,
        isComplete: false,
      },
    ]);

  //EMPTY TASK FORM
  const initialState = {
    id: Math.floor(Math.random() * 101),
    title: "",
    link: "",
    date: "",
    tag: "",
    isComplete: false,
  };

  //FIND TASK FUNCTION
  const findTaskIndex = (taskID, list) => list.findIndex(obj => obj.id === parseInt(taskID));

  //CONTROLLED FORM INPUT
  const [formFields, setFormFields] = useState({ ...initialState });

  //FORM VALIDATION ERROR STATE
  const [hasFormError, setHasFormError] = useState(false);

  //OPEN TASK POP UP
  const [taskPopIsOpen, setTaskPopIsOpen] = useState(false);
  const handleAddClick = (e) => {
    setTaskPopIsOpen((taskPopIsOpen) => !taskPopIsOpen);
  };
  return (
    <div className="layout-container">
      <div className="main-content">
        <SideBar btn1={<AddTaskButton handleClick={handleAddClick} />} />
        <TaskList taskList={tasks} setTasks={setTasks} findTaskIndex={findTaskIndex} />
      </div>
      {taskPopIsOpen && (
        <TaskPopUp
          handleClose={handleAddClick}
          setFormFields={setFormFields}
          formState={formFields}
          handleSubmit={handleSubmit}
          hasFormError={hasFormError}
          setHasFormError={setHasFormError}
          initialFormState={initialState}
        />
      )}
      {/* {{!taskPopIsOpen && <AddTaskButton handleClick={handleAddClick} />}} */}
    </div>
  );
}

export default Layout;
