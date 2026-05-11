//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Forecast } from "../../types/finance";

const ForecastContext = createContext<Forecast | undefined>(undefined);

function Provider({children}: Props) {
    const [data, setData] = useState('');

    const values: Forecast = {
        children,
        data,
        setData
    }

    return (
        <ForecastContext.Provider value={values}>
            {children}
        </ForecastContext.Provider>
    )
}

export {ForecastContext, Provider}