//libs
import { createContext, useState } from "react";
import type { ObjectArray, Props } from "../../types/common";
import type { SupplyChain } from "../../types/supply_chain";

const SupplyChainContext = createContext<SupplyChain | undefined>(undefined);

function Provider({children}: Props) {
    const [supplyStatus, setSupplyStatus] = useState('');
    const [supplyRoutes, setSupplyRoutes] = useState<ObjectArray>([]);

    const values: SupplyChain = {
        children,
        supplyStatus,
        setSupplyStatus,
        supplyRoutes,
        setSupplyRoutes
    }

    return (
        <SupplyChainContext.Provider value={values}>
            {children}
        </SupplyChainContext.Provider>
    );
};

export {SupplyChainContext, Provider};
