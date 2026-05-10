//libs
import { createContext } from "react";
import type { Prediction } from "../../types/ai";

const PredictionContext = createContext<Prediction | undefined>(undefined);

const value: Prediction {
    children
}

function Provider({children}) {
    return (
        <PredictionContext.Provider value={value}>
            {children}
        </PredictionContext.Provider>
    )
}

export {Provider, PredictionContext}