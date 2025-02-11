import React from "react";
import { CircularProgress, styled, Switch, SwitchProps } from "@mui/material";

const AntSwitch = styled(Switch)(() => ({
  width: 38,
  height: 21,
  padding: 0,
  borderRadius: "12px",
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 20,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translate(14px, -50%)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2.5,
    top: "50%",
    left: "1px",
    transform: "translateY(-50%)",
    "&.Mui-checked": {
      transform: "translate(17px, -50%)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1FCB73",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 14,
    height: 14,
    borderRadius: 15,
    transition: "0.3s",
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

interface SwitchButtonProps extends Omit<SwitchProps, "onChange"> {
  loading?: boolean;
  onChange?: (val: boolean) => void;
  label?: string;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  loading,
  disabled,
  checked,
  onChange,
  label,
}) => {
  return (
    <div className="relative w-fit flex items-center gap-[6px]">
      <AntSwitch
        style={{
          opacity: loading ? "0.2" : "1",
        }}
        disabled={disabled}
        checked={checked}
        onChange={(e: any) => onChange && onChange(e.target.checked)}
      />
      <span className="text-sm font-normal">{label}</span>
      {loading && (
        <CircularProgress
          color="inherit"
          size={20}
          style={{
            position: "absolute",
            top: "3%",
            left: "29%",
            transform: "translate(-50%, -50%)",
            color: "#1b84ff",
          }}
        />
      )}
    </div>
  );
};

export default SwitchButton;
