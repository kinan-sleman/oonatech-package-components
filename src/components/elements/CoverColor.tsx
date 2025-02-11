import React from "react";

function CoverColor({ theme, children }: any) {
  return <div className={`${theme}`}>{children}</div>;
}

export default CoverColor;
