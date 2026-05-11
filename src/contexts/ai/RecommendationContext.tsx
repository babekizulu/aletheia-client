//libs
import { createContext, useState } from "react";
import type { Recommendation } from "../../types/ai";
import type { Props } from "../../types/common";

const RecommendationContext = createContext<Recommendation | undefined>(undefined);

function Provider({children}: Props) {
    const [recommendation, setRecommendation] = useState('');
    const value: Recommendation = {
        children,
        recommendation,
        setRecommendation
    }
    return (
        <RecommendationContext.Provider value={value}>
            {children}
        </RecommendationContext.Provider>
    )
}

export {Provider, RecommendationContext}