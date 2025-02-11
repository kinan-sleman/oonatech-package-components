import React from "react";

function RadioInput({
  checked,
  defaultChecked,
  name,
  onClick,
  label,
  labelClass,
}: {
  checked?: boolean | undefined;
  defaultChecked?: boolean;
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  label?: string;
  labelClass?: string;
}) {
  return (
    <label className="flex items-center gap-[7px] select-none cursor-pointer rounded-[10px] transition-all">
      <input
        type="radio"
        name={name}
        className=" w-[18px] h-[18px] cursor-pointer"
        checked={checked}
        defaultChecked={defaultChecked}
        onClick={(e) => onClick && onClick(e)}
      />
      {label ? <div className={`${labelClass}`}>{label}</div> : ""}
    </label>
  );
}

export default RadioInput;
