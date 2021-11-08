// REACT DEPENDENCIES
import React, { Component } from "react";
import { PropTypes } from "prop-types";
// DEPENDENCIES
import { BiTrash, BiPencil } from "react-icons/bi";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: props.key,
      title: props.title,
      date: props.date,
      tag: props.tag,
      link: props.link,
      isComplete: false,
    };
  }

  setStatus() {
    this.setState((current) => ({
      ...current.state,
      isComplete: !current.isComplete,
    }));
  }

  render() {
    return (
      <>
        <div
          className={`task-container ${this.isComplete && "task-completed"}`}
        >
          <div className="task-leftSide">
            {this.date && (
              <div
                className={`task-date ${
                  this.isComplete && "task-completed-strikethrough"
                }`}
              >
                Due: {this.date}
              </div>
            )}
            <div className="task-content">
              <div className="check-box">
                <input
                  type="checkbox"
                  id={this.key}
                  name="complete"
                  value="true"
                  onClick={this.setStatus}
                />
                <label htmlFor="complete"></label>
              </div>

              <div
                className={`task-title ${
                  this.isComplete && "task-completed-strikethrough"
                }`}
              >
                {this.title}
              </div>
              {this.link && (
                <div className="task-link">
                  <a href={this.link}>Link</a>
                </div>
              )}
            </div>
          </div>

          <div className="task-sideBar">
            {this.tag && <div className="task-tag">{this.tag}</div>}

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
}

ToDo.propTypes = {
  isComplete: PropTypes.bool,
  taskTitle: PropTypes.string.isRequired,
  taskLink: PropTypes.string,
  taskDate: PropTypes.string,
  taskTag: PropTypes.string,
};

export default ToDo;
