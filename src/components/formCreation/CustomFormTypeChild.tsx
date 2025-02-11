import React, { useEffect, useMemo, useRef, useState } from "react";
import Icons from "../../assets";
import UploadIcon from "@mui/icons-material/Upload";
import { v4 as uuidv4 } from "uuid";
import {
    cloneContainerItem,
    Element,
    removeContainerItem,
    removeItem,
    setContainerOptionsItem,
    updateContainerColSpan,
    updateContainerFieldColor,
    updateContainerFieldTitle,
    updateContainerImgSrc,
    updateContainerRowSpan,
} from "../../redux/reducers/formCreationReducer";
import { useDispatch } from "react-redux";
// import { ReactSVG } from "react-svg";
import ContainerElement from "./ContainerElement";
import { Transform } from "@dnd-kit/utilities";
import { CSS } from "@dnd-kit/utilities";
import FieldSettingsModal from "./FieldSettingsModal";
import { useSortable } from "@dnd-kit/sortable";
import DeleteIcon from "../icons/DeleteIcon";
import { Edit } from "@mui/icons-material";
import ImgIcon from "../icons/ImgIcon";
import CloneIcon from "../icons/CloneIcon";
import SettingsIcon from "../icons/SettingsIcon";
import EditIcon from "../icons/EditIcon";

export default function CustomFormTypeChild({
    container,
    id,
    isActive,
    onMouseEnter,
    onMouseLeave,
    dragging,
}: {
    container: Element;
    id: string;
    isActive: boolean;
    dragging: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}) {
    useEffect(() => {
        removeItem(id);
    }, [id]);
    const element = container?.droppedItems?.find((el) => el.id === id);
    const [options, setOptions] = useState(element?.resourceData ?? []);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const colorInputRef = useRef<HTMLInputElement>(null);
    const fileUploaderInput = useRef<HTMLInputElement>(null);
    const [colSpanOpacity, setColSpanOpacity] = useState(0.6);
    const [rowSpanOpacity, setRowSpanOpacity] = useState(0.6);
    const [selectedImage, setSelectedImage] = useState<string | null>(
        element?.src
    );
    const dispatch = useDispatch();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
            dispatch(
                updateContainerImgSrc({ containerId: container?.id, id: element?.id, src: URL.createObjectURL(file) })
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
            setContainerOptionsItem({
                containerId: container?.id,
                id: element?.id,
                options: updatedOptions,
            })
        );
    };

    const [headlineColor, setHeadlineColor] = useState(element?.color || "");
    const [modal, setModal] = useState<boolean>();

    const handleChangeColor = (e: any) => {
        setHeadlineColor(e.target.value);
        dispatch(updateContainerFieldColor({ containerId: container?.id, id: element?.id, color: e.target.value }));
    };
    const handleChangeTitle = (langValue: any) => {
        dispatch(updateContainerFieldTitle({ containerId: container?.id, id: element?.id, langValue }));
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
                                            setContainerOptionsItem({
                                                containerId: container?.id,
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
                                    setContainerOptionsItem({
                                        containerId: container?.id,
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
                                            dispatch(setContainerOptionsItem({
                                                containerId: container?.id,
                                                id: element?.id, options
                                            }));
                                        }}
                                    >
                                        {/* <img src={Icons.deleteIcon} alt="" /> */}
                                        {/* <ReactSVG src={Icons.deleteIcon} /> */}
                                        <DeleteIcon />
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
                                dispatch(setContainerOptionsItem({
                                    containerId: container?.id,
                                    id: element?.id, options
                                }));
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
                            // <img
                            //     className="cursor-pointer mx-auto"
                            //     onClick={handleImageClick}
                            //     style={{
                            //         width: element?.width || "",
                            //         height: element?.height || "",
                            //         objectFit: element?.fit,
                            //     }}
                            //     src={selectedImage || Icons.imgIcon} // Show the selected image or fallback to Icons.imgIcon
                            //     alt="Upload Icon"
                            // />
                            <div className="cursor-pointer mx-auto"
                                onClick={handleImageClick}
                                style={{
                                    width: element?.width || "",
                                    height: element?.height || "",
                                    objectFit: element?.fit,
                                }}>
                                {/* <ReactSVG src={selectedImage || Icons.imgIcon} /> */}
                                <ImgIcon />                                
                            </div>
                        ) : (
                            <div
                                className="h-[70px] flex w-full px-3 justify-center border-[1px] border-[#E0E0E0] rounded-lg cursor-pointer"
                                onClick={handleImageClick}
                            >
                                {/* <ReactSVG src={selectedImage || Icons.imgIcon} /> */}
                                <ImgIcon />                                
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
                                            dispatch(setContainerOptionsItem({
                                                containerId: container?.id,
                                                id: element?.id, options
                                            }));
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
                                dispatch(setContainerOptionsItem({
                                    containerId: container?.id,
                                    id: element?.id, options
                                }));
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
    // Sortable hooks for drag-and-drop within the container
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: element.id });
    // Dynamic styles for the container based on item properties
    const containerStyle = useMemo(() => {
        let additionalStyles = {};
        if (element?.isRequired) {
            additionalStyles = {
                borderColor: null,
                border: null,
                boxShadow: null,
                backgroundColor: null,
                opacity: 1,
            };
        }
        return {
            transform: CSS.Transform.toString(transform),
            border: isActive ? "1px solid #00A7E1" : "none",
            boxShadow: isActive ? "0px 1px 10px 0px #00A7E1" : "none",
            gridColumn: `span ${element?.colSpan}`,
            gridRow: `span ${element?.rowSpan}`,
            zIndex: dragging ? 999 : "auto",
            opacity: element?.isRequired ? "0.5" : "1",
            ...additionalStyles,
        };
    }, [transform, isActive, element, dragging]);
    const handleClone = () => {
        dispatch(
            cloneContainerItem({ containerId: container?.id, id: element?.id })
        );
    };
    const handleDelete = () => {
        dispatch(
            removeContainerItem({ containerId: container?.id, id: element?.id })
        );
    };
    return (
        <div
            ref={setNodeRef}
            style={containerStyle}
            className="h-full w-full flex items-center justify-between rounded-lg relative"
            onMouseEnter={onMouseEnter}
        >
            <FieldSettingsModal
                container={container}
                id={element?.id}
                setModal={setModal}
                modal={modal}
            />
            <div
                className={`flex flex-col absolute top-0 right-[-30px] ${isActive ? "block" : "hidden"
                    }`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div
                    className="cursor-pointer"
                    onClick={handleClone}>
                    {/* <ReactSVG src={Icons.cloneIcon} /> */}
                    <CloneIcon />
                </div>
                {/* <img
                    className="cursor-pointer"
                    onClick={handleClone}
                    src={Icons.cloneIcon}
                    alt=""
                /> */}
                <div
                    className="cursor-pointer"
                    onClick={() => setModal(true)}
                    >
                    {/* <ReactSVG src={Icons.settingsIcon} /> */}
                    <SettingsIcon />
                </div>
                {/* <img
                    className="cursor-pointer"
                    onClick={() => setModal(true)}
                    src={Icons.settingsIcon}
                    alt=""
                /> */}
                <div
                    className="cursor-pointer"
                    onClick={handleDelete}
                    >
                    {/* <ReactSVG src={Icons.deleteIcon} /> */}
                    <DeleteIcon />
                </div>
                {/* <img
                    className="cursor-pointer"
                    onClick={handleDelete}
                    src={Icons.deleteIcon}
                    alt=""
                /> */}
            </div>
            {/* Row Span control */}
            <div
                className={`flex flex-col absolute top-[50%] translate-y-[-50%] left-[-30px] ${isActive ? "block" : "hidden"
                    }`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span
                    className="bg-[#eee] rounded-[50%] size-[25px] text-center"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{ opacity: rowSpanOpacity }}
                    onFocus={() => setRowSpanOpacity(1)}
                    onBlur={(e) => {
                        dispatch(
                            updateContainerRowSpan({
                                containerId: container?.id,
                                id: element?.id,
                                rowSpan: Number(e.target.textContent),
                            })
                        );
                        setRowSpanOpacity(0.6);
                    }}
                >
                    {element?.rowSpan}
                </span>
            </div>
            {/* Column Span control */}
            <div
                className={`flex flex-col absolute top-[-30px] left-[50%] translate-x-[-50%] ${isActive ? "block" : "hidden"
                    }`}
                onMouseEnter={onMouseEnter}
            >
                <span
                    className="bg-[#eee] rounded-[50%] size-[25px] text-center"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{ opacity: colSpanOpacity }}
                    onFocus={() => setColSpanOpacity(1)}
                    onBlur={(e) => {
                        dispatch(
                            updateContainerColSpan({
                                containerId: container?.id,
                                id: element?.id,
                                colSpan: Number(e.target.textContent),
                            })
                        );
                        setColSpanOpacity(0.6);
                    }}
                >
                    {element?.colSpan}
                </span>
            </div>
            <div className="h-full flex justify-center w-[53px] items-center rounded-l-lg bg-[#F1E9FF]">
                <div
                    className="block"
                    onClick={handleDelete}
                    >
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
