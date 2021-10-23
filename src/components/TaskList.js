import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/TaskList.scss";
import Task from "./Task";

function TaskList(props) {
  const tasks = props.taskList.map((taskObj) => {
    return <Task
      isComplete={taskObj.isComplete}
      taskTitle={taskObj.title}
      taskLink={taskObj.link}
      taskDate={taskObj.date}
      taskTag={taskObj.tag}
    />;
  });
  return (
    <>
      <div className="taskList-container">{tasks}</div>
    </>
  );
}

TaskList.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  taskList: PropTypes.array,
};

export default TaskList;

// const sampleTaskList = [
//     {
//       isComplete: false,
//       taskTitle: "Order on amazon the dog's pants",
//       taskLink: "https://tinyurl.com/489r85kw",
//       taskDate: "10/23/2021",
//       taskTag: "🐕",
//     },
//     {
//       isComplete: false,
//       taskTitle: "Order on amazon the dog's pants",
//       taskLink: "https://tinyurl.com/489r85kw",
//       taskDate: "10/23/2021",
//       taskTag: "🐕",
//     },
//     {
//       isComplete: false,
//       taskTitle: "Order on amazon the dog's pants",
//       taskLink: "https://tinyurl.com/489r85kw",
//       taskDate: "10/23/2021",
//       taskTag: "🐕",
//     },
//     {
//       isComplete: false,
//       taskTitle: "Order on amazon the dog's pants",
//       taskLink: "https://tinyurl.com/489r85kw",
//       taskDate: "10/23/2021",
//       taskTag: "🐕",
//     },
//     {
//       isComplete: false,
//       taskTitle: "Order on amazon the dog's pants",
//       taskLink: "https://tinyurl.com/489r85kw",
//       taskDate: "10/23/2021",
//       taskTag: "🐕",
//     },
//   ];
