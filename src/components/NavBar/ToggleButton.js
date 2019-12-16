import React from "react";

const drawToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <span className="dark-blue-text">
      <i className="fas fa-bars fa-1x"></i>
    </span>
  </button>
);

export default drawToggleButton;
