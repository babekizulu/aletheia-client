//libs
import type {ReactNode, Dispatch, SetStateAction} from 'react';

export type Socket = {
    children: ReactNode;
    socket: string;
    setSocket: Dispatch<SetStateAction<string>>;
    connected: boolean;
    setConnected: Dispatch<SetStateAction<boolean>>;
}