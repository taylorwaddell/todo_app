import React from "react";
import "../assets/scss/pages/Layout.scss";
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import { sampleTaskList } from "../sample-data/tasks";

function Layout() {
  return (
    <div className="layout-container">
      <TaskList isCompleted={false} taskList={sampleTaskList} />
      <AddTaskButton />
    </div>
  );
}

export default Layout;
