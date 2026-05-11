//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type {Sync} from "../../types/offline";

const SyncContext = createContext<Sync | undefined>(undefined);

function Provider({children}: Props) {
    const [syncStatus, setSyncStatus] = useState('');
    const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);

    const values: Sync = {
        children,
        syncStatus,
        setSyncStatus,
        lastSyncedAt,
        setLastSyncedAt
    }
    return (
        <SyncContext.Provider value={values}>
            {children}
        </SyncContext.Provider>
    );
};

export {SyncContext, Provider};