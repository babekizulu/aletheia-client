//libs
import type { Dispatch, SetStateAction, ReactNode } from "react";
import type { ObjectArray } from "../common";


export type Offline = {
    children: ReactNode;
    isOffline: boolean;
    setIsOffline: Dispatch<SetStateAction<boolean>>;
    pendingSyncs: boolean;
    setPendingSyncs: Dispatch<SetStateAction<boolean>>;
    cachedActions: ObjectArray;
    setCachedActions: Dispatch<SetStateAction<ObjectArray>>;
}

export type Sync = {
    children: ReactNode;
    syncStatus: string;
    setSyncStatus: Dispatch<SetStateAction<string>>;
    lastSyncedAt: Date | null;
    setLastSyncedAt: Dispatch<SetStateAction<Date | null>>;
}