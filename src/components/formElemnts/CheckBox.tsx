import React, { ReactNode } from "react";
import "./sub-components/CheckBox.scss";

function CheckBox({
  defaultChecked,
  checked,
  onChange,
  label,
  labelClass,
  dark = true,
  light,
}: {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string | ReactNode;
  labelClass?: string;
  dark?: boolean;
  light?: boolean;
}) {
  return (
    <label className="flex items-center gap-[7px] select-none cursor-pointer rounded-[10px] transition-all">
      <div className={`${light ? "box-check" : "checkbox"}  cursor-pointer`}>
        <input
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={(e) => {
            onChange && onChange(e.target.checked);
          }}
        />
        {dark ? (
          <svg
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8343 1.11385C11.0418 1.32131 11.0418 1.65769 10.8343 1.86515L5.22492 7.47449C4.46424 8.23524 3.23087 8.23524 2.47016 7.47456L0.16634 5.17071C-0.0411237 4.96324 -0.0411237 4.62685 0.16634 4.41938C0.373804 4.21191 0.710177 4.21191 0.917641 4.41938L3.22146 6.72323C3.56724 7.06897 4.12786 7.06897 4.47359 6.72323L10.083 1.11385C10.2905 0.906386 10.6268 0.906386 10.8343 1.11385Z"
              fill="white"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
      <div className={labelClass}>{label}</div>
    </label>
  );
}

export default CheckBox;
