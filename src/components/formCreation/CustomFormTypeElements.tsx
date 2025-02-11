import React, { useEffect, useRef, useState } from "react";
import Icons from "../../assets";
import UploadIcon from "@mui/icons-material/Upload";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../redux/store";
import {
    setOptionsItem,
    updateFieldColor,
    updateFieldTitle,
    updateImgSrc,
} from "../../redux/reducers/formCreationReducer";
import { useDispatch } from "react-redux";
import DeleteIcon from "../icons/DeleteIcon";
import { Edit } from "@mui/icons-material";
import ImgIcon from "../icons/ImgIcon";
// import { ReactSVG } from "react-svg";
import ContainerElement from "./ContainerElement";
import EditIcon from "../icons/EditIcon";

export default function CustomFormTypeElements({
    id,
    isActive,
    onMouseEnter,
    onMouseLeave,
    dragging,
}: {
    id: string;
    isActive: boolean;
    dragging: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}) {
    const { droppedItems } = useSelector(
        (state: RootState) => state.formCreation
    );
    const element = droppedItems.find((el: any) => el.id === id);
    const [options, setOptions] = useState(element?.resourceData ?? []);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const colorInputRef = useRef<HTMLInputElement>(null);
    const fileUploaderInput = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(element?.src ?? null);
    const dispatch = useDispatch();
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
            dispatch(
                updateImgSrc({ id: element?.id, src: URL.createObjectURL(file) })
            );
        }
    };
    const handleColorInputChange = () => {
        if (colorInputRef.current) {
            colorInputRef.current.click();
        }
    };
    const handleFileUploaderClick = () => {
        if (fileUploaderInput.current) {
            fileUploaderInput.current.click();
        }
    };
    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleOptionChange = (index: number, newValue: string) => {
        const updatedOptions = [...options];
        updatedOptions[index] = { ...updatedOptions[index], name: newValue };
        setOptions(updatedOptions);
        dispatch(
            setOptionsItem({
                id: element?.id ?? "",
                options: updatedOptions,
            })
        );
    };
    const [headlineColor, setHeadlineColor] = useState(element?.color || "");
    const handleChangeColor = (e: any) => {
        setHeadlineColor(e.target.value);
        console.log(e.target.value, "e.target.value");
        dispatch(updateFieldColor({ id: element?.id, color: e.target.value }));
    };
    const handleChangeTitle = (langValue: any) => {
        dispatch(updateFieldTitle({ id: element?.id, langValue }));
    };
    useEffect(() => {
        setOptions(element?.resourceData ?? []);
    }, [element]);
    const renderElement = () => {
        switch (element?.type) {
            case "headline":
                return (
                    <div className="flex flex-col w-full">
                        <hr
                            className="border-2 cursor-pointer"
                            onClick={handleColorInputChange}
                            style={{ borderColor: headlineColor }}
                        />
                        <input
                            type="color"
                            value={headlineColor}
                            onChange={(e) => handleChangeColor(e)}
                            className="hidden"
                            ref={colorInputRef}
                        />
                    </div>
                );
            case "date":
                return (
                    <div className="w-full">
                        <input
                            type="date"
                            className=" text-[#A4A4A4] text-[13px] w-full border border-[#E0E0E0] rounded px-1 focus:border-2 focus:border-[#00A7E1]"
                        />
                    </div>
                );
            case "container":
                return (
                    // <></>
                    <ContainerElement
                        element={element}
                        isActive={isActive}
                        dragging={dragging}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    />
                );
            case "email":
                return (
                    <input
                        type="email"
                        className="text-[#A4A4A4] w-full border border-[#E0E0E0] rounded px-1 focus:border-2 focus:border-[#00A7E1]"
                    />
                );
            case "dropdown":
                return (
                    <div className="w-full border border-[#E0E0E0] rounded px-1 focus-within:border-2 focus-within:border-[#00A7E1]">
                        {options.map((option: any, index: any) => (
                            <div key={option.id} className="flex items-center my-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent text-[#A4A4A4] border-none focus:outline-none text-[12px]"
                                    value={option.name}
                                    onChange={(e) => handleOptionChange(index, e.target.value)}
                                />
                                <button
                                    className="text-red-500 ml-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const updatedOptions = options.filter(
                                            (_: any, i: any) => i !== index
                                        );
                                        setOptions(updatedOptions);
                                        dispatch(
                                            setOptionsItem({
                                                id: element?.id,
                                                options: updatedOptions,
                                            })
                                        );
                                    }}
                                >
                                    {/* <ReactSVG src={Icons.deleteIcon} /> */}
                                    <DeleteIcon />
                                    {/* <img src={Icons.deleteIcon} alt="Delete" /> */}
                                </button>
                            </div>
                        ))}
                        <button
                            className="text-[#00A7E1] mt-2"
                            onClick={(e) => {
                                e.preventDefault();
                                setOptions([
                                    ...options,
                                    {
                                        id: options.length + 1,
                                        name: `option ${options.length + 1}`,
                                    },
                                ]);
                                dispatch(
                                    setOptionsItem({
                                        id: element?.id,
                                        options: [
                                            ...options,
                                            {
                                                id: options.length + 1,
                                                name: `option ${options.length + 1}`,
                                            },
                                        ],
                                    })
                                );
                            }}
                        >
                            Add Option
                        </button>
                    </div>
                );
            case "text":
                return (
                    <input
                        type="text"
                        className="text-[#A4A4A4] w-full border border-[#E0E0E0] rounded px-1 focus:border-2 focus:border-[#00A7E1]"
                    />
                );
            case "empty":
                return "";
            case "number":
                return (
                    <input
                        type="number"
                        className="text-[#A4A4A4] w-full border border-[#E0E0E0] rounded px-1 focus:border-2 focus:border-[#00A7E1]"
                    />
                );
            case "multiple selection":
                return (
                    <div>
                        <div>
                            {options.map((option: any, index: any) => (
                                <div key={option.id} className="flex items-center my-2">
                                    <input type="radio" name={uuidv4()} className="mr-2" />
                                    <label
                                        contentEditable="true"
                                        suppressContentEditableWarning={true}
                                        onBlur={(e) =>
                                            handleOptionChange(index, e.target.textContent || "")
                                        }
                                        className="p-1 focus:outline-[#00A7E1] focus:shadow-md focus:shadow-[#00A7E1] rounded-lg flex-grow text-[12px]"
                                    >
                                        {option.name}
                                    </label>
                                    <button
                                        className="text-red-500 ml-2"
                                        onClick={() => {
                                            const updatedOptions = options.filter(
                                                (_: any, i: any) => i !== index
                                            );
                                            setOptions(updatedOptions);
                                            dispatch(setOptionsItem({ id: element?.id, options }));
                                        }}
                                    >
                                        {/* <ReactSVG src={Icons.deleteIcon} /> */}
                                        <DeleteIcon />
                                        {/* <img src={Icons.deleteIcon} alt="" /> */}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            className="text-[#00A7E1] mt-2"
                            onClick={(e) => {
                                e.preventDefault();
                                setOptions([
                                    ...options,
                                    {
                                        id: options.length + 1,
                                        content: `option ${options.length + 1}`,
                                    },
                                ]);
                                dispatch(setOptionsItem({ id: element?.id, options }));
                            }}
                        >
                            Add Option
                        </button>
                    </div>
                );
            case "phone":
                return (
                    <input
                        type="tel"
                        className="text-[#A4A4A4] w-full border border-[#E0E0E0] rounded px-1 focus:border-2 focus:border-[#00A7E1]"
                    />
                );
            case "picture":
                return (
                    <div className="relative w-full">
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileChange} // Call handleFileChange when the file is selected
                        />
                        {/* <img
                            className="absolute top-[0] right-[0] bg-white cursor-pointer"
                            onClick={handleImageClick}
                            src={Icons.edit}
                            alt=""
                        /> */}
                        <div
                            className="absolute top-[0] right-[0] bg-white cursor-pointer"
                            onClick={handleImageClick}>
                            {/* <ReactSVG src={Icons.edit} /> */}
                            <EditIcon />
                        </div>

                        {selectedImage ? (
                        <div
                            className="cursor-pointer mx-auto"
                            style={{
                                width: element?.width || "",
                                height: element?.height || "",
                                objectFit: element?.fit ?? undefined,
                            }}
                            onClick={handleImageClick}>
                            {/* <ReactSVG src={selectedImage || Icons.imgIcon} /> */}
                            {/* <ImgIcon /> */}
                            <img
                                className="cursor-pointer mx-auto"
                                onClick={handleImageClick}
                                style={{
                                    width: element?.width || "",
                                    height: element?.height || "",
                                    objectFit: element?.fit ?? undefined,
                                }}
                                src={selectedImage}
                                alt="Upload Icon"
                            />
                        </div>
                        ) : (
                            <div
                                className="h-[70px] flex w-full px-3 justify-center border-[1px] border-[#E0E0E0] rounded-lg cursor-pointer"
                                onClick={handleImageClick}
                            >
                                <div
                                    className="cursor-pointer"
                                    onClick={handleImageClick}>
                                    {/* <ReactSVG src={selectedImage || Icons.imgIcon} /> */}
                                    <ImgIcon />
                                </div>
                                {/* <img
                                    className="cursor-pointer"
                                    onClick={handleImageClick}
                                    src={selectedImage || Icons.imgIcon} // Show the selected image or fallback to Icons.imgIcon
                                    alt="Upload Icon"
                                /> */}
                            </div>
                        )}
                    </div>
                );
            case "single selection":
                return (
                    <div>
                        <div>
                            {options.map((option: any, index: any) => (
                                <div key={option.id} className="flex items-center my-2">
                                    <input
                                        type="radio"
                                        name={`singleSelection-${id}`}
                                        className="mr-2"
                                    />
                                    <label
                                        contentEditable="true"
                                        suppressContentEditableWarning={true}
                                        onBlur={(e) =>
                                            handleOptionChange(index, e.target.textContent || "")
                                        }
                                        className="p-1 focus:outline-[#00A7E1] focus:shadow-md focus:shadow-[#00A7E1] rounded-lg flex-grow text-[12px]"
                                    >
                                        {option.name}
                                    </label>
                                    <button
                                        className="text-red-500 ml-2"
                                        onClick={() => {
                                            const updatedOptions = options.filter(
                                                (_: any, i: any) => i !== index
                                            );
                                            setOptions(updatedOptions);
                                            dispatch(setOptionsItem({ id: element?.id, options }));
                                        }}
                                    >
                                        {/* <ReactSVG src={Icons.deleteIcon} /> */}
                                        <DeleteIcon />
                                        {/* <img src={Icons.deleteIcon} alt="" /> */}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            className="text-[#00A7E1] mt-2"
                            onClick={(e) => {
                                e.preventDefault();
                                setOptions([
                                    ...options,
                                    {
                                        id: options.length + 1,
                                        content: `option ${options.length + 1}`,
                                    },
                                ]);
                                dispatch(setOptionsItem({ id: element?.id, options }));
                            }}
                        >
                            Add Option
                        </button>
                    </div>
                );
            case "paragraph":
                return (
                    <textarea className="text-[#A4A4A4] w-full border border-[#E0E0E0] rounded px-1 focus:border-2 focus:border-[#00A7E1]"></textarea>
                );
            case "time":
                return (
                    <input
                        type="time"
                        className="text-[#A4A4A4] w-full border border-[#E0E0E0] rounded px-1 focus:border-2 focus:border-[#00A7E1]"
                    />
                );
            case "uploader":
                return (
                    <div className="w-full flex flex-col size-[100px] items-center justify-center p-2 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <input
                            type="file"
                            className="hidden"
                            ref={fileUploaderInput}
                            accept="image/*, .pdf, .doc, .docx"
                        />
                        <div
                            onClick={handleFileUploaderClick}
                            className="flex flex-col items-center cursor-pointer"
                        >
                            <UploadIcon className="h-16 w-16 text-blue-500 mb-1" />
                            <span className="text-[10px] font-medium text-gray-700">
                                Upload your file
                            </span>
                            <span className="text-[10px] text-gray-500">
                                Click here or drag a file
                            </span>
                        </div>
                    </div>
                );
            default:
                return (
                    <input
                        type="text"
                        className="text-[#A4A4A4] w-full border border-[#E0E0E0] rounded px-1 focus:border-2 focus:border-[#00A7E1]"
                    />
                );
        }
    };
    return (
        <div
            style={element?.isRequired ? { opacity: "0.5" } : undefined}
            className="h-full w-full flex items-center justify-between rounded-lg"
        >
            <div className="h-full flex justify-center w-[53px] items-center rounded-l-lg bg-[#F1E9FF]">
                <div className="block">
                    {/* <ReactSVG src={element?.icon} /> */}
                    {element?.icon}
                </div>
                {/* <img
                    src={element?.icon}
                    className="block"
                    alt={`${element?.langValue} icon`}
                /> */}
            </div>
            <div className="flex-grow py-4 flex px-2 flex-col justify-center items-start">
                <h1
                    contentEditable={!element?.isRequired}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => handleChangeTitle(e.target.textContent || "")}
                    onPaste={(e) => e.preventDefault()}
                    className="p-1 my-1 focus:outline-[#00A7E1] focus:shadow-md focus:shadow-[#00A7E1] rounded-lg text-[14px] text-[#333232] font-[400]"
                >
                    {element?.langValue}
                </h1>
                {renderElement()}
            </div>
        </div>
    );
}
