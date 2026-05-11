//libs
import type { ReactNode } from "react"


export type Props = {
    children: ReactNode;
    prevDir: string;
}

export type Global = {
    prevDir: ReactNode;
}

export interface ObjectArray {
    [index: number] : object;
}

export interface StringArray {
    [index: number] : string;
}