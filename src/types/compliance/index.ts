import type { ReactNode, Dispatch, SetStateAction} from "react"

export type Compliance = {
    children: ReactNode;
    companyName: string;
    setCompanyName: Dispatch<SetStateAction<string>>;
}