//libs
import type {ReactNode, Dispatch, SetStateAction} from 'react';

export type Messaging = {
    children: ReactNode;
    messageContent: string;
    setMessageContent: Dispatch<SetStateAction<string>>;
    typing: boolean;
    setTyping: Dispatch<SetStateAction<boolean>>;
    sent: boolean;
    setSent: Dispatch<SetStateAction<boolean>>;
    delivered: boolean;
    setDelivered: Dispatch<SetStateAction<boolean>>;
}