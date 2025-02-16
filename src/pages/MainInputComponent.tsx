import React, { useState } from "react";
import MainInput from "../components/formElemnts/MainInput.tsx"
import serachIcon from "../assets/search.svg"
function MainInputComponent() {
	const [searchQuery, setSearchQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("The search field is required");
	return <>
        <MainInput
            value={searchQuery}
            onChange={(value) => setSearchQuery(value as string)}
            height="32px"
            onIconClick={() => searchQuery !== "" && handleSearchQuery()}
            icon={serachIcon}
            inputBorder={false}
            type="text"
            // iconSize="22px"
            placeholder={"Search ..."}
            required={true}
            label="Search ..."
            // error={"the search field is required"}
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
            onIconClick={() => searchQuery !== "" && handleSearchQuery()}
            icon={serachIcon}
            inputBorder={false}
            type="text"
            // iconSize="22px"
            placeholder={"Search ..."}
            required={true}
            error={errorMessage}
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
            onIconClick={() => searchQuery !== "" && handleSearchQuery()}
            icon={serachIcon}
            inputBorder={false}
            type="text"
            // iconSize="22px"
            placeholder={"Search ..."}
            required={true}
            error={errorMessage}
            label="Search ..."
        />
    </>
}

export default MainInputComponent;