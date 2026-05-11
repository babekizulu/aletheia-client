//libs
import { createContext, useState } from "react";
import type { Props, ObjectArray } from "../../types/common";
import type { Notifications } from "../../types/notifications";

const NotificationContext = createContext<Notifications | undefined>(undefined);

function Provider({children}: Props) {
    const [read, setRead] = useState(true);
    const [notifications, setNotifications] = useState<ObjectArray>([]);

    const values: Notifications = {
        children,
        read,
        setRead,
        notifications,
        setNotifications
    }

    return (
        <NotificationContext.Provider value={values}>
            {children}
        </NotificationContext.Provider>
    );
};

export {NotificationContext, Provider}