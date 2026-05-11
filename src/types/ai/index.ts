import type { ReactNode, Dispatch, SetStateAction } from "react"

export type Prediction = {
    children: ReactNode;
    prediction: string;
    setPrediction: Dispatch<SetStateAction<string>>
}

export type Recommendation = {
    children: ReactNode;
    recommendation: string;
    setRecommendation: Dispatch<SetStateAction<string>>;
}