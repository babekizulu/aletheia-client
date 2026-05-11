import type { ReactNode, Dispatch, SetStateAction } from "react"
import type { ObjectArray } from "../common";

export type Marketplace = {
    children: ReactNode;
    products: ObjectArray;
    setProducts: Dispatch<SetStateAction<ObjectArray>>;
    services: ObjectArray;
    setServices: Dispatch<SetStateAction<ObjectArray>>;
}

export type Cart = {
    children: ReactNode;
    items: ObjectArray;
    setItems: Dispatch<SetStateAction<ObjectArray>>;
}

export type TownshipExchange = {
    children: ReactNode;
    credits: number;
    setCredits: Dispatch<SetStateAction<number>>;
}