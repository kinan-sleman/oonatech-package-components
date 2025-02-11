import React, { useState } from "react";
import Delete from "../icons/Delete";

function DeleteBtn({ handleDelete }: { handleDelete: any }) {
  const [hoverDelete, setHoverDelete] = useState(false);

  return (
    <button
      type="button"
      onMouseOver={() => setHoverDelete(true)}
      onMouseLeave={() => setHoverDelete(false)}
      onClick={handleDelete}
      className="w-7 h-7 hover:bg-[#FFD5CF] transition-all  bg-[#F4F4F4] rounded-[5px] flex items-center justify-center"
    >
      <Delete hovered={hoverDelete} />
    </button>
  );
}

export default DeleteBtn;
