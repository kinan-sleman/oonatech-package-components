import {
  Autocomplete,
  Chip,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import React from "react";
import { FlagIcon } from "react-flag-kit";
import CheckBox from "./CheckBox";
const MainInput = forwardRef<
  | ((instance: HTMLDivElement | null) => void)
  | RefObject<HTMLDivElement>
  | null
  | undefined,
  {
    placeholder?: string;
    icon?: any;
    onIconClick?: () => void;
    type?:
      | "password"
      | "text"
      | "select"
      | "multiselect"
      | "textarea"
      | "number"
      | "searchableSelect"
      | "searchableMultiSelect"
      | "datetime-local"
      | "date"
      | "time";
    px?: number;
    value?: string | FileList | string[];
    onChange?: (value: string | string[] | FileList, e?: ChangeEvent) => void;
    iconSize?: string;
    required?: boolean;
    options?: readonly { content: string; value: string }[] | undefined;
    onKeyPress?: (e: KeyboardEvent) => void;
    inputBorder?: boolean;
    row?: number;
    flags?: { value: string }[];
    label?: string;
    height?: string;
    showAsterisk?: boolean;
    min?: number;
    max?: number;
    loading?: boolean;
    error?: string;
    onBlur?: () => void;
  }
>(
  (
    {
      placeholder,
      label,
      icon,
      onIconClick,
      iconSize= "22px",
      type = "text",
      px,
      value,
      onChange,
      required,
      options,
      onKeyPress,
      inputBorder,
      row,
      flags = [],
      height,
      showAsterisk,
      min,
      max,
      loading,
      error,
      onBlur,
    },
    ref
  ) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    // @ts-ignore
    const [selectedValues, setSelectedValues] = useState<string[]>(
      Array.isArray(value) ? value : []
    );

    useEffect(() => {
      if (Array.isArray(value)) {
        setSelectedValues(value);
      }
    }, [value]);

    const [isAutoFill, setIsAutoFill] = useState(false);

    return (
      <>
        <div className={`${loading ? "opacity-50" : ""} w-full relative`}>
          {type == "select" || type == "multiselect" ? (
            <>
              <FormControl
                fullWidth
                sx={{
                  "& .MuiFormLabel-root": {
                    top: "-2px",
                    fontSize: "12px",
                    px: px ? px : "",
                  },
                  "& .MuiInputLabel-shrink": {
                    fontSize: "15px",
                    top: "0px",
                    px: 0,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: error ? "#f00" : "",
                    borderWidth: !inputBorder ? "0" : "",
                  },
                  "& .Mui-focused": {
                    fontSize: "14px",
                    top: "0%",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: error ? "#f00":"",
                    },
                  },
                  "& .MuiInputLabel-root.MuiInputLabel-shrink ": {
                    // top: "1%",
                    fontSize: "14px",
                    transform: "translate(14px, -9px) scale(0.75)",
                    color: error ? "#e34848 ":"",
                  },
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  {label}{" "}
                  {required ? <span className="text-[#ff2626] "> *</span> : ""}{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  required={required}
                  label={label}
                  // @ts-ignore
                  ref={ref}
                  // @ts-ignore

                  onChange={(e) => onChange && onChange(e.target.value, e)}
                  multiple={type == "multiselect" ? true : false}
                  MenuProps={MenuProps}
                  sx={{
                    px: px ? px : "",
                    backgroundColor: "#F6F6F6",
                    borderRadius: "10px",
                    height: height ? height : "44px",
                    width: "100%",
                    fontSize: "14px",
                    "& .MuiInputBase-root": {
                      height: height ? height : "44px",
                      borderRadius: "8px",
                      fontSize: "14px",
                    },
                    "& .MuiInputLabel-root.MuiInputLabel-shrink ": {
                      // top: "1%",
                      fontSize: "14px",
                      transform: "translate(14px, -9px) scale(0.75)",
                      color: error ? "#e34848 ":"",
                    },
                    "& .MuiFormLabel-asterisk": {
                      color: "#ff2626",
                    },
                    "& label": {
                      // fontSize: "12px",
                      top: "50%",
                      transform: "translate(14px, -50%) scale(1)",
                    },
                    "& .MuiInputBase-input": {
                      height: "10px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: !inputBorder ? "0" : "",
                    },
                    "& .Mui-focused": {
                      fontSize: "14px",
                      // top: "0%",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "2px",
                        borderColor: error ? "#f00":"",
                      },
                    },
                  }}
                >
                  {options?.map((item, i) => {
                    return (
                      <MenuItem
                        key={i}
                        value={item?.value}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {flags?.length &&
                        flags?.find((flag) => flag?.value === item?.value) ? (
                          <FlagIcon
                            // @ts-ignore
                            code={item?.value}
                            size={22}
                            className="inline-block"
                            style={{ marginRight: 8, marginBottom: 3 }}
                          />
                        ) : (
                          ""
                        )}
                        {item?.content}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </>
          ) : type === "textarea" ? (
            <>
              <TextField
                label={label}
                placeholder={placeholder}
                multiline
                rows={row || 3}
                required={required}
                // @ts-ignore
                ref={ref}
                value={value as string}
                onChange={(e) => onChange && onChange(e.target.value, e)}
                fullWidth
                sx={{
                  backgroundColor: "#F6F6F6",
                  borderRadius: "10px",
                  "& .MuiInputBase-root": {
                    borderRadius: "8px",
                    fontSize: "14px",
                    px: px ? px : "",
                  },

                  "& label": {
                    fontSize: "12px",
                  },
                  "& .MuiFormLabel-asterisk": {
                    color: "#ff2626",
                  },
                  "& .MuiInputLabel-shrink": {
                    fontSize: "14px !important",
                    color: error ? "#e34848 ":"",
                    px: 0,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: error ? "#f00" : "",
                    borderWidth: !inputBorder ? "0" : "",
                  },
                  "& .Mui-focused": {
                    fontSize: "14px",
                    top: "0%",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: error ? "#f00":"",
                    },
                  },
                }}
              />
            </>
          ) : type === "searchableSelect" ? (
            <Autocomplete
              // @ts-ignore
              options={options}
              value={options?.find((item) => item?.value === value) || null}
              onChange={(event, newValue) => {
                onChange && onChange(newValue?.value || "");
              }}
              getOptionLabel={(option) => option?.content}
              isOptionEqualToValue={(option, value) =>
                option?.value === value?.value
              }
              renderInput={(params) => (
                <TextField
                  required={required}
                  {...params}
                  label={label}
                  placeholder={placeholder}
                  fullWidth
                  sx={{
                    backgroundColor: "#F6F6F6",
                    borderRadius: "10px",
                    height: height ? height : "44px",
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: height ? height : "44px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      px: px ? px : "",
                    },
                    "& .MuiFormLabel-asterisk": {
                      color: "#ff2626",
                    },
                    "& .MuiInputLabel-root.MuiInputLabel-shrink ": {
                      top: "1%",
                      color: error ? "#e34848 ":"",
                      fontSize: "14px",
                      px: 0,
                      transform: "translate(14px, -9px) scale(0.75)",
                    },
                    "& label": {
                      fontSize: "12px",
                      top: "50%",
                      px: px ? px : "",
                      transform: "translate(14px, -50%) scale(1)",
                    },
                    "& .MuiInputBase-input": {
                      height: "10px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: error ? "#f00" : "",
                      borderWidth: !inputBorder ? "0" : "",
                    },
                    "& .Mui-focused": {
                      fontSize: "14px",
                      top: "0%",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "2px",
                        borderColor: error ? "#f00":"",
                      },
                    },
                  }}
                />
              )}
              renderOption={(props, option) => (
                <li
                  {...props}
                  key={option.value}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {flags?.find((flag) => flag?.value === option?.value) && (
                    <FlagIcon
                      // @ts-ignore
                      code={option?.value}
                      size={22}
                      className="inline-block"
                      style={{ marginRight: 8, marginBottom: 3 }}
                    />
                  )}
                  {option?.content}
                </li>
              )}
              fullWidth
            />
          ) : type === "searchableMultiSelect" ? (
            <div>
              <Autocomplete
                multiple
                options={options || []}
                value={
                  options?.filter((item) =>
                    selectedValues.includes(item.value)
                  ) || []
                }
                // onChange={(event, newValue) => {
                //   const newSelectedValues = newValue.map((item) => item.value);
                //   setSelectedValues(newSelectedValues);
                //   onChange && onChange(newSelectedValues);
                // }}
                onChange={(event, newValue) => {
                  const newSelectedValues = newValue.map((item) => {
                    if (
                      !isNaN(parseFloat(item.value)) &&
                      Number.isFinite(parseFloat(item.value))
                    ) {
                      return Number(item.value);
                    }
                    return item.value;
                  });
                  // @ts-ignore
                  setSelectedValues(newSelectedValues);
                  // @ts-ignore
                  onChange && onChange(newSelectedValues);
                }}
                getOptionLabel={(option) => option.content}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
                renderTags={(selectedOptions, getTagProps) =>
                  selectedOptions.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option.value}
                      label={option.content}
                      // @ts-ignore
                      avatar={
                        flags?.find((flag) => flag.value === option.value) ? (
                          // @ts-ignore
                          <FlagIcon code={option.value} size={16} />
                        ) : null
                      }
                      sx={{
                        marginTop: "0px !important",
                        height: "30px !important",
                      }}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={label}
                    placeholder={placeholder}
                    fullWidth
                    required={required && selectedValues.length === 0}
                    error={required && selectedValues.length === 0}
                    helperText={
                      required && selectedValues.length === 0
                        ? "This field is required"
                        : ""
                    }
                    sx={{
                      backgroundColor: "#F6F6F6",
                      borderRadius: "10px",
                      width: "100%",
                      "& .MuiInputBase-root": {
                        borderRadius: "8px",
                        fontSize: "14px",
                        px: px ? px : "",
                      },
                      "& .MuiFormLabel-asterisk": {
                        color: "#ff2626",
                      },
                      "& .MuiInputLabel-root.MuiInputLabel-shrink ": {
                        top: "1%",
                        fontSize: "14px",
                        px: 0,
                        transform: "translate(14px, -9px) scale(0.75)",
                        color: error ? "#e34848 ":"",
                      },
                      "& label": {
                        fontSize: "12px",
                        top: "50%",
                        px: px ? px : "",
                        transform: "translate(14px, -50%) scale(1)",
                      },
                      "& .MuiInputBase-input": {
                        height: "10px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: !inputBorder ? "0" : "",
                      },
                      "& .Mui-focused": {
                        fontSize: "14px",
                        top: "0%",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderWidth: "2px",
                          borderColor: error ? "#f00":"",
                        },
                      },
                    }}
                  />
                )}
                renderOption={(props, option) => {
                  const isSelected = selectedValues.includes(option.value);
                  return (
                    <li
                      {...props}
                      key={option.value}
                      style={{ display: "flex", alignItems: "center" }}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default click behavior
                        const newSelectedValues = isSelected
                          ? selectedValues.filter((v) => v !== option.value)
                          : [...selectedValues, option.value];
                        setSelectedValues(newSelectedValues);
                        onChange && onChange(newSelectedValues);
                      }}
                    >
                      {flags?.find((flag) => flag.value === option.value) && (
                        <FlagIcon
                          // @ts-ignore
                          code={option?.value}
                          size={22}
                          className="inline-block"
                          style={{ marginRight: 8, marginBottom: 3 }}
                        />
                      )}
                      <CheckBox
                        onChange={(checked) => {
                          const newSelectedValues = checked
                            ? [...selectedValues, option.value]
                            : selectedValues.filter((v) => v !== option.value);
                          setSelectedValues(newSelectedValues);
                          onChange && onChange(newSelectedValues);
                        }}
                        checked={isSelected}
                        label={option.content}
                      />
                    </li>
                  );
                }}
                fullWidth
                disableCloseOnSelect
              />
            </div>
          ) : type === "number" ? (
            <TextField
              type="number"
              value={value as string}
              onChange={(e) => onChange && onChange(e.target.value, e)}
              onKeyDown={(e) => onKeyPress && onKeyPress(e)}
              sx={{
                backgroundColor: "#F6F6F6",
                borderRadius: "10px",
                height: height ? height : "44px",
                width: "100%",
                // 1px 5px 9px -1px rgb(164 164 164 / 52%);

                "& .MuiInputBase-root": {
                  height: height ? height : "44px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  px: px ? px : "",
                },
                "& .MuiFormLabel-asterisk": {
                  color: "#ff2626",
                },
                "& .MuiInputLabel-root.MuiInputLabel-shrink ": {
                  top: "1%",
                  fontSize: "14px",
                  px: 0,
                  color: error ? "#e34848 ":"",
                  transform: "translate(14px, -9px) scale(0.75)",
                },
                "& label": {
                  fontSize: "12px",
                  top: "50%",
                  transform: "translate(14px, -50%) scale(1)",
                },
                "& .MuiInputBase-input": {
                  height: "10px",
                }, 
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: error ? "#f00" : "",
                  borderWidth: !inputBorder ? "0" : "",
                },
                "& .Mui-focused": {
                  fontSize: "14px",
                  top: "0%",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderWidth: "2px",
                    borderColor: error ? "#f00":"",
                  },
                },
              }}
              label={
                showAsterisk ? (
                  <span className="flex items-center gap-1">
                    {label} <span className="text-[#ff2626] text-xs">*</span>
                  </span>
                ) : (
                  label
                )
              }
              placeholder={placeholder}
              variant="outlined"
              fullWidth
              required={required}
              inputProps={{
                min: min,
                max: max,
              }}
            />
          ) : type === "date" || type === "datetime-local" || type === "time" ? (
            <>
              <TextField
                label={
                  showAsterisk ? (
                    <span className="flex items-center gap-1">
                      {label} <span className="text-[#ff2626] text-xs">*</span>
                    </span>
                  ) : (
                    label
                  )
                }
                placeholder={placeholder}
                type={type}
                //@ts-ignore
                ref={ref}
                value={value as string}
                onChange={(e) => onChange && onChange(e.target.value, e)}
                onKeyDown={(e) => onKeyPress && onKeyPress(e)}
                sx={{
                  backgroundColor: "#F6F6F6",
                  borderRadius: "10px",
                  height: height ? height : "44px",
                  width: "100%",
                  // 1px 5px 9px -1px rgb(164 164 164 / 52%);

                  "& .MuiInputBase-root": {
                    height: height ? height : "44px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    px: px ? px : "",
                  },
                  "& .MuiFormLabel-asterisk": {
                    color: "#ff2626",
                  },
                  "& .MuiInputLabel-root.MuiInputLabel-shrink ": {
                    top: "1%",
                    fontSize: "14px",
                    px: 0,
                    transform: "translate(14px, -9px) scale(0.75)",
                    color: error ? "#e34848 ":"",
                  },
                  "& label": {
                    fontSize: "12px",
                    top: "50%",
                    transform: "translate(14px, -50%) scale(1)",
                  },
                  "& .MuiInputBase-input": {
                    height: "10px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderWidth: !inputBorder ? "0" : "",
                  },
                  "& .Mui-focused": {
                    fontSize: "14px",
                    top: "0%",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: error ? "#f00":"",
                    },
                  },
                }}
                required={required}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true, //
                }}
              />
            </>
          ) : (
            <>
              <TextField
                // @ts-ignore
                required={required}
                id="outlined-basic"
                type={type}
                // @ts-ignore
                ref={ref}
                onBlur={onBlur && onBlur}
                value={value as string}
                onChange={(e) => onChange && onChange(e.target.value, e)}
                onKeyDown={(e) => onKeyPress && onKeyPress(e)}
                sx={{
                  backgroundColor: "#F6F6F6",
                  borderRadius: "10px",
                  height: height ? height : "44px",
                  width: "100%",
                  // 1px 5px 9px -1px rgb(164 164 164 / 52%);
                  "& .MuiInputBase-root": {
                    height: height ? height : "44px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    px: px ? px : "",
                  },
                  "& .MuiFormLabel-asterisk": {
                    color: "#ff2626",
                  },
                  "& .MuiInputLabel-root.MuiInputLabel-shrink ": {
                    top: "1%",
                    fontSize: "14px",
                    px: 0,
                    transform: "translate(14px, -9px) scale(0.75)",
                    color: error ? "#e34848 ":"",
                  },
                  "& label": {
                    fontSize: "12px",
                    top: "50%",
                    transform: "translate(14px, -50%) scale(1)",
                  },
                  "& .MuiInputBase-input": {
                    height: "10px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderWidth: !inputBorder ? "0" : "",
                    borderColor: error ? "#f00" : "",
                  },
                  "& .Mui-focused": {
                    fontSize: "14px",
                    top: "0%",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: error ? "#f00":"",
                    },
                  },
                }}
                label={
                  showAsterisk ? (
                    <span className={`flex items-center gap-1 `}>
                      {label} <span className="text-[#ff2626] text-xs">*</span>
                    </span>
                  ) : (
                    `${label}`
                  )
                }
                placeholder={placeholder}
                variant="outlined"
                // InputLabelProps={{
                //   shrink: !!inputValue || isAutoFilled,
                // }}
                InputLabelProps={{
                  // @ts-ignore
                  shrink: isAutoFill || value?.length > 0 || undefined,
                }}
                InputProps={{
                  onAnimationStart: (event) => {
                    if (event?.animationName?.includes("auto-fill")) {
                      event?.target?.dispatchEvent(
                        new Event("focus", { bubbles: true })
                      );
                      event?.target?.dispatchEvent(
                        new Event("blur", { bubbles: true })
                      );
                      event?.target?.dispatchEvent(
                        new Event("change", { bubbles: true })
                      );
                    }
                    event?.animationName === "mui-auto-fill" &&
                      setIsAutoFill(true);
                  },
                  onAnimationEnd: (e: React.AnimationEvent<HTMLDivElement>) =>
                    e.animationName === "mui-auto-fill-cancel" &&
                    setIsAutoFill(false),
                  onFocus: () => setIsAutoFill(false),
                }}
                // inputProps={{
                //   onAnimationStart:
                //     makeAnimationStartHandler(setUserNameHasValue),
                // }}
                // InputLabelProps={{
                //   shrink: userNameHasValue,
                // }}
              />
              {icon && (
                <button
                  // @ts-ignore
                  tabIndex="-1"
                  className="absolute top-[50%] -translate-y-[50%] z-20 right-[10px]"
                  type="button"
                  onClick={() => {
                    onIconClick && onIconClick();
                  }}
                >
                  {icon === "searchIcon" ? (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.88268 7.24199L9.94518 9.30449C10.1285 9.48782 10.1285 9.76283 9.94518 9.94616C9.85352 10.0378 9.71601 10.0837 9.62435 10.0837C9.53268 10.0837 9.39518 10.0378 9.30351 9.94616L7.24102 7.88366C6.55352 8.38783 5.72852 8.70866 4.81185 8.70866C2.65768 8.70866 0.916016 6.96699 0.916016 4.81283C0.916016 2.65866 2.65768 0.916992 4.81185 0.916992C6.96602 0.916992 8.70768 2.65866 8.70768 4.81283C8.70768 5.72949 8.38685 6.60033 7.88268 7.24199ZM4.81185 1.83366C3.16185 1.83366 1.83268 3.16283 1.83268 4.81283C1.83268 6.46283 3.16185 7.79199 4.81185 7.79199C5.63685 7.79199 6.37018 7.47116 6.92018 6.92116C7.47018 6.37116 7.79102 5.63783 7.79102 4.81283C7.79102 3.16283 6.46185 1.83366 4.81185 1.83366Z"
                        fill="black"
                      />
                      <mask
                        id="mask0_536_3946"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="11"
                        height="11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.88268 7.24199L9.94518 9.30449C10.1285 9.48782 10.1285 9.76283 9.94518 9.94616C9.85352 10.0378 9.71601 10.0837 9.62435 10.0837C9.53268 10.0837 9.39518 10.0378 9.30351 9.94616L7.24102 7.88366C6.55352 8.38783 5.72852 8.70866 4.81185 8.70866C2.65768 8.70866 0.916016 6.96699 0.916016 4.81283C0.916016 2.65866 2.65768 0.916992 4.81185 0.916992C6.96602 0.916992 8.70768 2.65866 8.70768 4.81283C8.70768 5.72949 8.38685 6.60033 7.88268 7.24199ZM4.81185 1.83366C3.16185 1.83366 1.83268 3.16283 1.83268 4.81283C1.83268 6.46283 3.16185 7.79199 4.81185 7.79199C5.63685 7.79199 6.37018 7.47116 6.92018 6.92116C7.47018 6.37116 7.79102 5.63783 7.79102 4.81283C7.79102 3.16283 6.46185 1.83366 4.81185 1.83366Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_536_3946)">
                        <rect width="11" height="11" fill="#6E6B7B" />
                      </g>
                    </svg>
                  ) : icon === "Xclose" ? (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.33937 5.33913C5.56546 5.11305 5.84807 5 6.15894 5C6.46981 5 6.75242 5.11305 6.9785 5.33913L11.5002 9.86087L16.022 5.33913C16.2481 5.11305 16.5307 5 16.8415 5C17.1524 5 17.435 5.11305 17.6611 5.33913C18.1133 5.79131 18.1133 6.52609 17.6611 6.97826L13.1394 11.5L17.6611 16.0217C18.1133 16.4739 18.1133 17.2087 17.6611 17.6609C17.2089 18.113 16.4742 18.113 16.022 17.6609L11.5002 13.1391L6.9785 17.6609C6.52633 18.113 5.79155 18.113 5.33937 17.6609C4.8872 17.2087 4.8872 16.4739 5.33937 16.0217L9.86111 11.5L5.33937 6.97826C4.8872 6.52609 4.8872 5.79131 5.33937 5.33913Z"
                        fill="#555555"
                      />
                    </svg>
                  ) : (
                    <img src={icon} alt="Input Icon" style={{ width: iconSize, height: iconSize}} />
                  )}
                </button>
              )}
            </>
          )}
          {loading ? (
            <span className="w-full h-full cursor-not-allowed absolute top-0 left-0 z-[100]"></span>
          ) : (
            ""
          )}
          {loading ? (
            <CircularProgress
              color="inherit"
              size={20}
              style={{
                position: "absolute",
                top: "25%",
                right: "7%",
                transform: "translate(-50%, -50%)",
                color: "#1b84ff",
                zIndex: "200",
              }}
            />
          ) : (
            ""
          )}
        </div>
        {error ? (
          <span className="text-[10px] block text-red-500 font-normal mt-[1px] ml-3">
            {error}
          </span>
        ) : (
          ""
        )}
      </>
    );
  }
);

export default MainInput;

{
  /* <TextField
  inputProps={{
    onAnimationStart: makeAnimationStartHandler(setUserNameHasValue),
  }}
  InputLabelProps={{
    shrink: userNameHasValue,
  }}
  label="Label here"
  value={userName}
  onChange={(e) => {
    setUserName(e.target.value);
    setUserNameHasValue(hasValue(e.target.value));
  }}
/>; */
}

// const [userName, setUserName] = React.useState("");
// const [userNameHasValue, setUserNameHasValue] = React.useState(false);

// const makeAnimationStartHandler = (stateSetter) => (e) => {
//   const autofilled = !!e.target?.matches("*:-webkit-autofill");
//   if (e.animationName === "mui-auto-fill") stateSetter(autofilled);
//   if (e.animationName === "mui-auto-fill-cancel") stateSetter(autofilled);
// };
