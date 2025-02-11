import React, { useEffect } from "react";
import { UUIDProvider } from "./UUIDContext";
import ProviderComponent from "../../redux/provider";
import DropArea from "./DropArea";
import ElementsList from "./ElementsList";

export interface ItemElement {
    columnNumber?: any;
    screenViewing?: string;
    policy?: string;
    order?: string | number;
    droppedItems?: any[];
    formName?: string;
    name?: string;
    description?: string;
    color?: string;
    icon?: string;
    jsonForm?: string;
}

function FormCreation({
    title,
    item,
    handleSave,
    handleDiscard,
    formState = {
        formName: "Sample Form",
        name: "Sample Form",
        droppedItems: [],
        columnNumber: 12,
        description: "A sample form for testing purposes",
        color: "#3498db",
        order: "1",
        policy: "open",
        screenViewing: "default",
    },
    setFormState,
    paths = "/ Settings / System Settings",
    isNew = true,
    defaultItems = [],
    hideDeleteAllIcon = false,
}: {
    title: string;
    item: ItemElement;
    formState: ItemElement;
    setFormState: React.Dispatch<React.SetStateAction<any>>;
    handleSave: (formState: any) => void;
    handleDiscard: (formState: any) => void;
    paths: string;
    isNew?: boolean;
    defaultItems: any[];
    hideDeleteAllIcon: boolean;
}) {

    const wrappedHandleSave = () => handleSave(formState);
    const wrappedHandleDiscard = () => handleDiscard(formState);

    return (
        <div className="flex justify-around items-start mt-[20px]">
            <ProviderComponent>
                <UUIDProvider>
                    <ElementsList />
                    <DropArea
                        handleSave={wrappedHandleSave}
                        setFormState={setFormState}
                        handleDiscard={wrappedHandleDiscard}
                        paths={paths}
                        item={item}
                        title={title}
                        isNew={isNew}
                        defaultItems={defaultItems}
                        hideDeleteAllIcon={hideDeleteAllIcon}
                    />
                </UUIDProvider>
            </ProviderComponent>
        </div>
    );
}

export default FormCreation;
