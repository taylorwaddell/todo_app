import { PropTypes } from "prop-types";
import "../assets/scss/components/TaskPopUp.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import InputField from "./InputField";
import Button from "./Button";

function TaskPopUp({
  handleClose,
  isEdit = false,
  handleSubmit,
  handleFormChange,
  formState,
}) {
  return (
    <>
      <div className="popUpBackground">
        <div className="addTask-container">
          <div className="addTask-topBar">
            <div className="close-window" onClick={handleClose}>
              <AiFillCloseCircle className="text-danger AiFillCloseCircle" />
            </div>
          </div>
          <div className="addTask-inputContainer">
            <h1>{isEdit ? "Edit" : "Add"} Task</h1>
            <InputField
              inputType="text"
              fieldName="title"
              placeHolder="task name"
              value={formState.title}
              isRequired={true}
              changeHandler={handleFormChange}
            />
            <InputField
              inputType="link"
              fieldName="link"
              placeHolder="task link"
              value={formState.link}
              isRequired={true}
              changeHandler={handleFormChange}
            />
            <InputField
              inputType="date"
              fieldName="date"
              value={formState.date}
              isRequired={true}
              changeHandler={handleFormChange}
            />
            <InputField
              inputType="tag"
              fieldName="tag"
              value={formState.tag}
              isRequired={true}
              changeHandler={handleFormChange}
            />
            <Button
              btnText="Add Task"
              btnType="submit"
              classes={`bg-success text-dark br-round ${
                !formState.title && "disabled"
              }`}
              handleClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

TaskPopUp.propTypes = {
  handleClose: PropTypes.func,
  isEdit: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleFormChange: PropTypes.func,
  formState: PropTypes.object,
};

export default TaskPopUp;
