//DEPENDENCIES
import { PropTypes } from "prop-types";
import "../assets/scss/components/TaskPopUp.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import InputField from "./InputField";
import Button from "./Button";

//FUNCTION
function TaskPopUp({
  handleClose,
  isEdit = false,
  handleSubmit,
  setFormFields,
  formState,
  hasFormError,
  setHasFormError,
  initialFormState,
}) {
  const handleFormChange = ({ target }) => {
    setHasFormError(false);
    setFormFields({ ...formState, [target.name]: target.value });
  };
  const linkRegexMatch = (link) => {
    return link === "" ||
      link.match(
        /([-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*))/gm
      )
      ? true
      : false;
  };
  const checkDateFormat = (date) => {
    return date === "" || date.match(/^\d{2}\/\d{2}\/\d{4}/gm) ? true : false;
  };
  const validateAndSubmit = (e) => {
    if (checkDateFormat(formState.date) && linkRegexMatch(formState.link)) {
      setFormFields(initialFormState);
      return handleSubmit(e);
    } else {
      setHasFormError(true)
    }
    // return checkDateFormat(formState.date) && linkRegexMatch(formState.link)
    //   ? handleSubmit(e)
    //   : setHasFormError(true);
  };
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
            {/* {hasFormError && <Error message={errMessage} />} */}
            <InputField
              inputType="text"
              fieldName="title"
              placeHolder="task name"
              value={formState.title}
              isRequired={true}
              changeHandler={handleFormChange}
              isFocus={true}
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
              inputType="text"
              fieldName="date"
              value={formState.date}
              isRequired={true}
              placeHolder="MM/DD/YYYY"
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
              handleClick={validateAndSubmit}
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
