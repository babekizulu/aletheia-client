import type { ReactNode, Dispatch, SetStateAction} from "react"

export type Verification = {
    children: ReactNode;
    idNumber: string;
    setIDNumber: Dispatch<SetStateAction<string>>;
    facialImage: string;
    setFacialImage: Dispatch<SetStateAction<string>>;
}