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
  const handleSubmit = (e) => {
    formFields.title
      ? setTasks((crrntTasks) => [
          ...crrntTasks,
          {
            id: formFields.id,
            title: formFields.title,
            link: formFields.link,
            date: formFields.date,
            tag: formFields.tag,
            isComplete: false,
          },
        ])
      : e.preventDefault();
  };

  //EMPTY TASK FORM
  const initialState = {
    id: Math.floor(Math.random() * 101),
    title: "",
    link: "",
    date: "",
    tag: "",
    isComplete: false,
  };

  //DELETE FUNCTION
  const deleteTask = (taskID) => {
    setTasks(tasks.filter((el) => taskID !== el.id));
  };

  //CONTROLLED FORM INPUT
  const [formFields, setFormFields] = useState({ ...initialState });

  //FORM VALIDATION ERROR STATE
  const [hasFormError, setHasFormError] = useState(false);

  //OPEN TASK POP UP
  const [taskPopIsOpen, setTaskPopIsOpen] = useState(false);
  const handleAddClick = (e) => {
    setTaskPopIsOpen((taskPopIsOpen) => !taskPopIsOpen);
  };

  //RENDER
  return (
    <div className="layout-container">
      <div className="main-content">
        <SideBar btn1={<AddTaskButton handleClick={handleAddClick} />} />
        <TaskList
          taskList={tasks}
          setTasks={setTasks}
          deleteTask={deleteTask}
        />
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
    </div>
  );
}

export default Layout;
