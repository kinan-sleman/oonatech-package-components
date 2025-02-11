import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormIcon1 from "../icons/FormIcon1";
import FormIcon2 from "../icons/FormIcon2";
import FormIcon3 from "../icons/FormIcon3";
import FormIcon4 from "../icons/FormIcon4";
import FormIcon5 from "../icons/FormIcon5";
import FormIcon6 from "../icons/FormIcon6";
import FormIcon7 from "../icons/FormIcon7";
import FormIcon8 from "../icons/FormIcon8";
import FormIcon9 from "../icons/FormIcon9";
import FormIcon10 from "../icons/FormIcon10";
import FormIcon11 from "../icons/FormIcon11";
import FormIcon12 from "../icons/FormIcon12";
import FormIcon13 from "../icons/FormIcon13";
import FormIcon14 from "../icons/FormIcon14";
import FormIcon15 from "../icons/FormIcon15";
import FormIcon16 from "../icons/FormIcon16";
import FormIcon17 from "../icons/FormIcon17";
import FormIcon18 from "../icons/FormIcon18";
import FormIcon19 from "../icons/FormIcon19";
import FormIcon20 from "../icons/FormIcon20";
import FormIcon21 from "../icons/FormIcon21";
import FormIcon22 from "../icons/FormIcon22";
import FormIcon23 from "../icons/FormIcon23";
import FormIcon24 from "../icons/FormIcon24";
import FormIcon25 from "../icons/FormIcon25";
import FormIcon26 from "../icons/FormIcon26";
import FormIcon27 from "../icons/FormIcon27";
import FormIcon28 from "../icons/FormIcon28";
import FormIcon29 from "../icons/FormIcon29";
import FormIcon30 from "../icons/FormIcon30";
// Add more icons as needed
import Icons from "../../assets";
import { updateFormSettings } from "../../redux/reducers/formCreationReducer";
import { RootState } from "../../redux/store";
import MainModal from "../modals/Modal";
import MainInput from "../formElemnts/MainInput";
import UploaderIcon from "../icons/UploaderIcon";
// import { ReactSVG } from "react-svg";

interface ModalProps {
    setModal: (open: boolean) => void;
    modal: boolean;
}

const icons = [
    FormIcon1,
    FormIcon2,
    FormIcon3,
    FormIcon4,
    FormIcon5,
    FormIcon6,
    FormIcon7,
    FormIcon8,
    FormIcon9,
    FormIcon10,
    FormIcon11,
    FormIcon12,
    FormIcon13,
    FormIcon14,
    FormIcon15,
    FormIcon16,
    FormIcon17,
    FormIcon18,
    FormIcon19,
    FormIcon20,
    FormIcon21,
    FormIcon22,
    FormIcon23,
    FormIcon24,
    FormIcon25,
    FormIcon26,
    FormIcon27,
    FormIcon28,
    FormIcon29,
    FormIcon30,
];

export default function FormTypeSettingsModal({ setModal, modal }: ModalProps) {
    const {
        columnNumber,
        formName,
        description,
        color,
        screenViewing,
        policy,
        order,
        icon,
    } = useSelector((state: RootState) => state.formCreation);

    const [name, setName] = useState(formName);
    const [FormDescription, setFormDescription] = useState(description);
    const [columnsNumber, setColumnsNumber] = useState<string | number>(Number(columnNumber));
    const [formScreenViewing, setFormScreenViewing] = useState(screenViewing);
    const [formColor, setFormColor] = useState(color);
    const [formPolicy, setFormPolicy] = useState(policy);
    const [formOrder, setFormOrder] = useState(`${order}`)
    const [selectedIcon, setSelectedIcon] = useState(icon || "FormIcon1");
    const [showAllIcons, setShowAllIcons] = useState(false);
    const [uploadedIcon, setUploadedIcon] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedIcon(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        setName(formName);
        setFormOrder(`${order}`);
        setFormDescription(description);
        setColumnsNumber(Number(columnNumber));
        setFormScreenViewing(screenViewing);
        setFormColor(color);
        setShowAllIcons(false);
    }, [modal]);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(
            updateFormSettings({
                screenViewing: formScreenViewing,
                columnNumber: Number(columnsNumber),
                policy: formPolicy,
                order: Number(formOrder),
                icon: uploadedIcon || selectedIcon,
                formName: name,
                description: FormDescription,
                color: formColor,
            })
        );
        setModal(false);
    };
    const IconUploaderComponent = () => {
        return (
            <div className="flex flex-col gap-2">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        fileInputRef.current?.click();
                    }}
                    className="w-full my-3 text-[#333333] text-[12px] px-2 py-1 cursor-pointer rounded-sm flex flex-col justify-center items-center border border-dashed border-[#A4A4A4]"
                >
                    <div
                        className="h-10 w-10 object-contain"
                    >
                        {uploadedIcon ? (
                            <img
                                className="h-10 w-10 object-contain"
                                src={uploadedIcon}
                                alt="Upload Icon"
                            />
                        ) : (
                        <div className="h-10 w-10 object-contain">
                            {/* <ReactSVG src={Icons.UploaderIcon} /> */}
                            <UploaderIcon />
                        </div>
                        )}
                    </div>
                    {/* <img
                        className="h-10 w-10 object-contain"
                        src={uploadedIcon || Icons.UploaderIcon}
                        alt="Upload Icon"
                    /> */}
                    <span className="mt-2">Upload Icon</span>
                </button>
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </div>
        );
    };

    const IconSelectorComponent = () => {
        const visibleIcons = showAllIcons ? icons : icons.slice(0, 4);

        return (
            <div className="grid grid-cols-5 gap-4 overflow-y-auto overflow-x-hidden p-[10px] min-h-[70px] max-h-[200px]">
                {visibleIcons.map((IconComponent, index) => {
                    const iconName = `FormIcon${index + 1}`;
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedIcon(iconName);
                                setUploadedIcon(null);
                            }}
                            className={`flex justify-center transition-all duration-200 items-center cursor-pointer p-2transition-transform ${selectedIcon === iconName
                                ? "border-[1px] scale-110 border-blue-500 rounded-lg p-1"
                                : ""
                                } hover:scale-110`}
                        >
                            <IconComponent />
                        </div>
                    );
                })}
                {!showAllIcons && (
                    <div
                        className="flex justify-center items-center cursor-pointer p-2 rounded-lg shadow-md bg-gray-200"
                        onClick={() => setShowAllIcons(true)}
                    >
                        <span className="text-2xl">...</span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <section>
            <MainModal
                handleSave={handleSubmit}
                handleClose={() => setModal(false)}
                handleDiscard={() => setModal(false)}
                title="Form Settings"
                check={modal}
                cls={`!w-[550px] min-h-[450px]`}
            >
                <div className="w-full p-3">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3 !border-dashed !border-[3px] p-3">
                            <MainInput
                                inputBorder
                                placeholder="Column Number"
                                label="Column Number"
                                required
                                value={`${columnsNumber}`}
                                onChange={(value, e) => setColumnsNumber(value as string)}
                            />
                            <MainInput
                                inputBorder
                                placeholder="Form Policy"
                                label="Form Policy"
                                value={formPolicy}
                                onChange={(value, e) => setFormPolicy(value as string)}
                            />
                            <MainInput
                                inputBorder
                                type="searchableSelect"
                                label   ="Screen Viewing"
                                required
                                options={[
                                    { value: "center", content: "Center Of Screen" },
                                    { value: "left", content: "Left Of Screen" },
                                    { value: "right", content: "Right Of Screen" },
                                    { value: "full", content: "Full Screen" },
                                ]}
                                value={formScreenViewing}
                                onChange={(value) => {
                                    setFormScreenViewing(value as string);
                                }}
                            />
                            <MainInput
                                inputBorder
                                type={"text"}
                                placeholder="Form Order"
                                label="Form Order"
                                value={formOrder}
                                onChange={(value, e) => setFormOrder(value as string)}
                            />
                        </div>
                        <div className="flex flex-col gap-3 !border-dashed !border-[3px] p-3">
                            <h3 className="font-bold">Self Services Settings</h3>
                            {/* Combined Icon Uploader and Selector */}
                            <div className=" rounded-lg shadow-md p-2  flex flex-col gap-4">
                                <IconUploaderComponent />
                                <IconSelectorComponent />
                            </div>

                            <div className="mt-2">
                                <MainInput
                                    inputBorder
                                    placeholder="Form Name"
                                    label="Form Name"
                                    value={name}
                                    onChange={(value) => setName(value as string)}
                                />
                            </div>
                            <MainInput
                                inputBorder
                                type="textarea"
                                label="Description"
                                placeholder="Description here ... "
                                value={FormDescription}
                                onChange={(value) => setFormDescription(value as string)}
                                required
                                row={4}
                            />
                            <div className="flex items-center gap-2">
                                <label className="text-gray-700 text-[12px] ml-3 text-[#666]">
                                    Form Color
                                </label>
                                <input
                                    type="color"
                                    value={formColor}
                                    onChange={(e) => setFormColor(e.target.value)}
                                    className="size-[30px] ml-6 p-1 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </MainModal>
        </section>
    );
}
