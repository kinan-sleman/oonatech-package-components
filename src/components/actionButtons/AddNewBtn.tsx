import React, { useState } from "react";
import AddNew from "../icons/AddNew";

function AddNewBtn({ handleAdd }: { handleAdd: any }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleAdd}
      className="w-7 h-7 bg-[#F4F4F4] transition-all hover:bg-[#FFF2C2] rounded-[5px] flex items-center justify-center"
    >
      <AddNew hoverd={hover} />
    </button>
  );
}

export default AddNewBtn;
