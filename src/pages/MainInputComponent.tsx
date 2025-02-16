import React, { useState } from "react";
import MainInput from "../components/formElemnts/MainInput";
import MultiSelect from "../components/formElemnts/MultiSelectDropdown";
import searchIcon from "../assets/search.svg";

function MainInputComponent() {
    const [searchQuery, setSearchQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("The search field is required");
    const [name, setName] = useState("");
    const [searchableSelectError, setSearchableSelectError] = useState("");

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [multiSelectError, setMultiSelectError] = useState("");

    const options = [
        { id: "1", title: "Item 1" },
        { id: "2", title: "Item 2" },
        { id: "3", title: "Item 3" },
        { id: "4", title: "Item 4" },
    ];

    const propertyNames = [
        { id: 1, name: "Date" },
        { id: 2, name: "Email" },
        { id: 3, name: "Password" },
        { id: 4, name: "File" },
    ];

    const handleMultiSelectChange = (selected: string[]) => {
        setSelectedItems(selected);
        setMultiSelectError(selected.length > 0 ? "" : "At least one item must be selected.");
    };

    const handleSearchableSelectChange = (value: string) => {
        setName(value);
        setSearchableSelectError(value ? "" : "Please select an option.");
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
                label="text ..."
                error={errorMessage}
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
                type="password"
                placeholder="Search ..."
                required={true}
                error={errorMessage}
                label="password ..."
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
                type="number"
                placeholder="Search ..."
                required={true}
                error={errorMessage}
                label="number"
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
                type="date"
                placeholder="Search ..."
                required={true}
                error={errorMessage}
                label="date"
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
                type="time"
                placeholder="Search ..."
                required={true}
                error={errorMessage}
                label="time"
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
                type="datetime-local"
                placeholder="Search ..."
                required={true}
                error={errorMessage}
                label="datetime-local"
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
                type="textarea"
                placeholder="Search ..."
                required={true}
                error={errorMessage}
                label="textarea"
            />

            <div className="mt-2"></div>

            <MainInput
                inputBorder
                value={name}
                label={"searchableSelect"}
                placeholder={"Name"}
                onChange={handleSearchableSelectChange}
                type={"searchableSelect"}
                options={propertyNames?.map((property) => ({
                    value: property.name,
                    content: property.name,
                }))}
                error={searchableSelectError} // ✅ Display error if no selection
            />

            <div className="mt-2"></div>

            <MainInput
                inputBorder
                value={name}
                label={"select"}
                placeholder={"Name"}
                onChange={handleSearchableSelectChange}
                type={"select"}
                options={propertyNames?.map((property) => ({
                    value: property.name,
                    content: property.name,
                }))}
                error={searchableSelectError} // ✅ Display error if no selection
            />

            <div className="mt-2"></div>

            <MainInput
                inputBorder
                value={name}
                label={"searchableMultiSelect"}
                placeholder={"Name"}
                onChange={handleSearchableSelectChange}
                type={"searchableMultiSelect"}
                options={propertyNames?.map((property) => ({
                    value: property.name,
                    content: property.name,
                }))}
                error={searchableSelectError} // ✅ Display error if no selection
            />

            <div className="mt-2"></div>

            <MainInput
                inputBorder
                value={name}
                label={"multiSelect"}
                placeholder={"Name"}
                onChange={handleSearchableSelectChange}
                type={"multiSelect"}
                options={propertyNames?.map((property) => ({
                    value: property.name,
                    content: property.name,
                }))}
                error={searchableSelectError} // ✅ Display error if no selection
            />

            <div className="mt-4"></div>

            <MultiSelect
                placeholder="Select items"
                data={options}
                selected={selectedItems}
                onChange={handleMultiSelectChange}
                error={multiSelectError} // ✅ Display error for MultiSelect
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
