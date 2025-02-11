import React from "react";

import "../styles/progress.scss";

function ProgressBar({
  color,
  value,
  max,
}: {
  color: String;
  value: String;
  max: String;
}) {
  return (
    <div className="progress-bar__wrapper">
      <progress
        className={`${color}`}
        id="progress-bar"
        value={`${value == "0" && max == "0" ? 1 : value}`}
        max={`${max == "0" && value == "0" ? 1 : max}`}
      ></progress>
    </div>
  );
}

export default ProgressBar;
