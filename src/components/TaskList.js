import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/TaskList.scss";
import Task from "./Task";

function TaskList(props) {
  const tasks = props.taskList
    .sort((x, y) => {
      console.log(x.isComplete);
      return x.isComplete === y.isComplete ? 0 : x ? -1 : 1;
    })
    .map((taskObj, index) => {
      return (
        <Task
          taskID={taskObj.id}
          taskTitle={taskObj.title}
          taskLink={taskObj.link}
          taskDate={taskObj.date}
          taskTag={taskObj.tag}
          taskIsComplete={taskObj.isComplete}
          setTaskIsComplete={props.setTasks}
          taskIndex={index}
          //TEMPORARY DEV STUFF
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
