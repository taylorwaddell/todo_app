/*---DEPENDENCIES
=============================*/
import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/TaskList.scss";
import Task from "./Task";

/*---FUNCTION
=============================*/
function TaskList(props) {
  const tasks = props.taskList
    .sort((x, y) => (x.isComplete === y.isComplete ? 0 : x.isComplete ? 1 : -1))
    .map((taskObj, index) => {
      return (
        <Task
          // TASK INFO
          key={taskObj.id}
          taskID={taskObj.id}
          taskTitle={taskObj.title}
          taskLink={taskObj.link}
          taskDate={taskObj.date}
          taskTag={taskObj.tag}
          // FUNCTIONS
          deleteTask={props.deleteTask}
          // STATE
          setTasks={props.setTasks}
          allTasks={props.taskList}
        />
      );
    });
  return (
    <>
      <ul className={`${(tasks.length > 0) && "taskList-container"}`}>{tasks}</ul>
    </>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.array,
  setTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskList;
