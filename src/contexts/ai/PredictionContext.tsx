//libs
import { createContext, useState } from "react";
import type { Prediction } from "../../types/ai";
import type { Props } from "../../types/common";

const PredictionContext = createContext<Prediction | undefined>(undefined);

function Provider({children}: Props) {
    const [prediction, setPrediction] = useState('');
    const value: Prediction = {
        children,
        prediction,
        setPrediction
    }
    return (
        <PredictionContext.Provider value={value}>
            {children}
        </PredictionContext.Provider>
    )
}

export {Provider, PredictionContext}