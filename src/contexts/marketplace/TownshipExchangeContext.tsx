//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { TownshipExchange } from "../../types/marketplace";

const TownshipExchangeContext = createContext<TownshipExchange | undefined>(undefined);

function Provider({children}: Props) {
    const [credits, setCredits] = useState(100);

    const values: TownshipExchange = {
        children,
        credits,
        setCredits
    }

    return (
        <TownshipExchangeContext.Provider value={values}>
            {children}
        </TownshipExchangeContext.Provider>
    );
};

export {TownshipExchangeContext, Provider};