import React from "react";
import "../assets/scss/components/Button.scss";
import { PropTypes } from "prop-types";

function Button({
  btnText = "button",
  btnType,
  classes = "bg-light text-dark br-round",
}) {
  return (
    <button className={classes} typeof={btnType}>
      {btnText}
    </button>
  );
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default Button;
