/*---DEPENDENCIES
=============================*/
import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/Task.scss";
import { BiTrash, BiPencil } from "react-icons/bi";

/*---FUNCTION
=============================*/
function Task(props) {
  // below: OLD completeTask function
  // const completeTask = () => {
  //   return setIsComplete((isComplete) => !isComplete);
  // };

  // NEW COMPLETE TASK FUNCTION V
  const completeTask = (e) => {
    const task = e.target.id;
    const currentList = [...props.allTasks]
    const currentState = currentList[task].isComplete
    currentList[task].isComplete = !currentState;
    //console.log(1, props.allTasks)
    props.setTaskIsComplete([...currentList])
    //console.log(2, props.allTasks)
    //console.log(2, props.allTasks[task])
  }
  const newLink =
    props.taskLink && props.taskLink.match(/(https|http):\/\//gm)
      ? props.taskLink
      : `http://${props.taskLink}`;
  return (
    <>
      <div className={`task-container ${props.taskIsComplete && "task-completed"}`}>
        <div className="task-leftSide">
          {props.taskDate && (
            <div
              className={`task-date ${
                props.taskIsComplete && "task-completed-strikethrough"
              }`}
            >
              Due: {props.taskDate}
            </div>
          )}
          <div className="task-content">
            <div className="check-box">
              <input
                type="checkbox"
                id={props.taskIndex}
                name="complete"
                value="true"
                onClick={completeTask}
              />
              <label htmlFor="complete"></label>
            </div>

            <div
              className={`task-title ${
                props.taskIsComplete && "task-completed-strikethrough"
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
