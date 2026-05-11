//libs
import { createContext, useState } from "react";
import type { ObjectArray, Props } from "../../types/common";
import type { Offline } from "../../types/offline";

const OfflineContext = createContext<Offline | undefined>(undefined);

function Provider({children}: Props) {
    const [isOffline, setIsOffline] = useState(false);
    const [pendingSyncs, setPendingSyncs] = useState(false);
    const [cachedActions, setCachedActions] = useState<ObjectArray>([]);

    const values: Offline = {
        children,
        isOffline,
        setIsOffline,
        pendingSyncs,
        setPendingSyncs,
        cachedActions,
        setCachedActions
    }

    return (
        <OfflineContext.Provider value={values}>
            {children}
        </OfflineContext.Provider>
    )
}

export {OfflineContext, Provider};