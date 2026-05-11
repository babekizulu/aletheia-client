//libs
import type {ReactNode, Dispatch, SetStateAction} from 'react';

export type Language = {
    children: ReactNode;
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
}
