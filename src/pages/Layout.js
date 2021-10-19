import React from "react";
import "../assets/scss/pages/Layout.scss";
import InputField from "../components/InputField";
import TaskList from "../components/TaskList";
import { sampleTaskList } from "../sample-data/tasks";

function Layout() {
  return (
    <div className="layout-container">
      <TaskList isCompleted={false} taskList={sampleTaskList} />
    </div>
  );
}

export default Layout;
