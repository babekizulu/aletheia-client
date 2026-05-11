import type { ReactNode, Dispatch, SetStateAction } from "react"

export type Finance = {
    children: ReactNode;
    selection: string;
    setSelection: Dispatch<SetStateAction<string>>;
}

export type Forecast = {
    children: ReactNode;
    data: string;
    setData: Dispatch<SetStateAction<string>>;
}

export type Wallet = {
    children: ReactNode;
    data: string;
    setData: Dispatch<SetStateAction<string>>;
}

