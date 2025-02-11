import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useMemo, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../redux/store";
import {
    addContainerItem,
    removeItem,
    updateContainerItemsOrder,
} from "../../redux/reducers/formCreationReducer";
import { useUUID } from "./UUIDContext";
import CustomFormTypeChild from "./CustomFormTypeChild";

// ContainerComponent: Responsible for rendering a droppable container for elements and handling drag-and-drop interactions
export default function ContainerComponent({
    element,
    isActive,
    onMouseEnter,
    onMouseLeave,
    dragging,
}: {
    element: any; // Define a more specific type if possible
    isActive: boolean;
    dragging: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}) {
    const dispatch = useDispatch();
    const { uuid, containerUuid } = useUUID();
    const [isDropped, setIsDropped] = useState(false);
    const [activeItemId, setActiveItemId] = useState<string | null>(null);
    // Hook to make the container droppable
    const { setNodeRef, isOver } = useDroppable({
        id: element?.id,
        data: { index: element?.index },
    });
    // Redux selectors to access form elements from the store
    const { formElements, basicElements, droppedItems } = useSelector(
        (state: RootState) => state.formCreation
    );
    useEffect(() => {
        dispatch(removeItem(uuid));
    }, [isDropped]);
    // Helper function to find an item by its ID
    const getItemById = (id: string) => {
        const elementsArray = [...formElements, ...basicElements];
        return elementsArray.find((el) => el.id === id);
    };
    // Handle the drop event and add the dropped item to the container
    const handleDrop = async (e: React.DragEvent) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const item = getItemById(id);
        setIsDropped((prev) => !prev);
        if (item) {
            const newItem = {
                ...item,
                id: uuidv4(),
                hasParent: true,
                colSpan: item.colSpan || 1,
                rowSpan: item.rowSpan || 1,
                containerId: element?.id,
                uuid: uuidv4(),
                isRepeat: false,
                isMandatory: false,
                isUniqueConstraint: false,
            };
            const dropIndex = element?.droppedItems?.findIndex(
                (droppedItem: any) => droppedItem.id === id
            );
            if (dropIndex !== -1) {
                const updatedItems = [
                    ...element?.droppedItems?.slice(0, dropIndex + 1),
                    newItem,
                    ...element?.droppedItems?.slice(dropIndex + 1),
                ];
                dispatch(
                    updateContainerItemsOrder({ containerId: element?.id, updatedItems })
                );
            } else {
                if (newItem?.type !== "container") {
                    await dispatch(addContainerItem({ containerId: element?.id, newItem }));
                }
            }
        }
    };

    const handleItemClick = (id: string) => {
        setActiveItemId(id);
    };

    return (
        <div
            ref={setNodeRef}
            className={`containers !grid grid-cols-12 gap-8 border-[2px] w-full min-h-[100px] border-dashed ${isOver ? "highlight" : ""
                }`}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            {/* Render dropped items */}
            {element?.droppedItems?.map((child: any) => (
                <CustomFormTypeChild
                    container={element}
                    key={child?.id}
                    id={child?.id}
                    isActive={child?.id === activeItemId}
                    onMouseEnter={() => handleItemClick(child?.id)}
                    onMouseLeave={() => setActiveItemId(null)}
                    dragging={dragging}
                />
            ))}
        </div>
    );
}
