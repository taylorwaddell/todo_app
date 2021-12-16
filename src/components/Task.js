/*---DEPENDENCIES
=============================*/
import React from "react";
import { PropTypes } from "prop-types";
import "../assets/scss/components/Task.scss";
import { BiTrash, BiPencil } from "react-icons/bi";

/*---FUNCTION
=============================*/
function Task(props) {

  //FIX: GREEN BUTTON WHEN COMPLETED

  //COMPLETE TASK FUNCTION
  const completeTask = (e) => {
    props.setTasks(
      props.allTasks.map((item) => {
        if (item.id === parseInt(e.target.id)) {
          return {
            ...item,
            isComplete: !item.isComplete,
          };
        }
        return item;
      })
      );
    };

  //CHECK IF COMPLETED
  const ifCompleted = () => {
    const task = props.allTasks.find((item) => item.id === props.taskID);
    return (task.isComplete === false) ? false : true;
  };

  //ADD HTTP TO LINK IF NEEDED
  const newLink =
    props.taskLink && props.taskLink.match(/(https|http):\/\//gm)
      ? props.taskLink
      : `http://${props.taskLink}`;
  
  // RENDER
  return (
    <>
      <div
        className={`task-container ${ifCompleted() && "task-completed"}`}
      >
        <div className="task-leftSide">
          {props.taskDate && (
            <div
              className={`task-date ${
                ifCompleted() && "task-completed-strikethrough"
              }`}
            >
              Due: {props.taskDate}
            </div>
          )}
          <div className="task-content">
            <div className="check-box">
              <input
                type="checkbox"
                id={props.taskID}
                name="complete"
                value="true"
                onClick={completeTask}
              />
              <label htmlFor="complete"></label>
            </div>

            <div
              className={`task-title ${
                ifCompleted() && "task-completed-strikethrough"
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
