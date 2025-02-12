import React, { useState } from "react";
import MainInput from "../components/formElemnts/MainInput.tsx"
import serachIcon from "../assets/search.svg"
function MainInputComponent() {
	const [searchQuery, setSearchQuery] = useState("");
	return <MainInput
        value={searchQuery}
        onChange={(value) => setSearchQuery(value as string)}
        height="32px"
        onIconClick={() => searchQuery !== "" && handleSearchQuery()}
        icon={serachIcon}
        inputBorder={false}
        type="text"
        placeholder={"Search ..."}
    />
}

export default MainInputComponent;