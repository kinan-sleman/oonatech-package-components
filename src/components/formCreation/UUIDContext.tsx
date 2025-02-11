import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface UUIDContextType {
    uuid: string;
    setUuid: React.Dispatch<React.SetStateAction<string>>;
    containerUuid: string;
    setContainerUuid: React.Dispatch<React.SetStateAction<string>>;
}

const UUIDContext = createContext<UUIDContextType | undefined>(undefined);

export const UUIDProvider = ({ children }: { children: React.ReactNode }) => {
    const [uuid, setUuid] = useState<string>(uuidv4());
    const [containerUuid, setContainerUuid] = useState<string>(uuidv4());

    const value: UUIDContextType = {
        uuid,
        containerUuid,
        setContainerUuid,
        setUuid,
    };

    return <UUIDContext.Provider value={value}>{children}</UUIDContext.Provider>;
};

export const useUUID = () => {
    const context = useContext(UUIDContext);
    if (!context) {
        throw new Error("useUUID must be used within a UUIDContext");
    }
    return context;
};
