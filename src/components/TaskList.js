import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/TaskList.scss";
import Task from "./Task";

function TaskList(props) {
  const tasks = props.taskList.map((taskObj) => {
    return (
      <Task
        taskTitle={taskObj.title}
        taskLink={taskObj.link}
        taskDate={taskObj.date}
        taskTag={taskObj.tag}
        taskKey={taskObj.key}
        isComplete={taskObj.isComplete}
        setIsComplete={props.setIsComplete}
      />
    );
  });
  return (
    <>
      <div className="taskList-container">{tasks}</div>
    </>
  );
}

TaskList.propTypes = {
  // isCompleted: PropTypes.bool.isRequired,
  taskList: PropTypes.array,
};

export default TaskList;
