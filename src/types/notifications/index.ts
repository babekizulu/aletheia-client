import type { ReactNode, Dispatch, SetStateAction } from "react"
import type { ObjectArray } from "../common";

export type Notifications = {
    children: ReactNode;
    read: boolean;
    setRead: Dispatch<SetStateAction<boolean>>;
    notifications: ObjectArray;
    setNotifications: Dispatch<SetStateAction<ObjectArray>>;
}