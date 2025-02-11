import React from "react";

import AddNewBtn from "./AddNewBtn";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import DownloadBtn from "./DownloadBtn";
import CopyBtn from "./CopyBtn";

interface ActionButtonProps {
  type: "add" | "edit" | "delete" | "download" | "copy"; // Restrict type to specific strings
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Mouse event handler
}

/**
 * ActionButton component - Renders a button based on the action type.
 *
 * @param {ActionButtonProps} props - The props for the ActionButton component
 * @returns {JSX.Element} The rendered component
 */
const ActionButton: React.FC<ActionButtonProps> = ({ type, onClick }) => {
  switch (type) {
    case "add":
      return <AddNewBtn handleAdd={onClick} />;
    case "edit":
      return <EditBtn handleEdit={onClick} />;
    case "delete":
      return <DeleteBtn handleDelete={onClick} />;
    case "download":
      return <DownloadBtn handleDownload={onClick} />;
    case "copy":
      return <CopyBtn handleCopy={onClick} />;
    default:
      return <AddNewBtn handleAdd={onClick} />;
  }
};

export default ActionButton;
