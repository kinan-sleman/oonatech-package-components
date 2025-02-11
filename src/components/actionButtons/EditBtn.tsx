import React, { useState } from "react";
import Edit from "../icons/Edit";

function EditBtn({ handleEdit }: { handleEdit: any }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleEdit}
      className="w-7 h-7 bg-[#F4F4F4] transition-all hover:bg-[#E9F3FF] rounded-[5px] flex items-center justify-center"
    >
      <Edit hovered={hover} />
    </button>
  );
}

export default EditBtn;
