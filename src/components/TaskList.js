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
  //(x === y)? 0 : x? -1 : 1
    .sort((x, y) => (x.isComplete === y.isComplete) ? 0 : x.isComplete ? 1 : -1)
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

          // STATE
          setTasks={props.setTasks}
          taskIndex={index}
          findTaskIndex={props.findTaskIndex}
          allTasks={props.taskList}
        />
      );
    });
  return (
    <>
      <ul className="taskList-container">{tasks}
      </ul>
    </>
  );
}

TaskList.propTypes = {
  // isCompleted: PropTypes.bool.isRequired,
  taskList: PropTypes.array,
};

export default TaskList;

// tasks.sort((x, y) => (x.isComplete === y.isComplete) ? 0 : x? -1 : 1)
