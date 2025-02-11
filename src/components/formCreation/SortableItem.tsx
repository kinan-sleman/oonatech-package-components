import { useSortable } from "@dnd-kit/sortable";
import React, { useState, useEffect, useMemo, SetStateAction } from "react";
import { CSS } from "@dnd-kit/utilities";
import Icons from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import {
    cloneItem,
    removeItem,
    updateColSpan,
    updateRowSpan,
} from "../../redux/reducers/formCreationReducer";
import { RootState } from "../../redux/store";
import CustomFormTypeElements from "./CustomFormTypeElements";
import CloneIcon from "../icons/CloneIcon";
import SettingsIcon from "../icons/SettingsIcon";
import DeleteIcon from "../icons/DeleteIcon";
import FieldDots from "../icons/FieldDots";
// import { ReactSVG } from "react-svg";
import FieldSettingsModal from "./FieldSettingsModal";

export default function SortableItem({
    id,
    isActive,
    onMouseEnter,
    onMouseLeave,
    setFormState,
    dragging,
}: {
    id: string;
    isActive: boolean;
    setFormState: React.Dispatch<React.SetStateAction<any>>,
    dragging: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}) {
    const { droppedItems } = useSelector(
        (state: RootState) => state.formCreation
    );
    const item = droppedItems.find((el: any) => el.id === id);

    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const [modal, setModal] = useState<boolean | undefined>(false);
    const [colSpanOpacity, setColSpanOpacity] = useState(0.6);
    const [rowSpanOpacity, setRowSpanOpacity] = useState(0.6);

    const dispatch = useDispatch();

    const style = useMemo(() => {
        let additionalStyles = {};

        if (item?.isRequired) {
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
            transition,
            border: isActive ? "1px solid #00A7E1" : "none",
            boxShadow: isActive ? "0px 1px 10px 0px #00A7E1" : "none",
            gridColumn: `span ${item?.colSpan}`,
            gridRow: `span ${item?.rowSpan}`,
            zIndex: dragging ? 999 : "auto",
            ...additionalStyles,
        };
    }, [transform, transition, isActive, item, dragging]);

    const handleDelete = () => {
        dispatch(removeItem(id));
    };

    const handleClone = () => {
        dispatch(cloneItem({ id }));
    };

    return (
        <div
            ref={setNodeRef}
            onMouseEnter={onMouseEnter}
            style={style}
            className={`relative shadow-sm rounded-[10px] flex flex-grow items-center ${isActive ? "active:border-2" : ""
                }`}
        >
            <FieldSettingsModal setFormState={setFormState}
                id={id} setModal={setModal} modal={modal} />
            {!item?.isRequired && (
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
            )}
            {!item?.isRequired && (
                <>
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
                                    updateColSpan({ id: item?.id || "", colSpan: Number(e.target.textContent) })
                                );
                                setColSpanOpacity(0.6);
                            }}
                        >
                            {item?.colSpan}
                        </span>
                    </div>
                    <div
                        className={`flex flex-col absolute top-[50%] translate-y-[-50%] left-[-30px] ${isActive ? "block" : "hidden"
                            }`}
                        onMouseEnter={onMouseEnter}
                    >
                        <span
                            className="bg-[#eee] rounded-[50%] size-[25px] text-center"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            style={{ opacity: rowSpanOpacity }}
                            onFocus={() => setRowSpanOpacity(1)}
                            onBlur={(e) => {
                                dispatch(
                                    updateRowSpan({ id: item?.id || "", rowSpan: Number(e.target.textContent) })
                                );
                                setRowSpanOpacity(0.6);
                            }}
                        >
                            {item?.rowSpan}
                        </span>
                    </div>
                </>
            )}
            <CustomFormTypeElements
                id={id}
                isActive={isActive}
                dragging={dragging}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
            {item?.isRequired ?? false ? (
                <div className="flex px-3 justify-center basis-[34px] items-center h-full">
                    {/* <ReactSVG src={Icons.FieldDots} /> */}
                    <FieldDots />
                    {/* <img src={Icons.FieldDots} alt="Field Icon" /> */}
                </div>
            ) : (
                <div
                    {...listeners}
                    {...attributes}
                    className="flex px-3 justify-center basis-[34px] items-center h-full"
                >
                    {/* <ReactSVG src={Icons.FieldDots} /> */}
                    <FieldDots />
                    {/* <img src={Icons.FieldDots} alt="Field Icon" /> */}
                </div>
            )}
        </div>
    );
}
