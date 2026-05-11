//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type {Maps} from '../../types/maps';

const HeatmapContext = createContext<Maps | undefined>(undefined);

function Provider({children}: Props) {
    const [data, setData] = useState(0);

    const values: Maps = {
        children,
        data,
        setData
    }

    return (
        <HeatmapContext.Provider value={values}>
            {children}
        </HeatmapContext.Provider>
    );
}

export {HeatmapContext, Provider}