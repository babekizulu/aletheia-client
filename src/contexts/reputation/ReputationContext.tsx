//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Reputation } from "../../types/reputation";

const ReputationContext = createContext<Reputation | undefined>(undefined);

function Provider({children}: Props) {
    const [reputationRating, setReputationRating] = useState(0);

    const values: Reputation = {
        children,
        reputationRating,
        setReputationRating
    }

    return (
        <ReputationContext.Provider value={values}>
            {children}
        </ReputationContext.Provider>
    );
};

export {ReputationContext, Provider};