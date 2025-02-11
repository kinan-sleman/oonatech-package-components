import React, { useState, useEffect } from "react";
import Icons from "../../assets";
import {
    addItem,
    clearForm,
    updateFormName,
    setFormDetails,
    updateItemsOrder,
    Element,
} from "../../redux/reducers/formCreationReducer";
import { AppDispatch, RootState } from "../../redux/store";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { v4 as uuidv4 } from "uuid";
import { json, useParams } from "react-router-dom";
import SortableItem from "./SortableItem";
import FormTypeSettingsModal from "./FormTypeSettingsModal";
import { useUUID } from "./UUIDContext";
// import PageTitle, { pathData } from "./PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { ItemElement } from ".";
import PageTitle from "./PageTitle";
import SettingsIcon from "../icons/SettingsIcon";
import DeleteIcon from "../icons/DeleteIcon";
// import { ReactSVG } from "react-svg";

export default function DropArea({
    item,
    paths,
    setFormState,
    handleSave,
    handleDiscard,
    title,
    isNew,
    defaultItems,
    hideDeleteAllIcon,
}: {
    item: ItemElement;
    paths: string;
    setFormState: React.Dispatch<React.SetStateAction<any>>,
    handleSave: () => void;
    handleDiscard: () => void;
    title: string;
    isNew?: boolean;
    defaultItems: any[];
    hideDeleteAllIcon?: boolean;
}) {
    const columnClass: { [key: number]: string } = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
        9: "grid-cols-9",
        10: "grid-cols-10",
        11: "grid-cols-11",
        12: "grid-cols-12",
    };
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string }>();
    const [draggingItemId, setDraggingItemId] = useState<string | null>(null);
    const [formTypeModal, setFormTypeModal] = useState(false);
    const [activeItemId, setActiveItemId] = useState<string | null>(null);
    const { setUuid, setContainerUuid } = useUUID();
    const { formElements, basicElements, droppedItems, columnNumber, formName } =
        useSelector((state: RootState) => state.formCreation);
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const item = getItemById(id);

        if (item) {
            const newUUID = uuidv4();
            if (item?.type !== "container") {
                setUuid(newUUID);
            } else {
                setContainerUuid(newUUID);
            }
            const newItem = {
                ...item,
                id: newUUID,
                colSpan: item.colSpan || 1,
                rowSpan: item.rowSpan || 1,
            };

            const dropIndex = droppedItems?.findIndex(
                (droppedItem: any) => droppedItem.id === id
            );
            if (dropIndex !== -1) {
                const updatedItems = [
                    ...droppedItems?.slice(0, dropIndex + 1),
                    newItem,
                    ...droppedItems?.slice(dropIndex + 1),
                ];

                dispatch(updateItemsOrder(updatedItems));
            } else {
                dispatch(addItem(newItem));
            }
        }
    };

    const formCreationState = useSelector((state:RootState) => state.formCreation);
    useEffect(() => {
        if(formCreationState != undefined) {
            setFormState(formCreationState);
        }
    }, [formCreationState]);
    
    useEffect(() => {
        if (typeof item?.jsonForm === "string" && item?.jsonForm.trim() !== "") {
            try {
                const formObject = JSON.parse(item?.jsonForm);
                if (formObject && typeof formObject === "object") {
                    dispatch(
                        setFormDetails({
                            name: item?.name,
                            formName: item?.formName,
                            ...formObject,
                        })
                    );
                    setFormState((prevState: any) => ({
                        ...prevState,
                        name: item?.name || prevState.name,
                        formName: item?.formName || prevState.formName,
                        ...formObject,
                    }));
                } else {
                    console.error(
                        "Invalid formObject structure or not a JSON object:",
                        formObject
                    );
                }
            } catch (error) {
                console.error("Error parsing jsonForm:", error);
            }
        } else {
            dispatch(
                setFormDetails({
                    name: item?.name || "",
                    formName: item?.formName || "",
                    description: item?.description || "",
                    screenViewing: item?.screenViewing || "",
                    policy: item?.policy || "",
                    order: item?.order || 0,
                    color: item?.color || "",
                    icon: item?.icon || "",
                    columnNumber: item?.columnNumber || undefined,
                    droppedItems: item?.droppedItems || [],
                })
            );
            setFormState((prevState: any) => ({
                ...prevState,
                name: item?.name || prevState.name,
                formName: item?.formName || prevState.formName,
                description: item?.description || prevState.description,
                screenViewing: item?.screenViewing || prevState.screenViewing,
                policy: item?.policy || prevState.policy,
                order: item?.order || prevState.order,
                color: item?.color || prevState.color,
                icon: item?.icon || prevState.icon,
                columnNumber: item?.columnNumber || prevState.columnNumber,
                droppedItems: item?.droppedItems || prevState.droppedItems,
            }));
        }
        if (isNew && defaultItems && defaultItems.length > 0) {
            const newUUID = uuidv4();
            defaultItems.forEach((requiredItem) => {
                const newItem = {
                    ...requiredItem,
                    id: newUUID,
                    isRequired: true, 
                };
                dispatch(addItem(newItem));
            });
        }
    }, [item]);
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDelete = () => {
        dispatch(clearForm());
    };

    const getItemById = (id: string) => {
        const elementsArray = [...formElements, ...basicElements];
        return elementsArray.find((el) => el.id === id);
    };

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = droppedItems?.findIndex((item: any) => item.id === active.id);
            const newIndex = droppedItems?.findIndex((item: any) => item.id === over?.id);
            const reorderedItems = arrayMove(droppedItems, oldIndex, newIndex);

            dispatch(updateItemsOrder(reorderedItems));
        }
        setDraggingItemId(null);
    };

    const handleItemClick = (id: string) => {
        setActiveItemId(id);
    };

    const handleClick = (e: any) => {
        e.preventDefault();
        handleSave();
    };

    return (
        <div className="flex-grow flex flex-col">
            <div className="flex !text-[12px] justify-between items-center">
                <div className={`relative  mb-2 ml-[40px]`}>
                    <PageTitle
                        isBack={false}
                        label={`${!isNew ? "Edit" : "Add"} ${title}`}
                        path={paths}
                    />
                </div>
                <div className="flex justify-end items-center gap-2">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleDiscard();
                        }}
                        className="bg-[#ff5e5e] text-sm text-white font-normal w-[109px] h-[40px] rounded-lg shadow-md hover:bg-red-500 transition-colors duration-300"
                    >
                        Discard
                    </button>
                    <button
                        onClick={(e) => {
                            handleClick(e);
                        }}
                        className="bg-[#00A7E1] text-sm text-white font-normal w-[109px] h-[40px] rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300 mr-[50px]"
                    >
                        Save
                    </button>
                </div>
            </div>
            <div
                className="flex-grow flex justify-center items-start ml-[40px] min-h-[100vh] transition-all duration-700 ease-in-out right-16"
                style={{ backgroundImage: `url(${Icons.gridBackgroundForm})` }}
            >
                <FormTypeSettingsModal
                    setModal={setFormTypeModal}
                    modal={formTypeModal}
                />
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    style={{ width: "calc(100% - 100px)", minWidth: "820px" }}
                    className="relative flex flex-col justify-between min-h-[573px] p-16 bg-white shadow-lg rounded-lg"
                >
                    <h1
                        contentEditable="true"
                        suppressContentEditableWarning={true}
                        onBlur={(e) => {
                            dispatch(updateFormName(e.target.textContent));
                        }}
                        className="text-[18px] font-[700] p-1 focus:outline-[#00A7E1] focus:shadow-md focus:shadow-[#00A7E1] rounded-lg text-[#333333] absolute top-[20px] left-[20px]"
                    >
                        {formName}
                    </h1>
                    <div className={`flex flex-col absolute top-0 right-[-40px]`}>
                        <div
                            onClick={() => {
                                setFormTypeModal(true);
                            }}
                            className="size-[36px] cursor-pointer"
                        >
                            {/* <ReactSVG src={Icons.settingsIcon}
                                beforeInjection={(svg) => {
                                    svg.classList.add('size-[36px]');
                                }} /> */}
                            <SettingsIcon large={true} />
                        </div>
                        {/* <img
                            onClick={() => {
                                setFormTypeModal(true);
                            }}
                            className="size-[36px] cursor-pointer"
                            src={settingsIcon}
                            alt=""
                        /> */}
                        {!hideDeleteAllIcon && <div
                            className="size-[36px] cursor-pointer"
                            onClick={handleDelete}
                        >
                            {/* <ReactSVG
                                src={Icons.deleteIcon}
                                beforeInjection={(svg) => {
                                    svg.classList.add('size-[36px]');
                                }}
                            /> */}
                            <DeleteIcon large={true} />
                        </div>}
                        {/* <img
                            className="size-[36px] cursor-pointer"
                            onClick={handleDelete}
                            src={deleteIcon}
                            alt=""
                        /> */}
                    </div>
                    <DndContext
                        // collisionDetection={closestCenter}
                        onDragStart={({ active }: { active: any }) =>
                            setDraggingItemId(active.id)
                        }
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={droppedItems?.map((item: any) => item.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            <div
                                className={`!grid ${columnClass[columnNumber]} gap-8`}
                            >
                                {droppedItems?.map((item: any) => (
                                    <SortableItem
                                        key={item.id}
                                        setFormState={setFormState}
                                        id={item.id}
                                        isActive={item.id === activeItemId}
                                        onMouseEnter={() => handleItemClick(item.id)}
                                        onMouseLeave={() => setActiveItemId(null)}
                                        dragging={draggingItemId === item.id}
                                    />
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>
                </div>
            </div>
        </div>
    );
}
