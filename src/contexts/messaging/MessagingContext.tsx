//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type {Messaging} from "../../types/messaging";

const MessagingContext = createContext<Messaging | undefined>(undefined);

function Provider({children}: Props) {
    const [messageContent, setMessageContent] = useState('');
    const [typing, setTyping] = useState(false);
    const [sent, setSent] = useState(false);
    const [delivered, setDelivered] = useState(false);

    const values: Messaging = {
        children,
        messageContent,
        setMessageContent,
        typing,
        setTyping,
        sent,
        setSent,
        delivered,
        setDelivered
    }

    return (
        <MessagingContext.Provider value={values}>
            {children}
        </MessagingContext.Provider>
    );
};

export {MessagingContext, Provider}