import React from "react";
import "../assets/scss/components/Error.scss";

function Error({ errors = ["Whoops! Something doesn't look right."] }) {
  const errorsList = errors.map((err) => (
    <p className="errorBox" key={Math.floor(Math.random() * 101)}>
      {err}
    </p>
  ));
  return <div className="errorContainer">{errorsList}</div>;
}

export default Error;
