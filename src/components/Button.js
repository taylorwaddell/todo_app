import React from "react";
import "../assets/scss/components/Button.scss";
import { PropTypes } from "prop-types";

function Button({
  btnText = "button",
  btnType,
  classes = "bg-light text-dark br-round",
  handleClick,
}) {
  return (
    <button className={classes} typeof={btnType} onClick={handleClick}>
      {btnText}
    </button>
  );
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  classes: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
