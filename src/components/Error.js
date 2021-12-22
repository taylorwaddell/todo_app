import React from "react";

function Error({ error = "Whoops! Something doesn't look right." }) {
  return <div className="errorBox"><p>{error}</p></div>
}

export default Error;
