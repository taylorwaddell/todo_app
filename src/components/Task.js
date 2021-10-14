/*---DEPENDENCIES
=============================*/
import React from "react";
import "../assets/scss/components/Task.scss";

/*---FUNCTION
=============================*/
function Task({
  isComplete = false,
  taskTitle = "add task name",
  taskLink = "",
  taskDate = "",
  taskTag = "",
}) {
  return (
    <>
      <div className="task-container">
        <div className="task-content">
            <div className="task-date">
                {taskDate}
                {/**
                 * if (taskDate) add due date
                 */}
            </div>

            <div className="check-box">
                {/**
                 * if (isComplete) put red fill circle
                 * else put white outline circle
                 */}
            </div>

            <div className="task-title">{taskTitle}</div>

            <div className="task-link">
                {taskLink}
                {/**
                 * if (taskLink) add link button
                 */}
            </div>
        </div>

        <div className="task-sideBar">
            <div className="task-tag">
                {taskTag}
                {/**
                 * if (taskTag) add tag
                 */}
            </div>

            <div className="task-remove"></div>
        </div>
      </div>
    </>
  );
}

export default Task;
