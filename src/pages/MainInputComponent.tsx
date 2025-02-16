import React, { useState } from "react";
import MainInput from "../components/formElemnts/MainInput";
import MultiSelect from "../components/formElemnts/MultiSelectDropdown";
import searchIcon from "../assets/search.svg";

function MainInputComponent() {
    const [searchQuery, setSearchQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("The search field is required");

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [multiSelectError, setMultiSelectError] = useState("");
    const options = [
        { id: "1", title: "Item 1" },
        { id: "2", title: "Item 2" },
        { id: "3", title: "Item 3" },
        { id: "4", title: "Item 4" },
    ];

    const handleMultiSelectChange = (selected: string[]) => {
        setSelectedItems(selected);
        setMultiSelectError(selected.length > 0 ? "" : "At least one item must be selected.");
    };

    return (
        <>
            <MainInput
                value={searchQuery}
                onChange={(value) => setSearchQuery(value as string)}
                height="32px"
                onIconClick={() => searchQuery !== "" && console.log("Searching:", searchQuery)}
                icon={searchIcon}
                inputBorder={false}
                type="text"
                placeholder="Search ..."
                required={true}
                label="Search ..."
                inputBorder
            />
            <div className="mt-2"></div>
            <MainInput
                value={searchQuery}
                onChange={(value) => {
                    setSearchQuery(value as string);
                    setErrorMessage(value !== "" ? "" : "The search field is required");
                }}
                height="32px"
                onIconClick={() => searchQuery !== "" && console.log("Searching:", searchQuery)}
                icon={searchIcon}
                inputBorder={false}
                type="text"
                placeholder="Search ..."
                required={true}
                error={errorMessage}
                label="Search ..."
            />
            <div className="mt-2"></div>
            <MainInput
                value={searchQuery}
                onChange={(value) => {
                    setSearchQuery(value as string);
                    setErrorMessage(value !== "" ? "" : "The search field is required");
                }}
                height="32px"
                onIconClick={() => searchQuery !== "" && console.log("Searching:", searchQuery)}
                icon={searchIcon}
                inputBorder={true}
                type="text"
                placeholder="Search ..."
                required={true}
                error={errorMessage}
                label="Search ..."
            />

            <div className="mt-4"></div>
            <MultiSelect
                placeholder="Select items"
                data={options}
                selected={selectedItems}
                onChange={handleMultiSelectChange}
                error={multiSelectError}
            />

            <div className="mt-4"></div>
            <MultiSelect
                placeholder="Select items"
                data={options}
                selected={selectedItems}
                onChange={handleMultiSelectChange}
            />
        </>
    );
}

export default MainInputComponent;
