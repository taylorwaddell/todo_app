/*---DEPENDENCIES
=============================*/
import React from "react";
import "../assets/scss/components/Task.scss";
import { BiTrash, BiPencil } from "react-icons/bi";

/*---FUNCTION
=============================*/
function Task({
  isComplete = false,
  taskTitle = "Order on amazon the dog's pants",
  taskLink = "https://tinyurl.com/489r85kw",
  taskDate = "10/23/2021",
  taskTag = "🐕",
}) {
  return (
    <>
      <div className="task-container">
        <div className="task-leftSide">
          <div className="task-date">
            {taskDate}
            {/**
             * if (taskDate) add due date
             */}
          </div>
          <div className="task-content">
            <div className="check-box">
              <input type="checkbox" id="complete" value="true" /> {" "}
              <label for="complete"></label>
              {/**
               * if (isComplete) put red fill circle
               * else put white outline circle
               */}
            </div>

            <div className="task-title">{taskTitle}</div>

            <div className="task-link">
              <a href={taskLink}>Link</a>
              {/**
               * if (taskLink) add link button
               */}
            </div>
          </div>
        </div>

        <div className="task-sideBar">
          <div className="task-tag">
            {taskTag}
            {/**
             * if (taskTag) add tag
             */}
          </div>

          <div className="task-edit">
            <BiPencil className="biPencil" />
          </div>

          <div className="task-remove">
             <BiTrash className="biTrash" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
