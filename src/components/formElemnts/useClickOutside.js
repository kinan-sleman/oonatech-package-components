import React, { useState, useEffect, useRef } from "react";
let useClickOutside = (handler) => {
  let domNode = useRef(null);
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode?.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

export default useClickOutside;
