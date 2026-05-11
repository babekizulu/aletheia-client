import type { ReactNode, Dispatch, SetStateAction } from "react"
import type { ObjectArray } from "../common";

export type Safety = {
    children: ReactNode;
    safetyTips: ObjectArray;
    setSafetyTips: Dispatch<SetStateAction<ObjectArray>>;
}