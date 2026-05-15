import type { ReactNode, Dispatch, SetStateAction} from "react"
//import type { ObjectArray } from "../common";
import type { DonutChartItem} from "../data-visualization";
import type { ObjectArray } from "../common";

export type Dashboard = {
    children: ReactNode;
    numberOfBusinesses: number;
    setNumberOfBusinesses: Dispatch<SetStateAction<number>>;
    newBusinessRate: number;
    setNewBusinessRate: Dispatch<SetStateAction<number>>;
    industries: DonutChartItem[];
    setIndustries: Dispatch<SetStateAction<DonutChartItem[]>>;
    jobsList: ObjectArray;
    setJobsList: Dispatch<SetStateAction<ObjectArray>>;
}

export type DataCard = {
    quantity: number;
    increaseRate: number;
    title: string;
}