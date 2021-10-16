import React from "react";
import "../assets/scss/pages/Layout.scss";
import TaskList from "../components/TaskList";

function Layout() {
  return (
    <div className="layout-container">
      <TaskList />
    </div>
  );
}

export default Layout;
