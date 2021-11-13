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


// tasks.sort((x, y) => (x.isComplete === y.isComplete) ? 0 : x? -1 : 1)