import type { ReactNode, Dispatch, SetStateAction } from "react"

export type Maps = {
    children: ReactNode;
    data: number;
    setData: Dispatch<SetStateAction<number>>;
}