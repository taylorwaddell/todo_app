/*---DEPENDENCIES
=============================*/
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/Task.scss";
import { BiTrash, BiPencil } from "react-icons/bi";

/*---FUNCTION
=============================*/
function Task(props) {
  const [isComplete, setIsComplete] = useState(false);
  const completeTask = () => {
    return setIsComplete((isComplete) => !isComplete);
  };
  const newLink = props.taskLink && (props.taskLink.match(/(https|http):\/\//gm)) ? props.taskLink : `http://${props.taskLink}`;
  return (
    <>
      <div className={`task-container ${isComplete && "task-completed"}`}>
        <div className="task-leftSide">
          {props.taskDate && (
            <div
              className={`task-date ${
                isComplete && "task-completed-strikethrough"
              }`}
            >
              Due: {props.taskDate}
            </div>
          )}
          <div className="task-content">
            <div className="check-box">
              <input
                type="checkbox"
                id={props.taskKey}
                name="complete"
                value="true"
                onClick={completeTask}
              />
              <label htmlFor="complete"></label>
            </div>

            <div
              className={`task-title ${
                isComplete && "task-completed-strikethrough"
              }`}
            >
              {props.taskTitle}
            </div>
            {newLink && (
              <div className="task-link">
                <a href={newLink}>Link</a>
              </div>
            )}
          </div>
        </div>

        <div className="task-sideBar">
          {props.taskTag && <div className="task-tag">{props.taskTag}</div>}

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

Task.propTypes = {
  isComplete: PropTypes.bool,
  taskTitle: PropTypes.string.isRequired,
  taskLink: PropTypes.string,
  taskDate: PropTypes.string,
  taskTag: PropTypes.string,
};

export default Task;
