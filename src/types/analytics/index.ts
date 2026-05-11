//libs
import type {ReactNode, Dispatch, SetStateAction} from 'react';

export type Analytics = {
    children: ReactNode;
    data: string;
    setData: Dispatch<SetStateAction<string>>;
}