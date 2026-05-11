import type { ReactNode, Dispatch, SetStateAction} from "react"

export type Reputation = {
    children: ReactNode;
    reputationRating: number;
    setReputationRating: Dispatch<SetStateAction<number>>;
}