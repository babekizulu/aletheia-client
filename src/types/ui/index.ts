//libs
import type {ReactNode, Dispatch, SetStateAction} from 'react';
import type { StringArray } from '../common';

export type Modal = {
    children: ReactNode;
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
}

export type Sidebar = {
    children: ReactNode;
    items: StringArray;
    setItems: Dispatch<SetStateAction<StringArray>>;
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
}

export type Theme = {
    children: ReactNode;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

export type Toast = {
    children: ReactNode;
    displayToast: boolean;
    setDisplayToast: Dispatch<SetStateAction<boolean>>;
}