import type { ReactNode, Dispatch, SetStateAction } from "react"
import type { ObjectArray } from "../common";

export type Community = {
    children: ReactNode;
    feed: ObjectArray;
    setFeed: Dispatch<SetStateAction<ObjectArray>>
}