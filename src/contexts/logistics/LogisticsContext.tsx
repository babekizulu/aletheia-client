//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Logistics } from "../../types/logistics";

const LogisticsContext = createContext<Logistics | undefined>(undefined);

function Provider({children}: Props) {
    const [data, setData] = useState('');

    const values: Logistics = {
        children,
        data,
        setData
    };

    return (
        <LogisticsContext.Provider value={values}>
            {children}
        </LogisticsContext.Provider>
    )
}

export {LogisticsContext, Provider};