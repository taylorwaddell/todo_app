import React from "react";

import "../assets/scss/components/SideBar.scss";

function SideBar(props) {
  return <div className="sideBar-container"><div className="sideBtn">{props.btn1}</div></div>;
}

export default SideBar;
