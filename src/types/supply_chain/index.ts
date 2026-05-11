import type { ReactNode, Dispatch, SetStateAction} from "react"
import type { ObjectArray } from "../common";

export type SupplyChain = {
    children: ReactNode;
    supplyStatus: string;
    setSupplyStatus: Dispatch<SetStateAction<string>>;
    supplyRoutes: ObjectArray;
    setSupplyRoutes: Dispatch<SetStateAction<ObjectArray>>;
}